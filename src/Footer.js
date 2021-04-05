import React from "react";
import "./Footer.css";

import { Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
	render() {
		return (
			<div className="footer">
				<p className=" ">
					A tribute to the most Hilarious and Practical Tech show ever - Silicon
					Valley
				</p>
				<p className=" ">
					Made with ♥ by{" "}
					<a target="_blank" href="https://twitter.com/saumya4real">
						Saumya Ranjan Nayak
					</a>
					.
				</p>
			</div>
		);
	}
}

export default App;
