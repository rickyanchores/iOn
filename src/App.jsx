import Form from "./Components/Form/Form";
import "./App.css";
import Blog from "./Components/Blog/Blog";

export default function App() {
  return (
    <div className="App bg-neutral-900 p-5 m-5">
      <h1>i0N</h1>
      <h3>m0d3rn bl0g w3bsit3</h3>
      <div className="container m-auto">
        <Form />
      </div>
      <p>d3v by R1cky Anch0r3s </p>
    </div>
  );
}