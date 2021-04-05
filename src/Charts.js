import React from "react";
import "./Chart.css";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";

class Charts extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [
				{
					name: "series1",
					data: [
						55853.7717,
						55777.2867,
						57641.5567,
						58795.9467,
						58793.8417,
						58726.6833,
						58981.1117,
						57065.38,
					],
				},
			],

			options: {
				chart: {
					height: 350,
					type: "area",
				},
				dataLabels: {
					enabled: false,
				},
				stroke: {
					curve: "smooth",
				},
				xaxis: {
					type: "date",
					categories: [],
				},
				tooltip: {
					x: {
						format: "dd/MM/yy",
					},
				},
			},
		};
	}
	async componentDidMount() {
		const url = "https://api.coindesk.com/v1/bpi/historical/close.json";
		const res = await fetch(url);
		const data = await res.json();
		// console.log(data.bpi);
		let date = [];
		let i = 0,
			j = 0;
		for (let key in data.bpi) {
			if (i >= 23) {
				date[j] = key;
				++j;
			}
			++i;
		}
		console.log(date);
		this.setState((prevState) => ({
			...prevState,
			options: {
				...prevState.options,
				xaxis: {
					...prevState.options.xaxis,
					categories: date,
				},
			},
		}));

		let price = Object.values(data.bpi);
		console.log(price);
	}

	render() {
		return (
			<div className="chart">
				<ReactApexChart
					options={this.state.options}
					series={this.state.series}
					type="area"
					height={350}
				/>
			</div>
		);
	}
}

export default Charts;
