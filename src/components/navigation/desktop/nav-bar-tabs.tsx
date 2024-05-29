import React from "react";
import { NavBarTab } from "./nav-bar-tab";
import { Claims } from "@auth0/nextjs-auth0";

interface NavBarTabsProps {
  user: Claims | null;
}

export const NavBarTabs: React.FC<NavBarTabsProps> = ({ user }) => {
  return (
    <div className="nav-bar__tabs">
      <NavBarTab path="/profile" label="Profile" />
      <NavBarTab path="/public" label="Public" />
      {user && (
        <>
          <NavBarTab path="/protected" label="Protected" />
          <NavBarTab path="/admin" label="Admin" />
        </>
      )}
    </div>
  );
};
