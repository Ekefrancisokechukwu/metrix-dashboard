import Image from "next/image";
import styled from "styled-components";

const LogoutButton = ({ collapsed }) => {
  return (
    <LogOutButtonWrapper>
      <Image
        src={"/img/Logout.svg"}
        alt="logout icon"
        width={24}
        height={24}
        style={{ maxWidth: 24 }}
      />
      <span style={{ display: collapsed && "none" }}>Logout</span>
    </LogOutButtonWrapper>
  );
};

const LogOutButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  margin-top: 1.5rem;
  padding: 11px 16px;
  font-size: 0.8rem;
  color: #cc5f5f;
  width: 100%;
  transition: all 0.1s ease;
  border-radius: var(--rounded-sm);

  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-lg);
  }
`;

export default LogoutButton;
