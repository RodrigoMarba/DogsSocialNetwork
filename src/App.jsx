import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import { UserStorage } from "./UserContext";
import User from "./Components/User/User";
import ProtectedRoutes from "./Components/Helper/ProtectedRoutes";
import Photo from "./Components/Photo/Photo";
import UserProfile from "./Components/User/UserProfile";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<UserStorage>
					<Header />
					<main className="AppBody">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="login/*" element={<Login />} />
							<Route
								path="account/*"
								element={
									<ProtectedRoutes>
										<User />
									</ProtectedRoutes>
								}
							/>
							<Route path="photo/:id" element={<Photo />} />
							<Route path="profile/:user" element={<UserProfile />} />
						</Routes>
					</main>
					<Footer />
				</UserStorage>
			</BrowserRouter>
		</div>
	);
};

export default App;
