"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import styled from "styled-components";
import {
  PieChart as PieChartRechart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { COLORS, pieChartData } from "./data";
import { useState } from "react";

const PieChart = () => {
  const [value, setValue] = useState("This Week");

  return (
    <PieChartBox>
      <div className="chart-header">
        <h1>Marketing</h1>
        <Select value={value} onValueChange={(e) => setValue(e)}>
          <SelectTrigger>
            <SelectValue value={value} placeholder="This Week" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="This Week">This Week</SelectItem>
            <SelectItem value="This Month">This Month</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="keys">
        <div className="key">
          <span />
          <p>Acquistion</p>
        </div>
        <div className="key">
          <span />
          <p>Purchase</p>
        </div>
        <div className="key">
          <span />
          <p>Retention</p>
        </div>
      </div>

      <Chart value={value} />
    </PieChartBox>
  );
};

const Chart = ({ value }) => {
  return (
    <div className="chart-wrapper">
      <ResponsiveContainer>
        <PieChartRechart width={800}>
          <Pie
            data={pieChartData[value]}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
            label
          >
            {" "}
            {pieChartData[value].map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChartRechart>
      </ResponsiveContainer>
    </div>
  );
};

const PieChartBox = styled.div`
  padding: 19px 20px;
  height: 100%;

  .chart-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: var(--primary-color);
      font-size: 1rem;
      font-weight: 500;
    }
  }

  .keys {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.5rem;
  }
  .key {
    display: flex;
    align-items: center;
    column-gap: 0.7rem;

    span {
      display: block;
      width: 8px;
      height: 8px;
      border-radius: var(--rounded-full);
      background-color: var(--blue-100);
    }

    &:nth-child(2) span {
      background-color: #97a5eb;
    }

    &:nth-child(3) span {
      background-color: #ffcc91;
    }

    p {
      color: var(--gray-200);
      font-size: 0.7rem;
    }
  }

  .chart-wrapper {
    background-image: url("/img/Ellipse.png");
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 250px;
    margin-top: 1rem;
    display: grid;
    place-items: center;
  }
`;
export default PieChart;
