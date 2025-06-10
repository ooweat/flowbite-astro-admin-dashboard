/* eslint-disable max-lines */

import ApexCharts from 'apexcharts';

const getMainChartOptions = () => {
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

	// @ts-ignore
	return {
		chart: {
			height: 400,
			type: 'area',
			fontFamily: 'Inter, sans-serif',
			foreColor: mainChartColors.labelColor,
			toolbar: {
				show: false,
			},
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
				data: [
					49000, 25000, 67000, 89000, 56000, 99000,
				  60000, 109000, 840000, 759000, 990000, 822000,
				  601000, 997000, 810000, 924000, 831000, 773000,
				  625000, 799000, 473000, 702000, 160000, 98000,
								],
				color: '#1A56DB',
			},
			{
				name: '어제',
				data: [
					60000, 83000, 14000,  9000, 56000, 73000,
		  64000, 184000, 655000, 733000, 911000, 850000,
		  991000, 787000, 600000, 799000, 698000, 876000,
		  780000, 621000, 408000, 850000, 230000, 71000,
				],
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
					fontSize: '14px',
					fontWeight: 500,
				},
				formatter(value: number) {
					return `${value}`;
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
					fontSize: '14px',
					fontWeight: 500,
				},
				formatter: (value: any) => {
					if (value >= 1000) {
						return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
					}
				},
			},
		},
		legend: {
			fontSize: '14px',
			fontWeight: 500,
			fontFamily: 'Inter, sans-serif',
			labels: {
				colors: [mainChartColors.labelColor],
			},
			itemMargin: {
				horizontal: 10,
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

if (document.getElementById('main-chart')) {
	const chart = new ApexCharts(
		document.getElementById('main-chart'),
		getMainChartOptions(),
	);
	chart.render();

	// init again when toggling dark mode
	document.addEventListener('dark-mode', () => {
		chart.updateOptions(getMainChartOptions());
	});
}

if (document.getElementById('new-products-chart')) {
	const options = {
		colors: ['#1A56DB', '#FDBA8C'],
		series: [
			{
				name: '건수',
				color: '#1A56DB',
				data: [
					{ x: '일', y: 170 },
					{ x: '월', y: 180 },
					{ x: '화', y: 164 },
					{ x: '수', y: 145 },
					{ x: '목', y: 194 },
					{ x: '금', y: 170 },
					{ x: '토', y: 155 },
				],
			},
		],
		chart: {
			type: 'bar',
			height: '140px',
			fontFamily: 'Inter, sans-serif',
			foreColor: '#4B5563',
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				columnWidth: '90%',
				borderRadius: 3,
			},
		},
		tooltip: {
			shared: false,
			intersect: false,
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif',
			},
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 1,
				},
			},
		},
		stroke: {
			show: true,
			width: 5,
			colors: ['transparent'],
		},
		grid: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		legend: {
			show: false,
		},
		xaxis: {
							categories: [
								'일',
								'월',
								'화',
								'수',
								'목',
								'금',
								'토',
							],
							labels: {
								style: {
									colors: '#4B5563',
									fontSize: '14px',
									fontWeight: 600,
								},
							},
						},
		yaxis: {
			show: false,
		},
		fill: {
			opacity: 1,
		},
	};

	const chart = new ApexCharts(
		document.getElementById('new-products-chart'),
		options,
	);
	chart.render();
}

if (document.getElementById('sales-by-category')) {
	const options = {
		colors: ['#1A56DB', '#FDBA8C'],
		series: [
			{
				name: 'Desktop PC',
				color: '#1A56DB',
				data: [
					{ x: '일', y: 170 },
					{ x: '월', y: 180 },
					{ x: '화', y: 164 },
					{ x: '수', y: 145 },
					{ x: '목', y: 194 },
					{ x: '금', y: 170 },
					{ x: '토', y: 155 },
				],
			},
			{
				name: 'Phones',
				color: '#FDBA8C',
				data: [
					{ x: '일', y: 120 },
					{ x: '월', y: 294 },
					{ x: '화', y: 167 },
					{ x: '수', y: 179 },
					{ x: '목', y: 245 },
					{ x: '금', y: 182 },
					{ x: '토', y: 143 },
				],
			},
			{
				name: 'Gaming/Console',
				color: '#17B0BD',
				data: [
					{ x: '일', y: 220 },
					{ x: '월', y: 194 },
					{ x: '화', y: 217 },
					{ x: '수', y: 279 },
					{ x: '목', y: 215 },
					{ x: '금', y: 263 },
					{ x: '토', y: 183 },
				],
			},
		],
		chart: {
			type: 'bar',
			height: '420px',
			fontFamily: 'Inter, sans-serif',
			foreColor: '#4B5563',
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				columnWidth: '90%',
				borderRadius: 3,
			},
		},
		tooltip: {
			shared: true,
			intersect: false,
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif',
			},
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 1,
				},
			},
		},
		stroke: {
			show: true,
			width: 5,
			colors: ['transparent'],
		},
		grid: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		legend: {
			show: false,
		},
		xaxis: {
			floating: false,
			labels: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
		},
		yaxis: {
			show: false,
		},
		fill: {
			opacity: 1,
		},
	};

	const chart = new ApexCharts(
		document.getElementById('sales-by-category'),
		options,
	);
	chart.render();
}

const getSignupsChartOptions = () => {
	let signupsChartColors = {
		backgroundBarColors: [
			'#E5E7EB',
			'#E5E7EB',
			'#E5E7EB',
			'#E5E7EB',
			'#E5E7EB',
			'#E5E7EB',
			'#E5E7EB',
		],
	};

	if (document.documentElement.classList.contains('dark')) {
		signupsChartColors = {
			backgroundBarColors: [
				'#374151',
				'#374151',
				'#374151',
				'#374151',
				'#374151',
				'#374151',
				'#374151',
			],
		};
	}

	return {
		series: [
			{
				name: '건수',
				data: [1334, 2435, 1753, 1328, 1155, 1632, 1336],
			},
		],
		labels: [
			'일',
			'월',
			'화',
			'수',
			'목',
			'금',
			'토',
		],
		chart: {
			type: 'bar',
			height: '140px',
			foreColor: '#4B5563',
			fontFamily: 'Inter, sans-serif',
			toolbar: {
				show: false,
			},
		},
		theme: {
			monochrome: {
				enabled: true,
				color: '#1A56DB',
			},
		},
		plotOptions: {
			bar: {
				columnWidth: '25%',
				borderRadius: 3,
				colors: {
					backgroundBarColors: signupsChartColors.backgroundBarColors,
					backgroundBarRadius: 3,
				},
			},
			dataLabels: {
				hideOverflowingLabels: false,
			},
		},
		xaxis: {
			floating: false,
			labels: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
		},
		tooltip: {
			shared: true,
			intersect: false,
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif',
			},
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 0.8,
				},
			},
		},
		fill: {
			opacity: 1,
		},
		yaxis: {
			show: false,
		},
		grid: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		legend: {
			show: false,
		},
	};
};

if (document.getElementById('week-signups-chart')) {
	const chart = new ApexCharts(
		document.getElementById('week-signups-chart'),
		getSignupsChartOptions(),
	);
	chart.render();

	// init again when toggling dark mode
	document.addEventListener('dark-mode', () => {
		chart.updateOptions(getSignupsChartOptions());
	});
}

const getStatusAliveByTerminal = () => {
	let trafficChannelsChartColors = {
				strokeColor: '#ffffff',
			};

	if (document.documentElement.classList.contains('dark')) {
		trafficChannelsChartColors = {
			strokeColor: '#1f2937',
		};
	}
	
	return {
		series: [100, 45],
		labels: ['정상', '비정상'],
		colors: ['#16BDCA', '#FDBA8C'],
		chart: {
			type: 'donut',
			height: 350,
			fontFamily: 'Inter, sans-serif',
			toolbar: {
				show: false,
			},
		},
		responsive: [
			{
				breakpoint: 300,
				options: {
					chart: {
						height: 200,
					},
				},
			},
		],
		stroke: {
			colors: [trafficChannelsChartColors.strokeColor],
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
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif',
			},
			x: {
				show: true,
				formatter(_: any, {seriesIndex, w}: any) {
					const label = w.config.labels[seriesIndex];
					return label;
				},
			},
			y: {
				formatter(value: string) {
					return `${value} 대`;
				},
			},
		},
		grid: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		legend: {
			show: false,
		},
	};
};

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
