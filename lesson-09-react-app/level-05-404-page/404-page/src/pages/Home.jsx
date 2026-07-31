export function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        To create a 404 page that automatically redirects, use the custom
        useRedirect the hook inside the Page404 component and pass it the target
        URL along with the delay in milliseconds useRedirect("/", 5000).
      </p>
    </main>
  );
}
