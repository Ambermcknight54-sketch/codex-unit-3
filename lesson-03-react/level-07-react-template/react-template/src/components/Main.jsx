import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Main() {
  // const [didMount, setDidMount] = useState(false);
  // useEffect(componentDidMount, MOUNT_PHASE);
  return (
    <main>
      {/* <p>{"didMount: " + didMount}</p> */}
      <h2> What is a React Template</h2>
      <p>
        <Header />

        <Main />

        <Footer />
      </p>
    </main>
  );
}
// function componentDidMount() {
//     setDidMount(true);
//     const figures = [];

//     for (let index = 0; index < data.length; index++) {
//       const item = data[index];
//       const figure = (
//         <figure>
//           <img src={item.src} />
//           <figcaption>{item.caption}</figcaption>
//         </figure>
//       );
//       figures.push(figure);
//     }
//   }
