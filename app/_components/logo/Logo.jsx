"use client";

import Image from "next/image";
import styled from "styled-components";

const Logo = ({ collapsed }) => {
  return (
    <>
      <LogoContainer style={{ marginLeft: collapsed && 7 }}>
        <Image
          src={"/img/logo-half.png"}
          width={40}
          height={40}
          alt="Logo half"
        />
        {!collapsed && <span className="logoText">Metrix</span>}
      </LogoContainer>
    </>
  );
};
export default Logo;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 0.7rem;

  .logoText {
    font-weight: 700;
    font-size: 1.2rem;
    color: var(--primary-color);
  }
`;
