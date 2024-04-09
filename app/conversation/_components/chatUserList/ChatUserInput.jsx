import { Search } from "lucide-react";
import styled from "styled-components";

const ChatUserInput = ({ handleSearch, value }) => {
  return (
    <Input>
      <Search width={18} height={18} className="search-icon" />
      <input
        type="text"
        onChange={handleSearch}
        value={value}
        placeholder="Search"
      />
    </Input>
  );
};

const Input = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 1rem;

  .search-icon {
    position: absolute;
    left: 0.8rem;
  }

  input {
    padding: 8px 16px 8px 2.7rem;
    border: 1px solid #cfd3d4;
    border-radius: var(--rounded-sm);
    width: 100%;
    transition: 0.2s;

    &:focus {
      outline: 2px solid #556ff1ba;
    }
  }
`;
export default ChatUserInput;
