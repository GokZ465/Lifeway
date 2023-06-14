import { ImageLoader } from "@/components/common";
import PropType from "prop-types";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";

const UserList = ({ product }) => {
  const [investedAmount, setInvestedAmount] = React.useState(10); // Add a new state variable
  const history = useHistory();
  const onClickItem = () => {
    // if (!product) return;
    // history.push(`/product/${product.id}`);
  };
  React.useEffect(() => {
    const fetchInvestedAmount = async () => {
      const userId = product.id; // Replace with the actual user ID
      const userRef = firebase.firestore().collection("users").doc(userId);
      const userDoc = await userRef.get();
      const currentInvestedAmount = userDoc.data()?.investedAmount || 10;

      setInvestedAmount(currentInvestedAmount);
    };

    fetchInvestedAmount();
  }, [product.id]);

  const handleInvestment = async () => {
    const baseAmount = 10;
    const customerProfit = 0.1 * baseAmount;
    const investingPageProfit = 0.003 * baseAmount;
    const websiteProfit = 0.012 * baseAmount;
    const tax = 0.05 * baseAmount;
    history.push(`/payment`);
    const overallAmount =
      baseAmount + customerProfit + investingPageProfit + websiteProfit + tax;

    // Retrieve the user document
    const userId = product.id; // Replace with the actual user ID
    const userRef = firebase.firestore().collection("users").doc(userId);
    const userDoc = await userRef.get();
    const currentInvestedAmount = userDoc.data()?.investedAmount || 0;

    // Calculate the new invested amount
    const newInvestedAmount = currentInvestedAmount + overallAmount;
    const formattedInvestedAmount = newInvestedAmount.toFixed(2); // Format to 2 decimal places

    setInvestedAmount(formattedInvestedAmount);

    // Update the user document with the new invested amount
    await userRef.update({ investedAmount: formattedInvestedAmount });
    // console.log("Overall Investment Amount:", overallAmount);
    // console.log("New Invested Amount:", formattedInvestedAmount);
  };

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div
        className="product-display"
        onClick={onClickItem}
        role="presentation"
        style={{ marginBottom: "40px" }} // Add inline CSS to increase the bottom margin
      >
        <div className="product-display-img">
          {product.avatar ? (
            <ImageLoader className="product-card-img" src={product.avatar} />
          ) : (
            <Skeleton width="100%" height="100%" />
          )}
        </div>
        <div className="product-display-details">
          <h2>{product.fullname || <Skeleton width={80} />}</h2>
          <p className="text-subtle text-italic">
            {product.email || <Skeleton width={40} />}
          </p>
          <button
            style={{ marginLeft: "auto" }} // Add inline CSS to align the button to the right
            className="button"
            onClick={handleInvestment}
          >
            Invest {investedAmount}$
          </button>
        </div>
      </div>
    </SkeletonTheme>
  );
};

UserList.propTypes = {
  product: PropType.shape({
    avatar: PropType.string,
    fullname: PropType.string,
    email: PropType.string,
    id: PropType.string,
  }).isRequired,
};

export default UserList;
