/* eslint-disable react/forbid-prop-types */
import { UserList } from "@/components/product";
import PropType from "prop-types";
import React from "react";

const UserShowcaseGrid = ({ products, skeletonCount }) => (
  <div className="product-display-grid">
    {console.log(products)}

    {products.length === 0
      ? new Array(skeletonCount).fill({}).map((product, index) => (
          <UserList
            // eslint-disable-next-line react/no-array-index-key
            key={`product-skeleton ${index}`}
            product={product}
          />
        ))
      : products.map((product) => (
          <UserList key={product.id} product={product} />
        ))}
  </div>
);

UserShowcaseGrid.defaultProps = {
  skeletonCount: 4,
};

UserShowcaseGrid.propTypes = {
  products: PropType.array.isRequired,
  skeletonCount: PropType.number,
};

export default UserShowcaseGrid;
