import { Link } from "gatsby";
import React from "react";
import { Button } from "./Button"

export const Header = ({ siteTitle, siteDescription }) => {
  return (
    <header className="bg-highlight mb-6">
      <div className="mx-auto max-w-screen-sm p-6">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          {siteTitle}
        </Link>
        <p className="text-gray-600 mt-2">{siteDescription}</p>
        <div className="hidden min-[416px]:contents">
        </div>
      </div>
    </header>
  );
};
