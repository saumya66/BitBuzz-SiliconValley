import React, { Component } from "react";
import "./Price.css";
import alert from "./assets/alert.mp3";
import up from "./assets/up.png";
import down from "./assets/down.png";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Price extends React.Component {
	state = {
		loading: true,
		curPrice: 0.0,
		change: up,
	};

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log("prevState.curPrice = ", prevState.curPrice);
		console.log("this.state.curPrice = ", this.state.curPrice);

		this.action(prevState.curPrice, this.state.curPrice);
	}

	async apicall() {
		const curPriceUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";
		const res = await fetch(curPriceUrl);
		const data = await res.json();
		this.setState({ loading: false, curPrice: data.bpi.USD.rate_float });
	}

	componentDidMount() {
		this.intervalId = setInterval(() => this.apicall(), 10000);
		this.apicall();
	}

	action(pr, cur) {
		if (parseFloat(pr) !== parseFloat(cur)) {
			let audio = new Audio(alert);
			if (parseFloat(pr) > parseFloat(cur)) {
				this.setState({ change: down });
				audio.play();
			}
			if (parseFloat(pr) <= parseFloat(cur)) this.setState({ change: up });
		} else {
		}
	}

	render() {
		return (
			<div className="Price">
				{this.state.loading == true ? (
					<h1>Loading...........</h1>
				) : (
					<Row className="priceRow">
						<h2 className="price">$ {this.state.curPrice}</h2>

						<img src={this.state.change} height="150px"></img>
					</Row>
				)}
			</div>
		);
	}
}

export default Price;

//fetch(curPriceUrl) .then((response) => response.json()) .then((data) => setCurPrice(data.bpi.USD.rate_float)) .then(setLoading(false));
