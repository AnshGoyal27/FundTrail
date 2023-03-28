import { Routes, Route } from "react-router-dom";
import Input from "./components/input";
import Flowchart from "./components/flowchart";
import Flow from "./components/flow";
import { Subflow } from "./components/subflow";
import { FlowGroup } from "./components/flowGroup";
import NewFlow from "./components/newFlow";

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Input />}/>
				<Route path="/flowchart" element={<Flowchart />} />
				<Route path="/flow" element={<Flow />} />
				<Route path="/subflow" element={<FlowGroup/>} />
				<Route path="/collapse" element={<NewFlow/>} />
			</Routes>
		</div>
	);
};


export default App;
