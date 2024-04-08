import styled from "styled-components";

const Summarycard = ({ children, bgColor }) => {
  return (
    <SummaryCardWrapper style={{ background: bgColor }}>
      {children}
    </SummaryCardWrapper>
  );
};

const SummaryCardWrapper = styled.div`
  border-radius: var(--rounded-md);
  padding: 11px 15px;
  height: 100%;

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card-content {
    display: flex;
    align-items: center;
    column-gap: 4rem;
    margin-top: 2.5rem;
  }

  .card-info {
    h4 {
      font-size: 0.9rem;
    }

    h2 {
      margin-top: 0.8rem;
      font-size: 1.2rem;
      font-weight: 500;

      span {
        font-size: 0.7rem;
        font-weight: 300;
      }
    }
  }

  .card-num-1 {
    color: #ffff;
  }
  .card-num-2 {
    color: var(--primary-color);
  }
`;
export default Summarycard;
