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
        <DoghnutChart />
        <SummaryCards />
        <RecentOrder />
        {/* <div className="text-3xl summary-barChat bg-white p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum est
          praesentium nihil, quo reprehenderit repellendus voluptates tempore
          eum nulla ducimus vero veritatis amet, ab vel iusto suscipit vitae
          quam architecto.
        </div> */}
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

  .summary-barChat {
    grid-column: 1/ -2;
    /* grid-row: 1; */
  }

  .market_summary-content {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    align-items: start;
    gap: 1rem;
    flex-grow: 1;

    @media (${mediaQueries.md}) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (${mediaQueries.lg}) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
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
