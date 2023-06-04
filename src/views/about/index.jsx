/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { AppliedFilters, ProductGrid, ProductList } from "@/components/product";
import { useDocumentTitle, useScrollTop } from "@/hooks";
import { shallowEqual, useSelector } from "react-redux";
import { selectFilter } from "@/selectors/selector";

const AboutPage = () => {
  useDocumentTitle("About | Lifeway's Trading Platform");
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
        <h2>About Lifeway's Trading Platform</h2>
        <p>
          Lifeway's website is a fully functional trading platform, not a
          gambling or gaming platform.
        </p>
        <p>
          Let's see the process of the Lifeway website in detail with an
          example:
        </p>
        <p>
          Two users, A and B, register on the Lifeway website. A is interested
          in B and invests $1,000 in him. Now, C is interested in B, and when
          everyone invests in B, B's profit is 0.3% of the total amount each and
          every time.
        </p>
        <p>After A invests $1,000 in B, C will invest in B; now:</p>
        <ul>
          <li>A's profit: 10%+</li>
          <li>B's profit: 0.3%+</li>
          <li>Service charge: 1.2%</li>
        </ul>
        <p>C will invest (e.g., $1,115) + current tax.</p>
        <p>Similarly, everyone will make a profit while investing.</p>
        <p>
          In this way, everyone will get two profits. One is a 10% profit when
          we invest, and another is a 0.3% profit when someone invests in us.
          What we need to know is that by choosing the right person, investing,
          and sharing our page with many people, we can raise a certain amount
          of money. We can earn a monthly income.
        </p>
        <p>ALL THE BEST MY FRIEND</p>
        <AppliedFilters filteredProductsCount={store.filteredProducts.length} />
        {/* <ProductList {...store}>
          <ProductGrid products={store.filteredProducts} />
        </ProductList> */}
      </section>
    </main>
  );
};

export default AboutPage;
