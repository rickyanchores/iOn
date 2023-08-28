import Form from "./Components/Form/Form";
import "./App.css";
import Blog from "./Components/Blog/Blog";

export default function App() {
  return (
    <div className="App bg-neutral-900 border-red-50 border-2 flex flex-col justify-center p-20 rounded-md">
      <h1>i0N</h1>
      <h3>m0d3rn bl0g w3bsit3</h3>
      <Form />
      <Blog />
      <p>d3v by R1cky Anch0r3s </p>
    </div>
  );
}