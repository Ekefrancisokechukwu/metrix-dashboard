"use client";

import styled from "styled-components";

const StatsCard = ({ children }) => {
  return <CardBox>{children}</CardBox>;
};

const CardBox = styled.div`
  padding: 11px 15px;
  background: var(--white);
  border-radius: var(--rounded-md);
  width: 100%;

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-content {
    display: flex;
    align-items: center;
    column-gap: 2rem;
    margin-top: 2rem;
  }

  .card-desc {
    color: var(--gray-200);
    font-size: 0.9rem;
  }

  .card-number {
    color: var(--primary-color);
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 0.6rem;
  }

  .card-rate {
    font-size: 0.7rem;
    color: #519c66;
  }
`;

export default StatsCard;
