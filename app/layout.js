"use client";

import "./globals.css";
import Sidebar from "./_components/sidebar/Sidebar";
import styled from "styled-components";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "./_components/header/Header";
import { mediaQueries } from "./style/mediaQueries";
import { poppins } from "./style/font";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <Wrapper>
            <div className="dashboard">
              <Sidebar />
              <div>
                <Header />

                {children}
              </div>
            </div>
          </Wrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

const Wrapper = styled.section`
  min-height: 100vh;
  background-color: var(--gray-50);

  .dashboard {
    max-width: 1600px;
    margin: 0 auto;
    display: grid;
  }

  @media ${mediaQueries.xl} {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
  }
`;
