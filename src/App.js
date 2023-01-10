import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/UI/Login";
import Signup from "./components/UI/Signup";
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
import Welcome from "./components/pages/Welcome";
import StartHere from "./components/pages/StartHere";
import FAQ from "./components/pages/FAQ";
import HireTalent from "./components/pages/HireTalent";
import HireTalentLogin from "./components/pages/HireTalentLogin";
import HireTalentSIgnUp from "./components/pages/HireTalentSIgnUp";
import HomePage from "./components/pages/HomePage";
function App() {
	return (
		<>
			<Router>
				<>
					<div className="display-flex">
						{/* <HomeNavBar /> */}
						<div className="position-bottom">
							<div className="App">
								{/* <NavigationBar /> */}
								<div className="home-page-container">
									<Routes>
										<Route path="/" element={<HomePage />} />
										<Route exact path={"/login"} element={<Login />} />
										<Route exact path={"/signup"} element={<Signup />} />
										<Route exact path={"/hire-talent"} element={<HireTalent />}>
											<Route index path="" element={<HireTalentSIgnUp />} />
											<Route path="login" element={<HireTalentLogin />} />
										</Route>
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
										<Route exact path={"/m/welcome/"} element={<Welcome />} />
										<Route
											exact
											path={"/m/start-here/"}
											element={<StartHere />}
										/>
										<Route exact path={"/m/faq/"} element={<FAQ />} />
									</Routes>
								</div>
							</div>
							{/* <Footer /> */}
						</div>
					</div>
				</>
			</Router>
		</>
	);
}

export default App;
