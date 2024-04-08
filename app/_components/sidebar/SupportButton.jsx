import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import styled from "styled-components";

const SupportButton = ({ collapsed }) => {
  return (
    <TooltipProvider delayDuration={3} disableHoverableContent>
      <Tooltip>
        <TooltipTrigger asChild>
          <SupportButtonWrapper>
            <Image
              src={"/img/headset.svg"}
              alt="headset icon"
              width={24}
              height={24}
            />
            <span style={{ opacity: collapsed ? 0 : 1 }}>Contact Support</span>
          </SupportButtonWrapper>
        </TooltipTrigger>
        {collapsed && (
          <TooltipContent hideWhenDetached={true} align="center" side="right">
            Customer support
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

const SupportButtonWrapper = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  column-gap: 0.6rem;
  color: var(--primary-color);
  font-size: 0.8rem;
  padding: 11px 16px;
  background-color: var(--gray-100);
  border-radius: var(--rounded-lg);
  transition: var(--transition);

  &:hover {
    box-shadow: var(--shadow-md);
  }

  span {
    white-space: nowrap;
  }
`;

export default SupportButton;
