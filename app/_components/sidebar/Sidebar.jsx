"use client";

import styled from "styled-components";
import Logo from "../logo/Logo";
import { useCallback, useEffect } from "react";
import SidebarItem from "./SidebarItem";
import { navLinks } from "@/lib/data";
import SupportButton from "./SupportButton";
import FreeGiftNotification from "./FreeGiftNotification";
import LogoutButton from "./LogoutButton";
import { mediaQueries } from "@/app/style/mediaQueries";
import { useSidebar } from "@/hooks/use-sidebar";
import { UseResponsive } from "@/hooks/Use-responsive";

const Sidebar = () => {
  const { collapsed, setCollapsedFalse, isOpen, toggleSidebar } = useSidebar();
  const { mediaQueriesXl } = UseResponsive();

  const handleSidebarToggle = useCallback(() => {
    if (!mediaQueriesXl) {
      setCollapsedFalse();
    } else {
      toggleSidebar();
    }
  }, [mediaQueriesXl, setCollapsedFalse, toggleSidebar]);

  useEffect(() => {
    handleSidebarToggle();
  }, [handleSidebarToggle]);

  return (
    <>
      <OverLay
        onClick={toggleSidebar}
        style={{ display: !mediaQueriesXl && isOpen && "block" }}
      />
      <SidebarWrapper
        className="custom-scrollbar"
        style={{
          width: collapsed ? 76 : 270,
          padding: collapsed ? "0.8rem  .7rem" : "0.8rem 1.8rem",
          marginLeft: !mediaQueriesXl && isOpen && "0",
        }}
      >
        <Logo collapsed={collapsed} />
        <ul className="sidebar-list">
          {navLinks.map((link, i) => {
            return <SidebarItem key={i} link={link} collapsed={collapsed} />;
          })}
        </ul>
        <div style={{ height: 70 }} />
        <SupportButton collapsed={collapsed} />

        <FreeGiftNotification collapsed={collapsed} />
        <LogoutButton collapsed={collapsed} />
      </SidebarWrapper>
    </>
  );
};

const SidebarWrapper = styled.aside`
  background-color: var(--white);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: all 0.3s ease;
  margin-left: -276px;
  z-index: 100;

  .sidebar-list {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    row-gap: 0.2rem;
  }

  .sidebar-link {
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 0.8rem;
    color: var(--primary-color);
    font-size: 0.8rem;
    padding: 0.9rem 1rem;
    border-radius: var(--rounded-md);
    transition: var(--transition);
    position: relative;

    &:hover {
      background-color: var(--gray-50);
    }

    span {
      white-space: nowrap;
      text-transform: capitalize;
    }

    .sidebar-notify {
      width: 24px;
      height: 24px;
      border-radius: var(--rounded-full);
      background-color: #ffcc91;
      display: grid;
      place-items: center;
      color: var(--primary-color);
    }
    .sidebar-notify.collapsed {
      position: absolute;
      width: 18px;
      height: 18px;
      right: 2px;
      top: 9px;
    }
  }

  .sidebar-link.active {
    background-color: var(--blue-100);
    color: var(--white);
  }

  /* media */
  @media ${mediaQueries.xl} {
    margin-left: 0;
    position: sticky;
  }
`;

const OverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
  background-color: #00000084;
  display: none;
`;

export default Sidebar;
