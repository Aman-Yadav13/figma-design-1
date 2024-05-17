//Not in use

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface DataItem {
  name: string;
  value: number;
}

export const DChart: React.FC = () => {
  const width = 400;
  const height = 400;
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const dataset: DataItem[] = [
      { name: "Industry 1", value: 21 },
      { name: "Industry 5", value: 22 },
      { name: "Industry 4", value: 23 },
      { name: "Industry 2", value: 20 },
      { name: "Industry 3", value: 24 },
    ];

    const mappingDataset = {
      "Industry 1": "Up",
      "Industry 2": "Up",
      "Industry 3": "Down",
      "Industry 4": "Up",
      "Industry 5": "Up",
    };

    const color = d3
      .scaleOrdinal<string>()
      .domain(dataset.map((d) => d.name))
      .range(["#f1fc72", "#f1fc72", "#f1fc72", "#70db67", "#70db67"]);
    const colorOuter = d3
      .scaleOrdinal<string>()
      .domain(dataset.map((d) => d.name))
      .range(["#a3b104", "#a3b104", "#a3b104", "#30a627", "#30a627"]);

    const pie = d3.pie<DataItem>().value((d) => d.value ?? 0);

    const data = pie(dataset);
    const arc = d3
      .arc<d3.PieArcDatum<DataItem>>()
      .innerRadius(60)
      .outerRadius(100)
      .cornerRadius(0)
      .padAngle(0.03);
    const borderArc = d3
      .arc<d3.PieArcDatum<DataItem>>()
      .innerRadius(50)
      .outerRadius(60)
      .cornerRadius(0)
      .padAngle(0.03);
    const borderArc2 = d3
      .arc<d3.PieArcDatum<DataItem>>()
      .innerRadius(40)
      .outerRadius(50)
      .cornerRadius(0)
      .padAngle(0.03);

    const svg = d3.select(svgRef.current);

    if (!svg.empty()) {
      const mainG = svg
        .append("g")
        .attr("transform", `translate(${width / 2 + 10},${height / 2})`);

      mainG
        .selectAll(".border-path-inner")
        .data(data)
        .enter()
        .append("path")
        .attr("class", "border-path")
        .attr("d", borderArc2)
        .attr("fill", "#b9bbc0");

      mainG
        .selectAll(".border-path-outer")
        .data(data)
        .enter()
        .append("path")
        .attr("class", "border-path")
        .attr("d", borderArc)
        .attr("fill", (d) => colorOuter(d.data.name));

      mainG
        .selectAll(".arc")
        .data(data)
        .enter()
        .append("path")
        .attr("class", "arc")
        .attr("d", arc)
        .attr("fill", (d) => color(d.data.name))
        .style("filter", "url(#inner-shadow)");

      mainG
        .selectAll(".arc-label")
        .data(data)
        .enter()
        .append("text")
        .attr("class", "arc-label")
        .attr("transform", (d) => `translate(${arc.centroid(d)})`)
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .text((d) => d.data.value);

      mainG
        .selectAll(".name-label")
        .data(data)
        .enter()
        .append("text")
        .attr("class", "name-label")
        .attr("transform", (d) => {
          if (d.data.name === "Industry 5") {
            return `translate(${-40},${150})`;
          } else if (d.data.name === "Industry 2") {
            return `translate(${-150},${-170})`;
          } else if (d.data.name === "Industry 3") {
            return `translate(${150},${-160})`;
          } else if (d.data.name === "Industry 4") {
            return `translate(${210},${40})`;
          } else {
            return `translate(${-210},${20})`;
          }
        })
        .attr("text-anchor", (d) =>
          Math.cos(
            Math.PI + Math.atan2(arc.centroid(d)[1], arc.centroid(d)[0])
          ) > 0
            ? "start"
            : "end"
        )
        .html((d) => {
          return `
        <tspan x="0" dy="1.2em" class="text-xs">${d.data.name}</tspan>
        <tspan x="0" dy="1.2em" class="text-xs">${d.data.value}%</tspan>
        <tspan x="0" dy="1.2em" class="text-xs">
            ${mappingDataset[d.data.name] === "Up" ? "▲$######" : "▼$######"}
        </tspan>`;
        });

      mainG
        .append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "1.5em")
        .text("▲ 12%")
        .style("fill", "black")
        .style("font-size", "14px");

      mainG
        .append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .text("$#####")
        .style("fill", "black")
        .style("font-size", "20px");
    }
  }, []);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};
