"use client";

import { mediaQueries } from "@/app/style/mediaQueries";
import { useChat } from "@/hooks/use-chat";
import { contacts } from "@/lib/data";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ChatWindowHeader = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { selectedContact } = useChat();

  const setContactSelectedFalse = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("contact");
    router.push(`?${params.toString()}`);
  };

  return (
    <Header>
      <div className="header-left">
        <button onClick={setContactSelectedFalse} className="close-btn">
          <ArrowLeft width={20} height={20} />
        </button>

        <div className="relative sm:w-[40px] sm:h-[40px] w-[35px] h-[35px]">
          <Image
            src={selectedContact?.image}
            alt={selectedContact?.name}
            fill
            sizes="(max-width: 768px) 100vw)"
          />
        </div>

        <div>
          <h1 className="name">{selectedContact?.name}</h1>
          <div className="status">
            <p className="status-info">
              <span
                style={{
                  backgroundColor: selectedContact.online
                    ? "#5570F1"
                    : "#C4CAE8",
                }}
                className="status-dot "
              />
              <span> {selectedContact?.online ? "Online" : "Offline"} </span>
            </p>
            <p className="status-time">12:55 am</p>
          </div>
        </div>
      </div>

      <div className="header-right">
        <div className="status-tag-container">
          {selectedContact.isNewChat && (
            <span className="status-tag">New Customer</span>
          )}
          <button className="view-btn">View Profile</button>
        </div>

        <div className="order">
          <Image src={"/img/Bag.svg"} alt="bag icon" width={15} height={15} />
          <p>0 Orders</p>
        </div>
      </div>
    </Header>
  );
};

const Header = styled.div`
  padding: 14px 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: var(--border);

  .header-left {
    display: flex;
    align-items: center;
    column-gap: 0.8rem;
  }

  .name {
    color: var(--primary-color);
    font-weight: 500;
    font-size: 0.8rem;

    @media ${mediaQueries.sm} {
      font-size: 1rem;
    }
  }

  .status {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    margin-top: 0.4rem;
  }

  .status-info {
    display: flex;
    align-items: center;
    column-gap: 0.6rem;
    color: var(--gray-200);
    text-transform: capitalize;
    font-size: 0.8rem;
  }

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: var(--rounded-full);
  }

  .status-time {
    color: var(--primary-color);
    font-size: 0.8rem;
    display: none;
  }

  .status-tag-container {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }

  .status-tag {
    color: var(--primary-color);
    font-size: 0.7rem;
    background-color: #fef5ea;
    padding: 2px 7px;
    border-radius: var(--rounded-sm);
    display: none;

    @media ${mediaQueries.sm} {
      display: flex;
    }
  }

  .view-btn {
    color: #5570f1;
    font-size: 0.8rem;
    transition: var(--transition);

    &:hover {
      transform: scale(1.05);
    }
  }

  .order {
    display: flex;
    column-gap: 0.5rem;
    margin-top: 0.7rem;
    justify-content: end;

    p {
      color: var(--gray-200);
      font-size: 0.8rem;
    }
  }

  .close-btn {
    display: block;

    @media ${mediaQueries.lg} {
      display: none;
    }
  }

  @media ${mediaQueries.md} {
    padding: 18px 1.5rem;

    .status-time {
      display: block;
    }
  }
`;
export default ChatWindowHeader;
