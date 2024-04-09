"use client";

import {
  BarChart as BarChartRechart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { barchatData } from "./data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import styled from "styled-components";
import { useState } from "react";
import { mediaQueries } from "@/app/style/mediaQueries";

const BarChart = () => {
  const [value, setValue] = useState("Last 7 Days");

  return (
    <BarChartWrapper>
      <div className="chart-header">
        <div className="header-left">
          <h1>Summary</h1>
          <Select>
            <SelectTrigger className="rounded-md bg-[#5570F114]  text-[13px] sm:w-auto w-[50px]  text-[#5570F1]">
              <SelectValue placeholder="Sales" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Sales">Sales</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Select value={value} onValueChange={(e) => setValue(e)}>
          <SelectTrigger>
            <SelectValue value={value} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Last 7 Days">Last 7 Days</SelectItem>
            <SelectItem value="Last Month">Last Month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Chart value={value} />
    </BarChartWrapper>
  );
};

const Chart = ({ value }) => {
  const formatYAxis = (tickItem) => `${tickItem}K`;

  return (
    <div
      style={{
        width: "100%",
        height: "250px",
        position: "relative",
        marginTop: "2.4rem",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChartRechart
          width={"100%"}
          height={300}
          data={barchatData[value]}
          margin={{
            top: 5,
            right: 30,
            left: -15,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            fontSize={11}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#BEC0CA" }}
            padding={{ left: 10, right: 10, top: 30 }}
          />
          <YAxis
            tickFormatter={formatYAxis}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#BEC0CA" }}
            fontSize={11}
          />
          <Tooltip />
          <CartesianGrid stroke="none" />
          <Bar
            dataKey="pv"
            fill="#5570F1"
            background={{ fill: "#eee", radius: [10, 10, 0, 0] }}
            radius={[10, 10, 0, 0]}
            barSize={13}
          />
        </BarChartRechart>
      </ResponsiveContainer>
    </div>
  );
};

const BarChartWrapper = styled.div`
  padding: 13px 10px;
  overflow-x: hidden;

  @media ${mediaQueries.sm} {
    padding: 13px 18px;
  }

  .chart-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
export default BarChart;
