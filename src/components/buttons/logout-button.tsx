export const LogoutButton = () => {
  return (
    // Route Handler that 302s to Auth0, so it needs a full navigation, not client-side routing.
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a className="button__logout" href="/api/auth/logout">
      Log Out
    </a>
  );
};
