import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import styled from "styled-components";

const DoghnutChart = () => {
  return (
    <DoghnutChartBox>
      <div className="chart-header">
        <h1>Marketing</h1>
        <Select>
          <SelectTrigger>
            <SelectValue defaultValue={"This Week"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="This Week">This Week</SelectItem>
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

      <Chart />
    </DoghnutChartBox>
  );
};

const Chart = () => {
  return <div className="chart-wrapper"></div>;
};

const DoghnutChartBox = styled.div`
  padding: 21px 20px;
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
    margin-top: 1rem;
  }
`;
export default DoghnutChart;
