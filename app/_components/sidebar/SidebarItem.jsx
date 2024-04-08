"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { UseResponsive } from "@/hooks/Use-responsive";
import { useSidebar } from "@/hooks/use-sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItem = ({ collapsed, link }) => {
  const pathname = usePathname();
  const active = pathname === link.path;
  const ContactId =
    typeof window !== "undefined" && window.localStorage
      ? localStorage.getItem("selectedContact")
      : null;

  const { mediaQueriesXl } = UseResponsive();
  const { toggleSidebar } = useSidebar();

  const generateHref = (link, ContactId) => {
    if (ContactId && link.path.includes("conversation")) {
      return `${link.path}?contact=${ContactId}`;
    } else {
      return link.path;
    }
  };

  const handleSidebar = () => {
    if (!mediaQueriesXl) {
      toggleSidebar();
    }
  };

  return (
    <TooltipProvider delayDuration={3} disableHoverableContent>
      <li className="sidebar-item">
        <Tooltip disableHoverableContent>
          <TooltipTrigger asChild>
            <Link
              onClick={handleSidebar}
              href={generateHref(link, ContactId)}
              className={active ? "sidebar-link active" : "sidebar-link "}
            >
              <Image
                src={active ? link.activeIcon : link.icon}
                alt={`icon ${link.text}`}
                width={20}
                height={20}
                style={{ maxWidth: 20 }}
              />
              <span style={{ opacity: collapsed ? 0 : 1 }}>{link.text}</span>
              {link.notification && (
                <div
                  className={
                    collapsed ? "sidebar-notify collapsed" : "sidebar-notify "
                  }
                >
                  {link.notification}
                </div>
              )}
            </Link>
          </TooltipTrigger>
          {collapsed && (
            <TooltipContent hideWhenDetached={true} align="center" side="right">
              {link.text}
            </TooltipContent>
          )}
        </Tooltip>
      </li>
    </TooltipProvider>
  );
};
export default SidebarItem;
