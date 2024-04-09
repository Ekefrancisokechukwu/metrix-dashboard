"use client";

import styled from "styled-components";
import ChatUserInput from "./ChatUserInput";
import User from "./User";
import { mediaQueries } from "@/app/style/mediaQueries";
import { contacts } from "@/lib/data";
import { useState } from "react";

const ChatUserList = () => {
  const [ContactsData, setContactsData] = useState(contacts);
  const [SearchValue, setSearchValue] = useState("");

  const handleFilterContact = (value) => {
    const filteredData = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
    setContactsData(filteredData);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    handleFilterContact(value);
  };

  return (
    <ChatUserWrapper>
      <div className="chatUser-header">
        <div className="chatUser-header_top">
          <h2>Contacts</h2>
          <span>{ContactsData.length}</span>
        </div>
        <ChatUserInput value={SearchValue} handleSearch={handleSearch} />
      </div>

      {ContactsData.length > 1 && SearchValue ? (
        <h1 className="not-found">No Contacts Found!</h1>
      ) : (
        <ul className="users-container custom-scrollbar">
          {ContactsData.map((contact) => {
            return (
              <User
                key={contact.id}
                setSearchValue={setSearchValue}
                contact={contact}
                setContactsData={setContactsData}
              />
            );
          })}
        </ul>
      )}
    </ChatUserWrapper>
  );
};

const ChatUserWrapper = styled.div`
  width: 100%;
  background-color: var(--white);
  padding-top: 18px;
  height: calc(100vh - 26vh);

  .chatUser-header {
    padding: 0 1.5rem;

    &_top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h2 {
        color: var(--primary-color);
        font-size: 1rem;
        font-weight: 500;
      }

      span {
        color: var(--gray-200);
        font-weight: 500;
        font-size: 1rem;
      }
    }
  }

  .not-found {
    color: var(--primary-color);
    font-weight: 500;
    text-align: center;
    margin-top: 4rem;
  }
  .users-container {
    margin-top: 1.4rem;
  }

  @media ${mediaQueries.lg} {
    width: 390px;
    border-radius: var(--rounded-md);
  }
`;
export default ChatUserList;
