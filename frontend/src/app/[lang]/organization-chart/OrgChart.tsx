"use client";

import React, { useLayoutEffect, useRef, useEffect } from "react";
import { OrgChart } from "d3-org-chart";
import CustomNodeContent from "./components/customNodeContent";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";

export const OrgChartComponent = (props: any, ref: any) => {
  const d3Container = useRef(null);
  let chart: any = null;

  function addNode(node: any) {
    chart.addNode(node);
  }

  // props.setClick(addNode);

  useLayoutEffect(() => {
    if (props.data && d3Container.current) {
      if (!chart) {
        chart = new OrgChart();
      }
      chart
        .container(d3Container.current)
        .data(props.data)
        .nodeWidth((d) => 300)
        .nodeHeight((d) => 140)
        .compactMarginBetween((d) => 80)
        .onNodeClick((d, i, arr) => {
          props.onNodeClick(d);
        })
        .nodeContent((d) => {
          const div = document.createElement("div");
          const root = createRoot(div);
          flushSync(() => {
            root.render(<CustomNodeContent {...d}></CustomNodeContent>);
          });
          return div.innerHTML;
        })
        .render();
    }
  }, [props.data, d3Container.current]);

  return (
    <div>
      <div style={{ height: "calc(100vh - 60px)" }} ref={d3Container}></div>
    </div>
  );
};
