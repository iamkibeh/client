import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/UI/Login";
import HomePage from "./components/UI/HomePage";
import HomeNavBar from "./components/reusable/HomeNavBar";
import Footer from "./components/reusable/Footer";
import NavigationBar from "./components/reusable/NavigationBar";
import PostFeeds from "./components/pages/PostFeeds";
import MemmbersPage from "./components/pages/MemmbersPage";
import AllJobs from "./components/pages/AllJobs";
import FrontEnd from "./components/pages/FrontEnd";
import BackEnd from "./components/pages/BackEnd";
import FullStack from "./components/pages/FullStack";
import Mobile from "./components/pages/Mobile";
import DevOps from "./components/pages/DevOps";
function App() {
	return (
		<>
			<Router>
				<>
					<div className="display-flex">
						<HomeNavBar />
						<div className="position-bottom">
							<div className="App">
								<NavigationBar />
								<div className="home-page-container">
									<Routes>
										<Route exact path={"/"} element={<Login />} />
										<Route exact path={"/c/home/"} element={<PostFeeds />} />
										<Route
											exact
											path={"/m/memmbers"}
											element={<MemmbersPage />}
										/>
										<Route exact path={"/m/all-jobs/"} element={<AllJobs />} />
										<Route
											exact
											path={"/m/front-end/"}
											element={<FrontEnd />}
										/>
										<Route exact path={"/m/back-end/"} element={<BackEnd />} />
										<Route
											exact
											path={"/m/full-stack/"}
											element={<FullStack />}
										/>
										<Route exact path={"/m/mobile/"} element={<Mobile />} />
										<Route exact path={"/m/devops/"} element={<DevOps />} />
									</Routes>
								</div>
							</div>
							<Footer />
						</div>
					</div>
				</>
			</Router>
		</>
	);
}

export default App;
