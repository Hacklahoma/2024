import React from "react";
import "../../styles/header.scss";
import Button from "../Button.js";

/**
 * Contains all the header needs
 */
const Header = () => (
	<div className="header">
		<div className="header-logo"></div>
		<div className="content">
			<div className="header-text">
				<h1>Hacklahoma 2024</h1>
				<div className="subcontent">
					<p align="center">April 1st-2nd | University of Oklahoma</p>
				</div>
				<div className="registration" align="center">
					<Button href="https://register.hacklahoma.org/>" primaryColor="#ffffff" secondaryColor="#000000" rounded>
						Register Now!
					</Button>
				</div>
			</div>

			{/* <a href="/" className="register"><p>Register</p></a> */}
		</div>
	</div>
);

export default Header;
