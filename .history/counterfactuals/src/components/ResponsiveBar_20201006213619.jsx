import React from "react";

import {ResponsiveBar} from "@nivo/bar";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const ResponsiveBarGraph = ({data, features, featuresKeys}) => {
  const allKeys = featuresKeys["featuresNames"].concat([
    featuresKeys["targetname"],
  ]);

  const updatedData = data.map((obj, index) => {
    obj["nr"] = `${index + 1}`;
    return obj;
  });

  return (
    <ResponsiveBar
      data={updatedData}
      keys={allKeys}
      indexBy={"nr"}
      margin={{top: 50, right: 130, bottom: 50, left: 60}}
      padding={0.55}
      layout="horizontal"
      colors={{scheme: "nivo"}}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
        {
          id: "target",
          type: "patternLines",
          background: "white",
          color: "rgba(73, 112, 219, 0.867)",
          label: "left",
          rotation: 45,
          lineWidth: 0.1,
          spacing: 1000,
          size: 76,
        },
        {
          id: "targetDot",
          type: "patternDots",
          background: "white",
          color: "rgba(73, 112, 219, 0.767)",
          size: 4,
          padding: 25,
          stagger: true,
        },
      ]}
      fill={[
        {
          match: {
            id: `${featuresKeys["targetname"]}`,
          },
          id: "target",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderWidth={0.5}
      borderColor={{from: "color", modifiers: [["darker", 1.6]]}}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "% change",
        legendPosition: "middle",
        legendOffset: 35,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Permutations",
        legendPosition: "middle",
        legendOffset: -55,
      }}
      labelSkipWidth={5}
      labelSkipHeight={2}
      labelTextColor={{from: "color", modifiers: [["darker", 1.6]]}}
      legends={[
        {
          dataFrom: "keys",
          anchor: "right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 25,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 25,
          borderWidth: 0.5,
          borderColor: "#38bcb2",
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      animate={false}
      motionStiffness={90}
      motionDamping={15}
    />
  );
};

export default ResponsiveBarGraph;
