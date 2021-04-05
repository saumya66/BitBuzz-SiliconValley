import React from "react";
import "./Convert.css";
import { Form } from "react-bootstrap";
class Convert extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			btcAmt: null,
			inrRate: 0,
			dolBtcRate: 0,
			inrOwn: 0,
			dolOwn: 0,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	async componentDidMount() {
		const inrRateUrl =
			"https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=586506765d9fb7e080d0";
		const res1 = await fetch(inrRateUrl);
		const data1 = await res1.json();
		this.setState({ inrRate: parseFloat(data1.USD_INR) });

		const dolRateUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";
		const res2 = await fetch(dolRateUrl);
		const data2 = await res2.json();
		this.setState({ dolBtcRate: data2.bpi.USD.rate_float });
	}

	handleChange(e) {
		this.setState({ btcAmt: parseFloat(e.target.value) + 0.0 });
		this.setState({
			dolOwn: parseFloat(this.state.btcAmt) * parseFloat(this.state.dolBtcRate),
			inrOwn:
				parseFloat(this.state.btcAmt) *
				parseFloat(this.state.dolBtcRate) *
				parseFloat(this.state.inrRate),
		});
		console.log(this.state.btcAmt);
	}
	render() {
		return (
			<div className="converter">
				<h5 className="title">BitBuzz</h5>
				<p>
					Inspired from the the Bitcoin volatility scene from the show Silicon
					Valley, BitBuzz also produces a loud noise when the price of BTC drops
					in real-time live.{" "}
				</p>
				<p className="mb-0">
					Btw, Let's check what your Bitcoin is worth literally now !
				</p>
				<Form className="m-0">
					<Form.Group>
						<Form.Label>
							<h5>BTC</h5>
						</Form.Label>
						<Form.Control
							placeholder="Enter amount of BTC"
							onChange={this.handleChange}
						/>
						<Form.Text>Add a '.' at the end</Form.Text>
					</Form.Group>
				</Form>
				<p className="result">
					Great you own 💲 {Math.round(this.state.dolOwn)} or ₹{" "}
					{Math.round(this.state.inrOwn)}! 💰
				</p>
			</div>
		);
	}
}

export default Convert;
