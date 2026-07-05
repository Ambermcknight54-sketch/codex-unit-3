// 6. Header accepts a parameter called props
export default function Header(props) {
  return (
    <header>
      {/* 13. Access the title property using dot notation inside curly braces */}
      <h1>{props.title}</h1>
    </header>
  );
}
