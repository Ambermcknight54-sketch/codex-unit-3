import pic1 from "./assets/pic1.jpg";
import pic2 from "./assets/pic2.jpg";
import pic3 from "./assets/pic3.jpg";
import "./App.css";

export default function App() {
  return (
    <main>
      <h1>React Images</h1>
      <p>
        To display local images in a React app, you first import the file from
        your assets folder at the top of the component file, assigning it to a
        variable name. Then, you pass that variable inside curly braces directly
        into the image tag's source attribute.
      </p>
      {/* Wrapped the variables in curly braces here */}
      <img src={pic1} alt="First gallery item" />
      <img src={pic2} alt="Second gallery item" />
      <img src={pic3} alt="Third gallery item" />
    </main>
  );
}
