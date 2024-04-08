"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import styled from "styled-components";

const FreeGiftNotification = ({ collapsed }) => {
  return (
    <FreeGiftWrapper>
      <div className="free-gift-info">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            stiffness: 80,
            duration: 1,
          }}
        >
          <Image src="/img/gift.svg" alt="gift icon" width={20} height={20} />
        </motion.div>
        <span
          style={{
            display: collapsed && "none",
          }}
        >
          Free Gift Awaits You!
        </span>
      </div>

      <div
        style={{ display: collapsed ? "none" : "flex" }}
        className="free-gift-upgrade"
      >
        <span>Upgrade your account</span>
        <ChevronRight width={15} height={15} />
      </div>
    </FreeGiftWrapper>
  );
};

const FreeGiftWrapper = styled.button`
  width: 100%;
  background-color: #ffcc9133;
  border-radius: var(--rounded-lg);
  padding: 11px 16px;
  margin-top: 1rem;
  transition: var(--transition);

  &:hover {
    box-shadow: var(--shadow-md);
  }

  .free-gift-info {
    display: flex;
    align-items: center;
    column-gap: 0.8rem;
    color: var(--primary-color);
    font-size: 0.8rem;
    font-weight: 400;

    span {
      white-space: nowrap;
    }
  }

  .free-gift-upgrade {
    margin-top: 1rem;
    align-items: center;
    column-gap: 1rem;
    font-size: 0.7rem;
    color: #8b8d97;
    white-space: nowrap;
  }
`;

export default FreeGiftNotification;
