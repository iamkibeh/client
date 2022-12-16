import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/UI/Login";
import HomePage from "./components/UI/HomePage";
function App() {
	return (
		<>
			<Router>
				<>
					<div className="App">
						<Routes>
							<Route exact path={"/"} element={<Login />} />
							<Route exact path={"/home"} element={<HomePage />} />
						</Routes>
					</div>
				</>
			</Router>
		</>
	);
}

export default App;
