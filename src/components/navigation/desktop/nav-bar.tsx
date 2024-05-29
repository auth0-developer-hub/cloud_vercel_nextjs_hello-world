import React from "react";
import { NavBarBrand } from "./nav-bar-brand";
import { NavBarButtons } from "./nav-bar-buttons";
import { NavBarTabs } from "./nav-bar-tabs";
import { getSession } from "@auth0/nextjs-auth0";

export const NavBar: React.FC = async () => {
  const session = await getSession();

  return (
    <div className="nav-bar__container">
      <nav className="nav-bar">
        <NavBarBrand />
        <NavBarTabs user={session && session.user ? session.user : null} />
        <NavBarButtons user={session && session.user ? session.user : null} />
      </nav>
    </div>
  );
};
