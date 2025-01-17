import "./App.css";
import { FrozenMap } from "./components/FrozenMap";
import { ImmerOnly } from "./components/ImmerOnly";
import { ReactImmer } from "./components/ReactImmer";
import { SymbolKeyMap } from "./components/SymbolKeyMap";
import { ZustandImmer } from "./components/ZustandImmer";

function App() {
	return (
		<>
			<ZustandImmer />
			<ReactImmer />
			<FrozenMap />
			<SymbolKeyMap />
			<ImmerOnly />
		</>
	);
}

export default App;
