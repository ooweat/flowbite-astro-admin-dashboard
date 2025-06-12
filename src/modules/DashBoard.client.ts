/* eslint-disable max-lines */

import ApexCharts from 'apexcharts';

/*시간대별 매출액*/
//시간대별 매출액 차트
export const getDayOfTimeSalesChart = (todays: number[], yesterdays: number[]) => {
	const chart = new ApexCharts(
		document.getElementById('day-of-time-sales-chart'),
		getDayOfTimeSalesChartOptions(todays, yesterdays),
	);
	chart.render();
}
//시간대별 매출액 옵션
const getDayOfTimeSalesChartOptions = (todays: number[], yesterdays: number[]) => {
	let mainChartColors = {
		borderColor: '#F3F4F6',
		labelColor: '#6B7280',
		opacityFrom: 0.45,
		opacityTo: 0,
	};

	if (document.documentElement.classList.contains('dark')) {
		mainChartColors = {
			borderColor: '#374151',
			labelColor: '#9CA3AF',
			opacityFrom: 0,
			opacityTo: 0.15,
		};
	}

	return {
		chart: {
			height: 250,
			type: 'area',
			fontFamily: 'Inter, sans-serif',
			foreColor: mainChartColors.labelColor,
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false,
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				enabled: true,
				opacityFrom: mainChartColors.opacityFrom,
				opacityTo: mainChartColors.opacityTo,
			},
		},
		dataLabels: {
			enabled: false,
		},
		tooltip: {
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif',
			},
		},
		grid: {
			show: true,
			borderColor: mainChartColors.borderColor,
			strokeDashArray: 1,
			padding: {
				left: 35,
				bottom: 15,
			},
		},
		series: [
			{
				name: '오늘',
				data: todays,
				color: '#1A56DB',
			},
			{
				name: '어제',
				data: yesterdays,
				color: '#FDBA8C',
			},
		],
		markers: {
			size: 5,
			strokeColors: '#ffffff',
			hover: {
				size: undefined,
				sizeOffset: 3,
			},
		},
		xaxis: {
			categories: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
			labels: {
				style: {
					colors: [mainChartColors.labelColor],
					fontSize: '13px',
					fontWeight: 400,
				},
				formatter(value: number) {
					return `${value}시`;
				},
			},
			axisBorder: {
				color: mainChartColors.borderColor,
			},
			axisTicks: {
				color: mainChartColors.borderColor,
			},
		},
		yaxis: {
			labels: {
				style: {
					colors: [mainChartColors.labelColor],
					fontSize: '13px',
					fontWeight: 400,
				},
				formatter: (value: number) => {
					return `${(value / 1000)}K`;
				},
			},
		},
		legend: {
			fontSize: '13px',
			fontWeight: 400,
			fontFamily: 'Inter, sans-serif',
			position: 'right',
			labels: {
				colors: [mainChartColors.labelColor],
			},
			itemMargin: {
				horizontal: 0,
			},
		},
		responsive: [
			{
				breakpoint: 1024,
				options: {
					xaxis: {
						labels: {
							show: false,
						},
					},
				},
			},
		],
	};
};
/*시간대별 매출액*/

/*최근 7일 매출액*/
//최근 7일 매출액 차트
export const getWeekSalesChart = (amounts: number[], counts: number[]) => {
	const chart = new ApexCharts(
		document.getElementById('week-sales-chart'),
		getWeekSalesChartOptions(amounts, counts),
	);
	chart.render();
}
//최근 7일 매출액 옵션
const getWeekSalesChartOptions = (amounts: number[], counts: number[]) => {
	let mainChartColors = {
		borderColor: '#F3F4F6',
		labelColor: '#6B7280',
		opacityFrom: 0.45,
		opacityTo: 0,
	};

	if (document.documentElement.classList.contains('dark')) {
		mainChartColors = {
			borderColor: '#374151',
			labelColor: '#9CA3AF',
			opacityFrom: 0,
			opacityTo: 0.15,
		};
	}

	return {
		chart: {
			height: 250,
			type: 'line',
			fontFamily: 'Inter, sans-serif',
			foreColor: mainChartColors.labelColor,
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false,
			}
		},
		dataLabels: {
			enabled: false,
		},
		tooltip: {
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif',
			},
		},
		grid: {
			show: true,
			borderColor: mainChartColors.borderColor,
			strokeDashArray: 1,
			padding: {
				left: 35,
				bottom: 15,
			},
		},
		colors: ['#1A56DB', '#FDBA8C'],
		series: [
			{
				name: "매출액",
				type: 'column',
				data: amounts,
			},
			{
				name: "건수",
				type: 'line',
				data: counts,
			},
		],
		stroke: {
			width: [0, 4]
		},
		xaxis: {
			categories: ['01', '02', '03', '04', '05', '06', '07',],
			type: 'column',
			labels: {
				style: {
					colors: [mainChartColors.labelColor],
					fontSize: '13px',
					fontWeight: 400,
				},
				formatter(value: number) {
					return `${value} 일`;
				},
			},
			axisBorder: {
				color: mainChartColors.borderColor,
			},
			axisTicks: {
				color: mainChartColors.borderColor,
			},
		},
		yaxis: [
			{
				labels: {
					style: {
						colors: [mainChartColors.labelColor],
						fontSize: '13px',
						fontWeight: 400,
					},
					formatter: (value: number) => {
						return `${(value / 1000)}K`;
					},
				},
				axisTicks: {
					show: true
				},
				axisBorder: {
					show: true,
				},
			},
			{
				labels: {
					style: {
						colors: [mainChartColors.labelColor],
						fontSize: '13px',
						fontWeight: 400,
					},
					formatter: (value: number) => {
						return `${(value / 1000)}K 건`;
					},
				},
				opposite: true,
				axisTicks: {
					show: true
				},
				axisBorder: {
					show: true,
				},
			},
		],
		legend: {
			fontSize: '13px',
			fontWeight: 400,
			fontFamily: 'Inter, sans-serif',
			position: 'right',
			labels: {
				colors: [mainChartColors.labelColor],
			},
			itemMargin: {
				horizontal: 0,
			},
		},
	};
};
/*최근 7일 매출액*/

/*단말기 상태정보 수신 현황*/
//단말기 상태정보 수신 현황
const getStatusAliveByTerminal = () => {
	return {
		series: [100, 45],
		colors: ['#1A56DB', '#FDBA8C'],
		chart: {
			height: 300,
			width: "100%",
			type: "donut",
		},
		stroke: {
			colors: ["transparent"],
			lineCap: "",
		},
		plotOptions: {
			pie: {
				donut: {
					labels: {
						show: true,
						name: {
							show: true,
							fontFamily: "Inter, sans-serif",
							offsetY: 20,
						},
						total: {
							showAlways: true,
							show: true,
							fontFamily: "Inter, sans-serif",
							formatter: function (w: any) {
								const sum = w.globals.seriesTotals.reduce((a: any, b: any) => {
									return a + b
								}, 0)
								return ' ' + sum + '대'
							},
						},
						value: {
							show: true,
							fontFamily: "Inter, sans-serif",
							offsetY: -20,
							formatter: function (value: string) {
								return value + ""
							},
						},
					},
					size: "80%",
				},
			},
		},
		grid: {
			padding: {
				top: -2,
			},
		},
		labels: ["수신", "미수신"],
		dataLabels: {
			enabled: false,
			// offsetX: 10,
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif',
			},
		},
		legend: {
			position: "bottom",
			fontFamily: "Inter, sans-serif",
		},
		yaxis: {
			labels: {
				formatter: function (value: string) {
					return value + ""
				},
			},
		},
		xaxis: {
			labels: {
				formatter: function (value: string) {
					return value + ""
				},
			},
			axisTicks: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 0.9,
				},
			},
		},
		tooltip: {
			shared: true,
			followCursor: false,
			fillSeriesColor: false,
			inverseOrder: true,
			style: {
				fontSize: '13px',
				fontFamily: 'Inter, sans-serif',
			},
			x: {
				show: true,
				formatter(_: string, {seriesIndex, w}: any) {
					const label = w.config.labels[seriesIndex];
					return label;
				},
			},
			y: {
				formatter(value: number) {
					return `${value} 대`;
				},
			},
		},
	}
}
if (document.getElementById('status-by-terminal')) {
	const chart = new ApexCharts(
		document.getElementById('status-by-terminal'),
		getStatusAliveByTerminal(),
	);
	chart.render();

	// init again when toggling dark mode
	document.addEventListener('dark-mode', () => {
		chart.updateOptions(getStatusAliveByTerminal());
	});
}


const getMonthlySalesChart = {
	series: [
		{
			name: "Income",
			color: "#31C48D",
			data: ["1420", "1620", "1820", "1420", "1650", "2120"],
		},
		{
			name: "Expense",
			data: ["788", "810", "866", "788", "1100", "1200"],
			color: "#F05252",
		}
	],
	chart: {
		sparkline: {
			enabled: false,
		},
		type: "bar",
		width: "100%",
		height: 400,
		toolbar: {
			show: false,
		}
	},
	fill: {
		opacity: 1,
	},
	plotOptions: {
		bar: {
			horizontal: true,
			columnWidth: "100%",
			borderRadiusApplication: "end",
			borderRadius: 6,
			dataLabels: {
				position: "top",
			},
		},
	},
	legend: {
		show: true,
		position: "bottom",
	},
	dataLabels: {
		enabled: false,
	},
	tooltip: {
		shared: true,
		intersect: false,
		formatter: function (value) {
			return "$" + value
		}
	},
	xaxis: {
		labels: {
			show: true,
			style: {
				fontFamily: "Inter, sans-serif",
				cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
			},
			formatter: function (value) {
				return "$" + value
			}
		},
		categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		axisTicks: {
			show: false,
		},
		axisBorder: {
			show: false,
		},
	},
	yaxis: {
		labels: {
			show: true,
			style: {
				fontFamily: "Inter, sans-serif",
				cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
			}
		}
	},
	grid: {
		show: true,
		strokeDashArray: 4,
		padding: {
			left: 2,
			right: 2,
			top: -20
		},
	},
	fill: {
		opacity: 1,
	}
}
if (document.getElementById("bar-chart") && typeof ApexCharts !== 'undefined') {
	const chart = new ApexCharts(document.getElementById("bar-chart"), getMonthlySalesChart);
	chart.render();
}
