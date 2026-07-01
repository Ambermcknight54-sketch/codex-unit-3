// 6. Header accepts a parameter called props
function Header(props) {
  // 14. Debugger removed from here as instructed

  return (
    <header>
      {/* 13. Access the title property using dot notation inside curly braces */}
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;
