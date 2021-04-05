import React from "react";
import "./Footer.css";

import { Row, Col, Link } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
	render() {
		return (
			<div className="footer">
				<p className=" ">
					A tribute to the most Hilarious and Practical Tech show ever -{" "}
					<a target="_blank" href="https://www.hbo.com/silicon-valley">
						Silicon Valley{" "}
					</a>
				</p>
				<p className=" ">
					Made with 🧡 by <i class="fa fa-twitter" aria-hidden="true"></i>
					{"  "}
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
