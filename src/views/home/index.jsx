import { ArrowRightOutlined } from "@ant-design/icons";
import { MessageDisplay } from "@/components/common";
import { ProductShowcaseGrid, UserShowcaseGrid } from "@/components/product";
//import PaymentForm from "@/components/payment/paymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import family from "@/images/family.jpg";
import StripeConfig from "@/services/stripeConfig";

import {
  FEATURED_PRODUCTS,
  RECOMMENDED_PRODUCTS,
  SHOP,
  ABOUT,
} from "@/constants/routes";
import {
  useDocumentTitle,
  useFeaturedProducts,
  useUsersWithRole,
  useRecommendedProducts,
  useScrollTop,
} from "@/hooks";
import bannerImg from "@/images/banner-girl.png";
import React from "react";
import { Link } from "react-router-dom";
import ChartHome from "../charts/ChartHome";

const stripePromise = loadStripe(StripeConfig.publicKey);

const Home = () => {
  useDocumentTitle("Lifeway | Home");
  useScrollTop();

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured,
  } = useFeaturedProducts(6);
  const {
    users,
    isLoading: isLoadingUser,
    error: errorUser,
  } = useUsersWithRole("USER", 3);

  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingRecommended,
    error: errorRecommended,
  } = useRecommendedProducts(6);

  return (
    <div>
      <ChartHome />

      <main className="content">
        <div className="home">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ flex: 1, marginRight: "20px" }}>
              <img src={family} alt="" style={{ maxWidth: "90rem" }} />
            </div>
            <div style={{ flex: 1, padding: "10px", marginLeft: "10rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    color: "green",
                    marginRight: "10px",
                    fontSize: "24px",
                  }}
                >
                  ✓
                </span>
                <p style={{ fontSize: "2.5rem" }}>Payment guarantee</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    color: "green",
                    marginRight: "10px",
                    fontSize: "24px",
                  }}
                >
                  ✓
                </span>
                <p style={{ fontSize: "2.5rem" }}>Easy way to earn</p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    color: "green",
                    marginRight: "10px",
                    fontSize: "24px",
                  }}
                >
                  ✓
                </span>
                <p style={{ fontSize: "2.5rem" }}>Customer support</p>
              </div>
            </div>
          </div>
          <div className="display">
            <div className="display-header">
              <h1>Trending Pages</h1>
              <Link to={FEATURED_PRODUCTS}>See All</Link>
            </div>
            {errorFeatured && !isLoadingFeatured ? (
              <MessageDisplay
                message={errorFeatured}
                action={fetchFeaturedProducts}
                buttonLabel="Try Again"
              />
            ) : (
              <UserShowcaseGrid products={users} skeletonCount={6} />
            )}
          </div>

          {/* <div>
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </div> */}
          <div className="display">
            <div className="display-header">
              <h1>User Reviews</h1>
              <Link to={RECOMMENDED_PRODUCTS}>See All</Link>
            </div>
            {errorRecommended && !isLoadingRecommended ? (
              <MessageDisplay
                message={errorRecommended}
                action={fetchRecommendedProducts}
                buttonLabel="Try Again"
              />
            ) : (
              <ProductShowcaseGrid
                products={recommendedProducts}
                skeletonCount={6}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
