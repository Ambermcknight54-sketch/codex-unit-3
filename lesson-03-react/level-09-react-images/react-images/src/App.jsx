import pic1 from "./assets/emojiCode.jpg";
import pic2 from "./assets/madEmoji.jpg";
import pic3 from "./assets/sademoji.jpg";
import "./App.css";

function App() {
  return (
    <main>
      <h1>React Images</h1>
      <p>
        To display local images in a React app, you first import the file from
        your assets folder at the top of the component file, assigning it to a
        variable name. Then, you pass that variable inside curly braces directly
        into the image tag's source attribute.
      </p>
      <div id="images">
        <img src={pic1} />
        <img src={pic2} />
        <img src={pic3} />
      </div>
    </main>
  );
}
export default App;
