import { NextPage } from "next";
import React from "react";
import { CodeSnippet } from "@/components/code-snippet";
import Image from "next/image";
import { getSession } from "@auth0/nextjs-auth0";

const Profile: NextPage = async () => {
  const session = await getSession();

  if (!(session && session.user)) {
    return null;
  }

  const { user } = session;

  return (
    <div className="content-layout">
      <h1 id="page-title" className="content__title">
        Profile Page
      </h1>
      <div className="content__body">
        <p id="page-description">
          <span>
            You can use the <strong>ID Token</strong> to get the profile
            information of an authenticated user.
          </span>
          <span>
            <strong>Only authenticated users can access this page.</strong>
          </span>
        </p>
        <div className="profile-grid">
          <div className="profile__header">
            {user.picture && (
              <Image
                src={user.picture}
                alt="Profile"
                className="profile__avatar"
                width={80}
                height={80}
              />
            )}
            <div className="profile__headline">
              <h2 className="profile__title">{user.name}</h2>
              <span className="profile__description">{user.email}</span>
            </div>
          </div>
          <div className="profile__details">
            <CodeSnippet
              title="Decoded ID Token"
              code={JSON.stringify(user, null, 2)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;