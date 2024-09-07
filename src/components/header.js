import { Link as GatsbyLink } from "gatsby";
import React from "react";

export const Header = ({ siteTitle, siteDescription }) => {
  return (
    <header className="bg-highlight mb-6">
      <div className="mx-auto max-w-screen-sm p-6">
        <GatsbyLink to="/" className="text-2xl font-bold text-gray-900">
          {siteTitle}
        </GatsbyLink>
        <p className="text-gray-600 mt-2">{siteDescription}</p>
      </div>
    </header>
  );
};
