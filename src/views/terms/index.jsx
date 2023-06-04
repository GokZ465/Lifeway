/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { AppliedFilters, ProductGrid, ProductList } from "@/components/product";
import { useDocumentTitle, useScrollTop } from "@/hooks";
import { shallowEqual, useSelector } from "react-redux";
import { selectFilter } from "@/selectors/selector";

const TermsAndConditionsPage = () => {
  useDocumentTitle("Terms and Conditions | Lifeway Trading Platform");
  useScrollTop();

  const store = useSelector(
    (state) => ({
      filteredProducts: selectFilter(state.products.items, state.filter),
      products: state.products,
      requestStatus: state.app.requestStatus,
      isLoading: state.app.loading,
    }),
    shallowEqual
  );

  return (
    <main className="content">
      <section className="product-list-wrapper">
        <h2>Terms and Conditions</h2>
        <h3>Registration Commands</h3>
        <p>
          All the details you provide must be genuine and authorized by law. If
          you post any false information, your entire page will be taken over by
          the Lifeway website, and all the money in it will be used to solve the
          problem and handed over to the government.
        </p>
        <h3>Edit Details Command</h3>
        <p>
          If you want to edit any of the user's details, such as mobile number,
          email, etc., fill out the form on the Edit My Profile page and submit
          it with a valid reason. The money that is invested in this is money
          that you choose to invest on behalf of the other person. The website
          acts as a bridge for this, keeping your details and money as safe and
          dignified as possible with government approval. Beyond that, the
          website will not be responsible for any mistakes, and the user will be
          solely responsible for them. By agreeing to this and investing in the
          website, you acknowledge the terms and conditions and agree to make a
          profit. Thanks a lot!
        </p>
        <AppliedFilters filteredProductsCount={store.filteredProducts.length} />
      </section>
    </main>
  );
};

export default TermsAndConditionsPage;
