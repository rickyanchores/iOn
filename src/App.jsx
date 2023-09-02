import Form from "./Components/Form/Form";
import "./App.css";


export default function App() {
  return (
    <div className="App p-5 m-5 rounded-lg">
      <h1 className=" text-orange-500 font-extrabold text-6xl animate-pulse">i0N</h1>
      <h3 className=" font-bold text-xl">modern sticky-notes</h3>
      <div className="container m-auto">
        <Form />
      </div>
      <p>d3v by R1cky Anch0r3s </p>
    </div>
  );
}