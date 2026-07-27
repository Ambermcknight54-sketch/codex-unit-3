export function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        To create data from user input, collect the form data in your React
        state and send an HTTP POST request (using fetch) to an API route, this
        is where my backend handler uses Prisma Client (e.g.,{" "}
        <code>prisma.user.create()</code>) to save it to the database. For
        react, Prisma Client cannot run directly inside the browser / React
        components because it requires direct database connections and secret
        credentials. You always run Prisma code inside the API route and the
        React components communicate with that server via fetch().
      </p>
    </main>
  );
}
