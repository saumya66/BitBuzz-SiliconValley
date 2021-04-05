import React from "react";
import "./App.css";

import Price from "./Price";
import Chart from "./Charts";
import { Row, Col } from "react-bootstrap";

import Converter from "./Convert";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Price />
				<Row>
					<Col md={8}>
						<Chart />
					</Col>
					<Col md={4}>
						<Converter />
					</Col>
				</Row>
				<Footer />
			</div>
		);
	}
}

export default App;
