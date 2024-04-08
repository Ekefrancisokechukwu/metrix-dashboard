"use client";

import { inter } from "@/app/style/font";
import { mediaQueries } from "@/app/style/mediaQueries";
import styled from "styled-components";

const CustomerMessagePanel = () => {
  return (
    <MessagePanel>
      <h1 className={inter.className}>Conversations with Customers</h1>
      <button className="message-btn">New Message</button>
    </MessagePanel>
  );
};

const MessagePanel = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: var(--primary-color);
    font-size: 1rem;
    font-weight: 500;
  }

  .message-btn {
    background-color: var(--blue-100);
    padding: 8px 16px;
    border-radius: var(--rounded-md);
    color: #ffff;
    font-size: 0.8rem;

    &:hover {
      transform: scale(1.05);
    }
  }
  @media ${mediaQueries.lg} {
    display: flex;
  }
`;
export default CustomerMessagePanel;
