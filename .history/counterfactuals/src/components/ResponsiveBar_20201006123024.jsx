import React from "react";

import {ResponsiveBar} from "@nivo/bar";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveBar = ({data}) => {
  const data = [
    {
      country: "AD",
      "hot dog": 143,
      "hot dogColor": "hsl(119, 70%, 50%)",
      burger: 178,
      burgerColor: "hsl(204, 70%, 50%)",
      sandwich: 6,
      sandwichColor: "hsl(126, 70%, 50%)",
      kebab: 173,
      kebabColor: "hsl(211, 70%, 50%)",
      fries: 83,
      friesColor: "hsl(131, 70%, 50%)",
      donut: 96,
      donutColor: "hsl(64, 70%, 50%)",
    },
    {
      country: "AE",
      "hot dog": 50,
      "hot dogColor": "hsl(236, 70%, 50%)",
      burger: 101,
      burgerColor: "hsl(193, 70%, 50%)",
      sandwich: 82,
      sandwichColor: "hsl(246, 70%, 50%)",
      kebab: 24,
      kebabColor: "hsl(274, 70%, 50%)",
      fries: 10,
      friesColor: "hsl(192, 70%, 50%)",
      donut: 137,
      donutColor: "hsl(12, 70%, 50%)",
    },
    {
      country: "AF",
      "hot dog": 79,
      "hot dogColor": "hsl(280, 70%, 50%)",
      burger: 25,
      burgerColor: "hsl(53, 70%, 50%)",
      sandwich: 139,
      sandwichColor: "hsl(210, 70%, 50%)",
      kebab: 159,
      kebabColor: "hsl(155, 70%, 50%)",
      fries: 18,
      friesColor: "hsl(31, 70%, 50%)",
      donut: 166,
      donutColor: "hsl(50, 70%, 50%)",
    },
    {
      country: "AG",
      "hot dog": 112,
      "hot dogColor": "hsl(21, 70%, 50%)",
      burger: 107,
      burgerColor: "hsl(223, 70%, 50%)",
      sandwich: 50,
      sandwichColor: "hsl(141, 70%, 50%)",
      kebab: 36,
      kebabColor: "hsl(239, 70%, 50%)",
      fries: 154,
      friesColor: "hsl(130, 70%, 50%)",
      donut: 6,
      donutColor: "hsl(147, 70%, 50%)",
    },
    {
      country: "AI",
      "hot dog": 91,
      "hot dogColor": "hsl(300, 70%, 50%)",
      burger: 146,
      burgerColor: "hsl(72, 70%, 50%)",
      sandwich: 20,
      sandwichColor: "hsl(268, 70%, 50%)",
      kebab: 4,
      kebabColor: "hsl(6, 70%, 50%)",
      fries: 179,
      friesColor: "hsl(145, 70%, 50%)",
      donut: 47,
      donutColor: "hsl(311, 70%, 50%)",
    },
    {
      country: "AL",
      "hot dog": 172,
      "hot dogColor": "hsl(182, 70%, 50%)",
      burger: 129,
      burgerColor: "hsl(105, 70%, 50%)",
      sandwich: 8,
      sandwichColor: "hsl(72, 70%, 50%)",
      kebab: 63,
      kebabColor: "hsl(6, 70%, 50%)",
      fries: 12,
      friesColor: "hsl(86, 70%, 50%)",
      donut: 97,
      donutColor: "hsl(11, 70%, 50%)",
    },
    {
      country: "AM",
      "hot dog": 25,
      "hot dogColor": "hsl(284, 70%, 50%)",
      burger: 0,
      burgerColor: "hsl(161, 70%, 50%)",
      sandwich: 85,
      sandwichColor: "hsl(93, 70%, 50%)",
      kebab: 35,
      kebabColor: "hsl(145, 70%, 50%)",
      fries: 33,
      friesColor: "hsl(131, 70%, 50%)",
      donut: 165,
      donutColor: "hsl(209, 70%, 50%)",
    },
  ];
  return()
  <ResponsiveBar
    data={data}
    keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
    indexBy="country"
    margin={{top: 50, right: 130, bottom: 50, left: 60}}
    padding={0.55}
    maxValue={1000}
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
      legend: "country",
      legendPosition: "middle",
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "food",
      legendPosition: "middle",
      legendOffset: -40,
    }}
    labelSkipWidth={5}
    labelSkipHeight={2}
    labelTextColor={{from: "color", modifiers: [["darker", 1.6]]}}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
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
  />;
};

export default MyResponsiveBar;
