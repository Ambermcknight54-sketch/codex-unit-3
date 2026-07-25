export function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        To create data using the Prisma web client in React, capture user input
        through form fields and pass the form data object into the client's
        model method such as await prisma.products.create with parathesis and
        brackets around data: product. You can listen for the form's submit
        event or track state changes using custom hooks, and then execute the
        creation logic inside an asynchronous handler function or effect.
      </p>
    </main>
  );
}
