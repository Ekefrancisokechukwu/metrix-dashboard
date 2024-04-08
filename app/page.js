"use client";

import styled from "styled-components";
import { mediaQueries } from "./style/mediaQueries";
import StatsWrapper from "./_components/stats/StatsWrapper";
import DoghnutChart from "./_components/charts/DoghnutChart";
import { SummaryCards } from "./_components/cards/SummaryCards";
import RecentOrder from "./_components/recentOrder/RecentOrder";

export default function Home() {
  return (
    <MainWrapper>
      <div className="stats-wrapper">
        <StatsWrapper />
      </div>

      <div className="market_summary-content">
        {/* <div className="col-1">
          <DoghnutChart />
        </div> */}
        {/* <div className="col-2">
          <SummaryCards />
        </div>
        <div className="col-3">
          <RecentOrder />
        </div> */}

        {/* <div className="text-3xl col-1  p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum est
          praesentium nihil, quo reprehenderit repellendus voluptates tempore
          eum nulla ducimus vero veritatis amet, ab vel iusto suscipit vitae
          quam architecto.
        </div> */}
      </div>

      <div class="grid-container">
        <div class="item1">
          <DoghnutChart />
        </div>
        <div class="item2">
          <SummaryCards />
        </div>
        <div class="item3">
          <RecentOrder />
        </div>
        <div class="item4 ">4</div>
      </div>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  padding: 1rem 1rem;

  .stats-wrapper {
    display: grid;
    gap: 1rem;
  }

  .market {
    display: flex;
    align-items: start;
    gap: 1rem;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 1rem;
    border-radius: var(--rounded-md);
    gap: 1rem;
    /* background-color: #2196f3; */
    padding: 10px;

    @media ${mediaQueries.lg} {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-template-rows: repeat(10, 3.8rem);
    }
  }

  .grid-container > div {
    /* background-color: rgba(255, 255, 255, 0.8); */
  }

  .item1 {
    background-color: var(--white);
    border-radius: var(--rounded-md);

    @media ${mediaQueries.lg} {
      grid-row: 1 / span 5;
      grid-row: 1 / span 5;
    }
  }

  .item2 {
    @media ${mediaQueries.lg} {
      grid-row: 1 / span 5;
    }
  }

  .item3 {
    @media ${mediaQueries.lg} {
      grid-row: 1 / -1;
    }
  }

  .item4 {
    background-color: var(--white);
    border-radius: var(--rounded-md);

    @media ${mediaQueries.lg} {
      grid-column: 1 / -2;
      grid-row: 6 / -1;
    }
  }

  /* media */
  @media (${mediaQueries.lg}) {
    .stats-wrapper {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media ${mediaQueries.xl} {
    .stats-wrapper {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
`;
