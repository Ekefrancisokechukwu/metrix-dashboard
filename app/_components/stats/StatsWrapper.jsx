"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import StatsCard from "./StatsCard";
import { salesData } from "./data";
import { useState } from "react";

const StatsWrapper = () => {
  const [salesValue, setSalesValue] = useState("This Week");
  return (
    <>
      {/* sales stats card */}
      <StatsCard title={"Sales"}>
        <div className="card-header">
          <Image
            src={"/img/iconSales.svg"}
            alt="icon vector"
            width={36}
            height={36}
          />

          <Select value={salesValue} onValueChange={(e) => setSalesValue(e)}>
            <SelectTrigger>
              <SelectValue placeholder={"This Week"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="This Week">This Week</SelectItem>
              <SelectItem value="Last Month">Last Month</SelectItem>
              <SelectItem value="Last Year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="card-content">
          <div className="">
            <h5 className="card-desc">Sales</h5>
            <h2 className="card-number">{salesData[salesValue].sales}</h2>
          </div>
          <div className="">
            <h5 className="card-desc">Volume</h5>
            <h2 className="card-number">
              {salesData[salesValue].volume}{" "}
              <span className="card-rate">+20.00%</span>
            </h2>
          </div>
        </div>
      </StatsCard>

      {/* Customer stats card */}
      <StatsCard>
        <div className="card-header">
          <Image
            src={"/img/iconCus.svg"}
            alt="icon vector"
            width={36}
            height={36}
          />

          <Select>
            <SelectTrigger className="w-[100px] hover:bg-gray-50 ">
              <SelectValue placeholder={"This Week"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="this week">This Week</SelectItem>
              <SelectItem value="last month">last Month</SelectItem>
              <SelectItem value="last year">last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="card-content">
          <div className="">
            <h5 className="card-desc">Customers</h5>
            <h2 className="card-number">
              1,250 <span className="card-rate">+15.80%</span>
            </h2>
          </div>
          <div className="">
            <h5 className="card-desc">Active</h5>
            <h2 className="card-number">
              1,180 <span className="card-rate">85%</span>
            </h2>
          </div>
        </div>
      </StatsCard>

      {/* orders stats card */}
      <StatsCard>
        <div className="card-header">
          <Image
            src={"/img/iconOrder.svg"}
            alt="icon vector"
            width={36}
            height={36}
          />

          <Select>
            <SelectTrigger className="w-[100px] hover:bg-gray-50 ">
              <SelectValue placeholder={"This Week"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="this week">This Week</SelectItem>
              <SelectItem value="last month">last Month</SelectItem>
              <SelectItem value="last year">last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="card-content">
          <div className="">
            <h5 className="card-desc line-clamp-1">All Orders</h5>
            <h2 className="card-number">450</h2>
          </div>
          <div className="">
            <h5 className="card-desc">Pending</h5>
            <h2 className="card-number">5</h2>
          </div>
          <div className="">
            <h5 className="card-desc">Completed</h5>
            <h2 className="card-number line-clamp-1">
              445 <span className="card-rate">+20.00%</span>
            </h2>
          </div>
        </div>
      </StatsCard>
    </>
  );
};
export default StatsWrapper;
