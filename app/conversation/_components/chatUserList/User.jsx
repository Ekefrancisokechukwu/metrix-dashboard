"use client";

import { inter } from "@/app/style/font";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { contacts } from "@/lib/data";
import { useChat } from "@/hooks/use-chat";

const User = ({ contact }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeContact = searchParams.get("contact") === contact.id;
  const chatId = searchParams.get("contact");
  const { handleSelectedContact } = useChat();

  const handleSelectUser = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("contact", contact.id);
    router.push(`?contact=${contact.id}`);
    localStorage.setItem("selectedContact", contact.id);
  };

  useEffect(() => {
    // Using the URL param to keep the data
    const selectedUser = contacts.find((user) => user.id === chatId);
    handleSelectedContact(selectedUser);
  }, [chatId, handleSelectedContact]);

  return (
    <UserWrapper
      layout
      style={{ backgroundColor: activeContact && "#f4f5fa" }}
      onClick={handleSelectUser}
    >
      <div className="user-info">
        <div style={{ position: "relative", flexShrink: 0 }}>
          <Image
            src={contact.image}
            alt={contact.name}
            width={35}
            height={35}
          />
          <Image
            src={
              contact.online ? "/img/onlin-icon.png" : "/img/offline-icon.png"
            }
            alt=""
            width={10}
            height={10}
            className="online-tag"
          />
        </div>

        <div>
          <h2>{contact.name}</h2>
          <p className="line-clamp-1">{contact.lastMessage.text}</p>
        </div>
      </div>
      <div className="user-notify">
        {!contact.lastMessage.isRead && <span className="notify">3</span>}
        {contact.isNewChat && (
          <span className={`${inter.className} new-tag`}>New</span>
        )}
        {!contact.isNewChat && contact.lastMessage.isRead && (
          <span className="empty">&nbsp;</span>
        )}
        <p className="time text-nowrap">{contact.lastMessage.time}</p>
      </div>
      {activeContact && (
        <motion.span
          layoutId="activeId"
          className={" active-tag"}
        ></motion.span>
      )}
    </UserWrapper>
  );
};

const UserWrapper = styled(motion.li)`
  position: relative;
  padding: 0.7rem 1.5rem;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  column-gap: 0.6rem;
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    background-color: var(--gray-50);
  }

  .user-info {
    display: flex;
    align-items: center;
    column-gap: 1rem;

    h2 {
      font-size: 0.9rem;
      color: var(--primary-color);
      text-transform: capitalize;
    }

    p {
      color: var(--gray-200);
      margin-top: 0.3rem;
      font-size: 0.8rem;
    }
  }

  .user-notify {
    display: flex;
    align-items: end;
    align-content: space-between;
    flex-direction: column;
    justify-content: space-between;
  }

  .online-tag {
    position: absolute;
    top: 0;
    right: -4px;
  }

  .notify {
    width: 20px;
    height: 20px;
    display: grid;
    place-items: center;
    background-color: #ffcc91;
    border-radius: var(--rounded-full);
    font-size: 0.8rem;
  }

  .empty {
    display: block;
  }

  .new-tag {
    font-size: 0.7rem;
    color: var(--primary-color);
    border-radius: var(--rounded-sm);
    background-color: #fef5ea;
    padding: 2px 7px;
  }

  .time {
    color: var(--gray-200);
    font-size: 0.7rem;
  }

  .active-tag {
    position: absolute;
    height: 100%;
    width: 2px;
    background-color: var(--blue-100);
    right: 0;
    top: 0;
  }
`;
export default User;
