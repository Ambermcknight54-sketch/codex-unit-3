// 15. Added the props object as a parameter
function Main(props) {
  // 14. Added the debugger here to inspect the incoming message
  // debugger;

  return (
    <main>
      {/* 19. Render the message property inside a paragraph tag */}
      <p>{props.message}</p>
    </main>
  );
}

export default Main;
