export const SignupButton = () => {
  return (
    // Route Handler that 302s to Auth0, so it needs a full navigation, not client-side routing.
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a className="button__sign-up" href="/api/auth/signup">
      Sign Up
    </a>
  );
};
