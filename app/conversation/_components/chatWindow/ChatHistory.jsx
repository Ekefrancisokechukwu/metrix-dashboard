"use client";

import { mediaQueries } from "@/app/style/mediaQueries";
import { contacts } from "@/lib/data";
import { Check } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ChatHistory = () => {
  const [chats, setChats] = useState([]);
  const searchParams = useSearchParams();
  const chatId = searchParams.get("contact");
  const inViewRef = useRef();

  useEffect(() => {
    contacts.map((contact) => {
      if (contact.id === chatId) {
        setChats(contact.conversationHistory);
      }
    });
  }, [chatId]);

  useEffect(() => {
    inViewRef?.current.scrollIntoView({ behavior: "smooth" });
  }, [chatId]);

  return (
    <ChatHistoryWrapper className="custom-scrollbar">
      {chats.map((chat, i) => {
        const currentUser = chat.senderId === "currentUserId";

        return (
          <React.Fragment key={i}>
            <div className="date">12 August 2022</div>

            <div className={`message-box  ${currentUser && "message-sent"} `}>
              <p
                className={`message-paragraph ${
                  currentUser
                    ? "message-sent-paragraph"
                    : "message-recieve-paragraph"
                } "`}
              >
                {chat.text}
              </p>

              <span>
                {chat.time}{" "}
                {currentUser && (
                  <span className="tick">
                    <Check
                      color="black"
                      className="ml-1"
                      width={11}
                      hanging={11}
                    />
                  </span>
                )}
              </span>
            </div>
          </React.Fragment>
        );
      })}

      <span ref={inViewRef} className="w-3 h-3  inline-block"></span>
    </ChatHistoryWrapper>
  );
};

const ChatHistoryWrapper = styled.div`
  height: 74vh;
  overflow-y: auto;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.4rem;

  .message-box {
    max-width: 350px;

    span {
      margin-top: 0.5rem;
      font-size: 0.8rem;
      color: var(--gray-200);
    }
  }

  .message-recieve-paragraph {
    border-radius: 16px 16px 16px 0px;
    background-color: var(--blue-100);
    color: #fff;
  }

  .message-sent-paragraph {
    border-radius: 16px 16px 0px 16px;
    background-color: #ffead1;
    color: #1c1d22;
  }

  .tick {
    background-color: #ffead1;
    width: 18px;
    height: 18px;
    display: inline-block;
    margin-left: 0.3rem;
    border-radius: var(--rounded-full);
  }

  .message-sent {
    align-self: flex-end;
    text-align: right;
  }

  .message-paragraph {
    padding: 0.8rem;
    line-height: 24px;
    font-size: 0.9rem;
  }

  .date {
    color: var(--primary-color);
    font-size: 0.8rem;
    text-transform: capitalize;
    padding: 8px 12px;
    border-radius: var(--rounded-sm);
    background-color: #f4f5fa;
    align-self: center;
  }

  @media ${mediaQueries.lg} {
    height: 50vh;
  }
`;
export default ChatHistory;
