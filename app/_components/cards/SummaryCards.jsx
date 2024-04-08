import Image from "next/image";
import Summarycard from "./Summarycard";
import { inter } from "@/app/style/font";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import styled from "styled-components";

export const SummaryCards = () => {
  return (
    <SummaryCardContainer>
      <Summarycard bgColor={"#5570f1"}>
        <div>
          <Image
            src={"/img/summaryIcon.svg"}
            alt="vector icon"
            width={36}
            height={36}
          />
        </div>

        <div className="card-content">
          <div className="card-info">
            <h4 className={`${inter.className} card-num-1`}>All Products</h4>
            <h2 className="card-num-1">45</h2>
          </div>
          <div className="card-info">
            <h4 className={`${inter.className} card-num-1`}>Active</h4>
            <h2 className="card-num-1">
              32 <span className={inter.className}>+24%</span>
            </h2>
          </div>
        </div>
      </Summarycard>

      <Summarycard bgColor={"#ffff"}>
        <div className="card-header">
          <Image
            src={"/img/summaryTrash.svg"}
            alt="vector icon"
            width={36}
            height={36}
          />

          <Select>
            <SelectTrigger>
              <SelectValue defaultValue={"This Week"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="this week">This Week</SelectItem>
              <SelectItem value="last month">Last Month</SelectItem>
              <SelectItem value="last year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="card-content">
          <div className="card-info">
            <h4 className={`${inter.className}`} style={{ color: "#CC5F5F" }}>
              Abandoned Cart
            </h4>
            <h2 className="card-num-2">
              45
              <span className={`${inter.className} ml-2 text-[#519C66]`}>
                +0.00%
              </span>
            </h2>
          </div>
          <div className="card-info">
            <h4 className={"text-[var(--gray-200)]"}>Customers</h4>
            <h2>30</h2>
          </div>
        </div>
      </Summarycard>
    </SummaryCardContainer>
  );
};

const SummaryCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  row-gap: 1rem;
`;
