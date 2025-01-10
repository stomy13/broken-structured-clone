import "./App.css";
import { ImmerOnly } from "./ImmerOnly";
import { ReactImmer } from "./ReactImmer";
import { StructuredCloneMap } from "./StructuredCloneMap";

function App() {
  return (
    <>
      <StructuredCloneMap />
      <ReactImmer />
      <ImmerOnly />
    </>
  );
}

export default App;
