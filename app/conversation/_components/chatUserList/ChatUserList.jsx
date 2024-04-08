import styled from "styled-components";
import ChatUserInput from "./ChatUserInput";
import User from "./User";
import { mediaQueries } from "@/app/style/mediaQueries";
import { contacts } from "@/lib/data";

const ChatUserList = () => {
  return (
    <ChatUserWrapper>
      <div className="chatUser-header">
        <div className="chatUser-header_top">
          <h2>Contacts</h2>
          <span>34</span>
        </div>
        <ChatUserInput />
      </div>

      <ul className="users-container custom-scrollbar">
        {contacts.map((contact) => {
          return <User key={contact.id} contact={contact} />;
        })}
      </ul>
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

  .users-container {
    margin-top: 1.4rem;
  }

  @media ${mediaQueries.lg} {
    width: 390px;
    border-radius: var(--rounded-md);
  }
`;
export default ChatUserList;
