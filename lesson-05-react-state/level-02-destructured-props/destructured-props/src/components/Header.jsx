// 10 & 14. Destructured the title property directly in the parameter block
function Header({ title }) {
  // 11. Debugger statement to inspect variables during execution
  // debugger;

  return (
    <header>
      {/* 16. Rendered the destructured title variable */}
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
