import styled from "styled-components";
import ChatWindowHeader from "./ChatWindowHeader";
import { mediaQueries } from "@/app/style/mediaQueries";
import ChatHistory from "./ChatHistory";
import ChatWindowInput from "./ChatWindowInput";
import { UseResponsive } from "@/hooks/Use-responsive";
import { useSearchParams } from "next/navigation";
import { useChat } from "@/hooks/use-chat";
import Image from "next/image";

const ChatWindow = () => {
  const { mediaQueriesLg } = UseResponsive();
  const searchParams = useSearchParams();
  const activeContact = searchParams.get("contact");
  const { selectedContact } = useChat();

  if (!selectedContact) {
    return (
      <ChatWindowWrapper>
        <div className="not-selected">
          <div>
            <div className="relative w-[13rem] h-[13rem] ">
              <Image
                src={"/img/empty.svg"}
                alt="empty illustration icon"
                fill
                sizes="(max-width: 768px) 100vw"
              />
            </div>
            <p className="mt-5 text-lg">Select a contact </p>
          </div>
        </div>
      </ChatWindowWrapper>
    );
  }

  return (
    <ChatWindowWrapper
      style={{
        transform: !mediaQueriesLg && activeContact && "translate(0)",
      }}
    >
      <ChatWindowHeader />
      <ChatHistory />
      <div className="chat-position ">
        <ChatWindowInput />
      </div>
    </ChatWindowWrapper>
  );
};

const ChatWindowWrapper = styled.div`
  border-radius: var(--rounded-md);
  background-color: var(--white);
  height: 100vh;
  transition: all 0.3s ease;
  transform: translate(100%);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 12;

  .chat-position {
    padding: 0.6rem 0;
    width: 100%;
    background-color: #fff;
    position: absolute;
    bottom: 0.6rem;
    left: 0;
    border-radius: var(--rounded-sm);

    @media ${mediaQueries.sm} {
      padding: 0.6rem 1.5rem;
      bottom: 0;
    }
  }

  .not-selected {
    display: grid;
    height: 100%;
    width: 100%;
    place-items: center;
    opacity: 0.4;
  }

  @media ${mediaQueries.lg} {
    height: calc(100vh - 26vh);
    width: auto;
    transform: translate(0);
    position: relative;
    flex-direction: column;
  }
`;
export default ChatWindow;
