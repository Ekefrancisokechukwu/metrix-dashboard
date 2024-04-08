"use client";

import styled from "styled-components";
import CustomerMessagePanel from "./_components/CustomerMessagePanel";
import ChatWindow from "./_components/chatWindow/ChatWindow";
import ChatUserList from "./_components/chatUserList/ChatUserList";
import { mediaQueries } from "../style/mediaQueries";
import { Suspense } from "react";

const Conversation = () => {
  return (
    <ChatWrapper>
      <CustomerMessagePanel />

      <div className="chat">
        <Suspense fallback={<div>Loading...</div>}>
          <ChatUserList />
          <ChatWindow />
        </Suspense>
      </div>
    </ChatWrapper>
  );
};

const ChatWrapper = styled.div`
  padding: 0;

  .chat {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 1rem;
  }

  @media ${mediaQueries.lg} {
    padding: 1rem;
    .chat {
      grid-template-columns: auto 1fr;
    }
  }
`;

export default Conversation;
