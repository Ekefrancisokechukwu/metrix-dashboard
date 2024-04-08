import { mediaQueries } from "@/app/style/mediaQueries";
import { Plus, Smile } from "lucide-react";
import Image from "next/image";
import styled from "styled-components";

const ChatWindowInput = () => {
  return (
    <InputWrapper>
      <button type="button" className="multiply-btn">
        <Plus width={14} height={14} />
      </button>
      <input type="text" placeholder="Your message" className="input" />
      <button type="button" className="emoji">
        <Smile width={18} height={18} />
      </button>
      <button className="send-btn">
        <span>send</span>
        <Image src={"/img/Send.svg"} alt="send icon" width={20} height={20} />
      </button>
    </InputWrapper>
  );
};

const InputWrapper = styled.form`
  border: 1px solid #e1e2e9;
  padding: 0.4rem 0.7rem;
  display: flex;
  align-items: center;
  column-gap: 1rem;

  @media ${mediaQueries.sm} {
    border-radius: var(--rounded-sm);
  }

  .multiply-btn {
    width: 30px;
    height: 30px;
    background-color: #fff2e2;
    border-radius: var(--rounded-sm);
    display: grid;
    place-items: center;
    flex-shrink: 0;
    transition: var(--transition);

    &:hover {
      background-color: #f9e6cd;
    }
  }

  .input {
    outline: 0;
    padding: 0.3rem;
    width: 90%;
    font-size: 1rem;
    color: var(--primary-color);
  }

  .emoji {
    padding: 5px;
    border-radius: var(--rounded-full);
    color: var(--blue-100);
    width: 25px;
    height: 25px;
    display: grid;
    place-content: center;
    transition: var(--transition);

    &:hover {
      background-color: var(--gray-100);
    }
  }

  .send-btn {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    padding: 8px 10px;
    border-radius: var(--rounded);
    background-color: #fff2e2;
    flex-shrink: 0;
    font-size: 1rem;
    transition: var(--transition);

    &:hover {
      background-color: #f9e6cd;
    }
    span {
      display: none;
    }

    @media ${mediaQueries.sm} {
      padding: 8px 16px;

      span {
        display: inline-block;
      }
    }
  }
`;
export default ChatWindowInput;
