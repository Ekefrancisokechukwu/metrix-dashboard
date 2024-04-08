"use client";

import Image from "next/image";
import styled from "styled-components";
import UserProfile from "./UserProfile";
import { usePathname } from "next/navigation";
import { AlignJustify, AlignRight } from "lucide-react";
import { useSidebar } from "@/hooks/use-sidebar";

import ShopSelect from "./ShopSelect";
import { mediaQueries } from "@/app/style/mediaQueries";

const Header = () => {
  const pathName = usePathname();
  const currentPath = pathName.slice(1);
  const { collapsed, toggleCollapsed, toggleSidebar } = useSidebar();

  return (
    <HeaderWrapper>
      <div className="header-top">
        <div className="header-heading">
          <h1>{pathName === "/" ? "Dashboard" : currentPath}</h1>

          <button className="toggle-btn" onClick={toggleCollapsed}>
            {collapsed ? (
              <AlignJustify width={18} height={18} />
            ) : (
              <AlignRight width={18} height={18} />
            )}
          </button>
        </div>

        <div className="header-right">
          <ShopSelect />
          <button onClick={toggleSidebar} className="sidebar-btn">
            <AlignJustify width={18} height={18} />
          </button>

          <button className="notification-icon">
            <Image
              src={"/img/Notification.svg"}
              alt="notification icon"
              width={16}
              height={16}
            />
          </button>
          <UserProfile />
        </div>
      </div>

      <div className="header-bottom">
        <Image
          src={"/img/Home.svg"}
          alt="notification icon"
          width={16}
          height={16}
        />

        {pathName !== "/" && (
          <>
            <span>/</span>
            <span>{currentPath}</span>
          </>
        )}
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: var(--white);
  width: 100%;
  position: sticky;
  top: 0;

  .header-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;

    border-bottom: 1px solid var(--gray-50);
  }

  .header-heading {
    font-size: 1rem;
    font-weight: 500;
    color: var(--primary-color);
    display: flex;
    align-items: center;
    column-gap: 1.2rem;

    h1 {
      text-transform: capitalize;
    }
    @media ${mediaQueries.sm} {
      font-size: 1.2rem;
    }
  }

  .header-right {
    display: flex;
    align-items: center;
    column-gap: 1.6rem;
  }

  .notification-icon {
    display: none;
    @media ${mediaQueries.sm} {
      display: block;
    }
  }
  .header-bottom {
    padding: 0.3rem 1rem;
    display: none;
    align-items: center;
    column-gap: 1rem;

    span {
      color: var(--gray-200);
      font-size: 0.7rem;
      text-transform: capitalize;
    }

    @media ${mediaQueries.lg} {
      display: flex;
    }
  }

  .sidebar-btn {
    display: block;

    @media ${mediaQueries.xl} {
      display: none;
    }
  }

  .toggle-btn {
    padding: 0.4rem;
    border-radius: var(--rounded-sm);
    transition: var(--transition);
    display: none;

    &:hover {
      background-color: var(--gray-50);
    }

    &:active {
      transform: scale(0.7);
    }

    @media ${mediaQueries.xl} {
      display: block;
    }
  }
`;

export default Header;
