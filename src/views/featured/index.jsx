import { MessageDisplay } from "@/components/common";
import { UserShowcaseGrid } from "@/components/product";
import { useDocumentTitle, useUsersWithRole, useScrollTop } from "@/hooks";
import bannerImg from "@/images/banner-guy.png";
import React from "react";

const FeaturedProducts = () => {
  useDocumentTitle("Trending | Lifeway");
  useScrollTop();

  const { users, isLoading, error, fetchUsersWithRole } =
    useUsersWithRole("USER");

  return (
    <main className="content">
      <div className="featured">
        <div className="banner">
          <div className="banner-desc">
            <h1>Featured Users</h1>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
        <div className="display">
          <div className="product-display-grid">
            {error && !isLoading ? (
              <MessageDisplay
                message={error}
                action={fetchUsersWithRole}
                buttonLabel="Try Again"
              />
            ) : (
              <UserShowcaseGrid products={users} skeletonCount={6} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default FeaturedProducts;
