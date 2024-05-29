import React from "react";
import { SignupButton } from "@/components/buttons/signup-button";
import { LoginButton } from "@/components/buttons/login-button";
import { LogoutButton } from "@/components/buttons/logout-button";
import { Claims } from "@auth0/nextjs-auth0";

interface NavBarButtonsProps {
  user: Claims | null;
}

export const NavBarButtons: React.FC<NavBarButtonsProps> = ({ user }) => {
  return (
    <div className="nav-bar__buttons">
      {!user && (
        <>
          <SignupButton />
          <LoginButton />
        </>
      )}
      {user && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};
