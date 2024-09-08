import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Header siteTitle={title} siteDescription={description} />
      <div className="mx-auto max-w-screen-md px-4 py-6">
        <main>{children}</main>
      </div>
    </>
  );
};
