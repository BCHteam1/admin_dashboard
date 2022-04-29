import { ResponsiveLine } from "@nivo/line";

const MyResponsiveLine = ({ data }) => {
	return (
		<ResponsiveLine
			data={data}
			theme={{
				fontSize: "1rem",
				axis: {
					ticks: {
						text: {
							fill: "#FFF",
						},
					},
					legend: {
						text: {
							fontSize: "1rem",
							fill: "#FFF",
						},
					},
				},
			}}
			margin={{ top: 50, right: 110, bottom: 150, left: 90 }}
			xScale={{ type: "point" }}
			yScale={{
				type: "linear",
				min: "auto",
				max: "auto",
				stacked: true,
				reverse: false,
			}}
			yFormat=" >-.2f"
			axisTop={null}
			axisRight={null}
			axisBottom={{
				orient: "bottom",
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 40,
				legend: "Date",
				legendOffset: 110,
				legendPosition: "middle",
			}}
			axisLeft={{
				orient: "left",
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: "Score",
				legendOffset: -60,
				legendPosition: "middle",
			}}
			enableGridX={false}
			colors={{ datum: "color" }}
			pointSize={5}
			pointColor={{ from: "color" }}
			pointBorderWidth={5}
			pointBorderColor={{ from: "serieColor" }}
			pointLabelYOffset={-12}
			useMesh={true}
			legends={[
				{
					anchor: "bottom-right",
					direction: "column",
					justify: false,
					translateX: 100,
					translateY: 0,
					itemsSpacing: 0,
					itemDirection: "left-to-right",
					itemWidth: 80,
					itemHeight: 20,
					itemOpacity: 1,
					symbolSize: 15,
					symbolShape: "circle",
					symbolBorderColor: "rgba(0, 0, 0, 0)",
					itemTextColor: "#FFF",
				},
			]}
		/>
	);
};

export default MyResponsiveLine;