// import React, { useEffect, useState } from "react";

// export default function ProjectSlider1() {
//   const [CanvasJSReact, setCanvasJSReact] = useState(null);

//   useEffect(() => {
//     import("@canvasjs/react-charts").then((module) => {
//       setCanvasJSReact(module.default);
//     });
//   }, []);

//   if (!CanvasJSReact) return null;

//   const CanvasJSChart = CanvasJSReact.CanvasJSChart;

//   const options = {
//     exportEnabled: true,
//     animationEnabled: true,
//     backgroundColor: "",
//     zoomEnabled: true,
//     exportEnabled: false,
//     title: {
//       text: "Total Token Supply 1 billion ",
//     },

//     legend: {
//       cursor: "pointer",
//       itemclick: explodePie,
//       fontColor: "white",
//     },
//     data: [
//       {
//         type: "pie",
//         startAngle: 75,
//         toolTipContent: `
//           {label}: {y}%
//           `,
//         indexLabelFontColor: "white",
//         showInLegend: true,
//         legendText: "{label}",
//         indexLabelFontSize: 16,
//         indexLabelColor: "blue",
//         indexLabel: "{label} - {y}%",

//         dataPoints: [
//           { y: 20, label: "Early Investor Presale", color: "blue" },
//           { y: 25, label: "2nd Presale", color: "pink" },
//           { y: 10, label: "Ecosystem", color: "orange" },
//           { y: 10, label: "Marketing", color: "purple" },
//           { y: 10, label: "Developer", color: "green" },
//           { y: 7, label: "Foundation", color: "salmon" },
//           { y: 10, label: "Cex Listing", color: "beige " },
//           { y: 8, label: "Stack & Earn", color: "yellow" },
//         ],
//       },
//     ],
//   };

//   function explodePie(e) {
//     e.dataSeries.dataPoints[e.dataPointIndex].exploded =
//       !e.dataSeries.dataPoints[e.dataPointIndex].exploded;
//     e.chart.render();
//   }
//   return (
//     <>
//       <CanvasJSChart options={options} />
//     </>
//   );
// }

// import React, { useState } from "react";
// import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from "recharts";

// const data = [
//   { y: 20, label: "Early Investor Presale", color: "blue" },
//   { y: 25, label: "2nd Presale", color: "pink" },
//   { y: 10, label: "Ecosystem", color: "orange" },
//   { y: 10, label: "Marketing", color: "purple" },
//   { y: 10, label: "Developer", color: "green" },
//   { y: 7, label: "Foundation", color: "salmon" },
//   { y: 10, label: "Cex Listing", color: "beige" },
//   { y: 8, label: "Stack & Earn", color: "yellow" },
// ];

// const renderActiveShape = (props) => {
//   const RADIAN = Math.PI / 180;
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     percent,
//   } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? "start" : "end";

//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//         {payload.label}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path
//         d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//         stroke={fill}
//         fill="none"
//       />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <g>
//         <text
//           x={ex + (cos >= 0 ? 1 : -1) * 12}
//           y={ey}
//           textAnchor={textAnchor}
//           fill={payload.color}
//           fontSize={14}
//           fontWeight="bold"
//           dominantBaseline="middle"
//         >
//           {payload.label}
//         </text>
//       </g>
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         dy={18}
//         textAnchor={textAnchor}
//         fill="#999"
//       >
//         {`${(percent * 100).toFixed(2)}%`}
//       </text>
//     </g>
//   );
// };

// export default function LargeHoverPieChart() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const onPieEnter = (_, index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       <div style={{ width: "100%", height: "80%" }}>
//         <ResponsiveContainer width="100%" height="100%">
//           <PieChart>
//             <Pie
//               activeIndex={activeIndex}
//               activeShape={renderActiveShape}
//               data={data}
//               cx="50%"
//               cy="50%"
//               innerRadius={100}
//               outerRadius={200}
//               dataKey="y"
//               onMouseEnter={onPieEnter}
//             >
//               {data.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={entry.color} />
//               ))}
//             </Pie>
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "20px",
//           justifyContent: "center",
//           padding: "20px",
//         }}
//       >
//         {data.map((entry, index) => (
//           <div
//             key={`legend-${index}`}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "10px",
//               padding: "5px 15px",
//               borderRadius: "15px",
//               border: "1px solid rgba(255, 255, 255, 0.1)",
//               background:
//                 "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 73.86%)",
//             }}
//           >
//             <div
//               style={{
//                 background: entry.color,
//                 width: "20px",
//                 height: "20px",
//                 borderRadius: "50%",
//               }}
//             />
//             <p style={{ margin: 0, fontSize: "16px" }}>{entry.label}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import * as React from "react";
// import { useEffect } from "react";
// import {
//   CircularChart3D,
//   PieSeries3D,
//   CircularChartDataLabel3D,
//   CircularChartLegend3D,
//   CircularChartTooltip3D,
//   CircularChartHighlight3D,
//   CircularChart3DLoadedEventArgs,
//   CircularChart3DTheme,
//   CircularChart3DComponent,
//   CircularChart3DSeriesCollectionDirective,
//   CircularChart3DSeriesDirective,
//   Inject,
// } from "@syncfusion/ej2-react-charts";
// import { Browser } from "@syncfusion/ej2-base";
// export let data1 = [
//   { x: "Canada", y: 46, text: "Canada: 46" },
//   { x: "Hungary", y: 30, text: "Hungary: 30" },
//   { x: "Germany", y: 79, text: "Germany: 79" },
//   { x: "Mexico", y: 13, text: "Mexico: 13" },
//   { x: "China", y: 56, text: "Greece: 26" },
//   { x: "India", y: 41, text: "India: 41" },
//   { x: "Bangladesh", y: 25, text: "Bangladesh: 25" },
//   { x: "United States", y: 32, text: "United States: 32" },
//   { x: "Belgium", y: 34, text: "Belgium: 34" },
// ];
// const SAMPLE_CSS = `
//     .control-fluid {
//         padding: 0px !important;
//     }`;
// /**
//  * Circular 3D Chart.
//  */
// const ProjectSlider1 = () => {
//   const onChartLoad = (args) => {
//     let chart = document.getElementById("charts");
//     chart.setAttribute("title", "");
//   };
//   const load = (args) => {
//     let selectedTheme = location.hash.split("/")[1];
//     selectedTheme = selectedTheme ? selectedTheme : "Material";
//     args.chart.theme = (
//       selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
//     )
//       .replace(/-dark/i, "Dark")
//       .replace(/contrast/i, "Contrast")
//       .replace(/-highContrast/i, "HighContrast");
//   };
//   return (
//     <div className="control-pane">
//       <style>{SAMPLE_CSS}</style>
//       <div className="control-section">
//         <div>
//           <CircularChart3DComponent
//             id="charts"
//             style={{ textAlign: "center" }}
//             legendSettings={{ visible: false }}
//             tilt={-45}
//             enableRotation={true}
//             load={load.bind(this)}
//             title="Berlin 2023 Special Olympics Gold Medals"
//             loaded={onChartLoad.bind(this)}
//             tooltip={{
//               enable: true,
//               format: "<b>${point.x}</b><br> Gold Medals: <b>${point.y}</b>",
//               header: "",
//             }}
//           >
//             <Inject
//               services={[
//                 PieSeries3D,
//                 CircularChartDataLabel3D,
//                 CircularChartLegend3D,
//                 CircularChartTooltip3D,
//                 CircularChartHighlight3D,
//               ]}
//             />
//             <CircularChart3DSeriesCollectionDirective>
//               <CircularChart3DSeriesDirective
//                 dataSource={data1}
//                 xName="x"
//                 yName="y"
//                 explode={true}
//                 innerRadius="0%"
//                 radius={Browser.isDevice ? "45%" : "75%"}
//                 explodeOffset={Browser.isDevice ? "10%" : "30%"}
//                 dataLabel={{
//                   visible: true,
//                   position: "Outside",
//                   name: "x",
//                   font: { fontWeight: "600" },
//                   connectorStyle: {
//                     length: Browser.isDevice ? "20px" : "40px",
//                   },
//                 }}
//               ></CircularChart3DSeriesDirective>
//             </CircularChart3DSeriesCollectionDirective>
//           </CircularChart3DComponent>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ProjectSlider1;
import React, { useEffect, useState } from "react";
import Highcharts, { color } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Highcharts3d from "highcharts/highcharts-3d";
import Accordion from "@/components/elements/Accordion";
import Layout from "@/components/layout/Layout";
import AOS from "aos";
import Link from "next/link";

if (typeof Highcharts == "object") {
  Highcharts3d(Highcharts);
}
function ProjectSlider1() {
  const [chartOptions, setChartOptions] = useState(null);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 10,
      easing: "ease-in",
      delay: 0,
      once: false,
      mirror: true,
    });
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, []);
  useEffect(() => {
    setChartOptions({
      chart: {
        type: "pie",
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0,
        },
      },
      title: {
        text: "",
        align: "center",
        backgroundColor: "transparent",
      },
      tooltip: {
        style: {
          display: "none",
        },
      },
      plotOptions: {
        pie: {
          size: isMobile ? 120 : "120%",
          innerSize: isMobile ? 60 : 180,
          depth: isMobile ? 30 : 80,
          allowPointSelect: true,
          cursor: "pointer",
          slicedOffset: isMobile ? 15 : 30,

          point: {
            fontSize: isMobile ? "7px" : "10px",
            events: {
              mouseOver: function () {
                this.slice(20);
                this.graphic.zIndex = 1000;
                this.graphic.css({
                  filter: "drop-shadow(0 0 0.75rem #2166b0)",
                  transition: "filter 0.3s ease",
                });
                this.dataLabel.css({
                  transform: "scale(1.2)",
                  transition: "transform 0.3s ease",
                  color: "#ffffff",
                  color: "rgb(33, 102, 176)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "10px",
                  padding: "3px 10px",

                  background:
                    "linear-gradient(89.96deg, rgba(255, 255, 255, 0.05) 0.03%, rgba(255, 255, 255, 0.008) 49.67%, rgba(255, 255, 255, 0.05) 99.96%)",
                  fontSize: isMobile ? "9px" : "12px",
                });
              },
              mouseOut: function () {
                this.slice(0);
                this.graphic.zIndex = null;
                this.graphic.css({
                  filter: "none",
                  transition: "drop-shadow(0 0 0.75rem #2166b0)",
                });
                this.dataLabel.css({
                  transform: "scale(1)",
                  transition: "transform 0.3s ease",
                  color: "#000000",
                  fontSize: isMobile ? "7px" : "10px",
                });
              },
              select: function () {
                this.slice(20);
                this.graphic.zIndex = 1000;
                this.dataLabel.css({
                  transform: "scale(1.2)",
                  transition: "transform 0.3s ease",
                  color: "#ffffff",
                  fontSize: isMobile ? "9px" : "12px",
                });
              },
              unselect: function () {
                this.slice(0);
                this.graphic.zIndex = null;
                this.dataLabel.css({
                  transform: "scale(1)",
                  transition: "transform 0.3s ease",
                  color: "#000000", // Optional: reset color
                  fontSize: isMobile ? "7px" : "14px", // Reset font size
                });
              },
            },
          },
          dataLabels: {
            enabled: true,
            useHTML: true,
            style: {
              fontSize: isMobile ? "7px" : "10px",
              transition: "font-size 0.3s ease",
            },
            formatter: function () {
              return (
                '<span class="customLabel" >' +
                this.point.name +
                " " +
                Math.floor(this.point.percentage) +
                "%" +
                "</span>"
              );
            },
          },
          colors: [
            {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
              stops: [
                [0, "#19C1F2"],
                [1, "#2C5364"],
              ],
            },
            {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
              stops: [
                [0, "#2166B0"],
                [1, "#0052D4"],
              ],
            },
            {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
              stops: [
                [0, "#9CECFB"],
                [1, "#0052D4"],
              ],
            },
            {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
              stops: [
                [0, "#24C6DC"],
                [1, "#514A9D"],
              ],
            },
            {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
              stops: [
                [0, "#000046"],
                [1, "#1CB5E0"],
              ],
            },
            {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
              stops: [
                [0, "#373B44"],
                [1, "#4286f4"],
              ],
            },
            {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
              stops: [
                [0, "#4b6cb7"],
                [1, "#182848"],
              ],
            },
            {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
              stops: [
                [0, "#141E30"],
                [1, "#243B55"],
              ],
            },
          ],
        },
      },
      series: [
        {
          name: "Sales",
          data: [
            ["Early Investor Presale", 20],
            ["2nd Presale", 25],
            ["Ecosystem", 10],
            ["Marketing & Influencer", 10],
            ["Developer Team", 10],
            ["Foundation", 7],
            ["Cex Listing", 10],
            ["Stake & Earn", 8],
          ],
        },
      ],
    });
  }, [isMobile]);

  return (
    <div data-aos="fade-up">
      {chartOptions && (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
    </div>
  );
}

export default ProjectSlider1;
