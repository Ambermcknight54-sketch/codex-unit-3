export function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        To authenticate a user and conditionally render components in React, you
        check the user's authentication state—such as checking if a "user"
        object exists after querying your database or auth provider—and store a
        React component or JSX element in a variable (or use conditional inline
        rendering) to display different UI components based on whether the user
        is logged in or out.
      </p>
    </main>
  );
}
