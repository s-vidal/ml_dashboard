import React from "react";

import {ResponsiveBar} from "@nivo/bar";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const ResponsiveBarGraph = ({data, features, featuresKeys}) => {
  const updatedData = data.map((obj, index) => {
    obj["nr"] = String.fromCharCode(index + 1 + 64);
    return obj;
  });
  return (
    <ResponsiveBar
      data={updatedData}
      keys={featuresKeys["featuresNames"]}
      indexBy="nr"
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
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
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
        legendOffset: -40,
      }}
      labelSkipWidth={5}
      labelSkipHeight={2}
      labelTextColor={{from: "color", modifiers: [["darker", 1.6]]}}
      legends={[
        {
          dataFrom: "keys",
          anchor: "center",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
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
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
};

export default ResponsiveBarGraph;