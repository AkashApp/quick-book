import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import {
  Landmark,
  Home,
  UserCog,
  ClipboardMinus,
  BookUser,
  FileText,
  CircleHelp,
} from "lucide-react";

import headerlogo from "@/assets/headerlogo.svg";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const items = [
    {
      title: "Dashboard",
      url: "#",
      icon: Home,
    },
    {
      title: "Accounting",
      url: "#",
      icon: UserCog,
    },
    {
      title: "Banking",
      url: "#",
      icon: Landmark,
    },
    {
      title: "Reports",
      url: "#",
      icon: ClipboardMinus,
    },
    {
      title: "Contacts",
      url: "#",
      icon: BookUser,
    },
    {
      title: "Invoicing",
      url: "#",
      icon: FileText,
    },
    {
      title: "Queries",
      url: "#",
      icon: CircleHelp,
    },
  ];

  const [show, setShow] = useState("-12rem");
  const [title, setTitle] = useState("");

  const handleMouseEnter = (item: string) => {
    setTitle(item);
    setShow("0");
  };

  const handleMouseLeave = () => {
    setShow("-12rem");
  };

  return (
    <SidebarProvider>
      <SidebarComponent className="z-60" collapsible="none">
        <SidebarHeader className="bg-[#603AE5] items-center">
          <img src={headerlogo} alt="headerImage" className="size-12" />
        </SidebarHeader>
        <SidebarContent className="bg-[#603AE5] text-white">
          {items.map((item) => (
            <SidebarGroup
              key={item.title}
              onMouseEnter={()=> item.title !== "Dashboard"  && handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
              className="hover:bg-[#7d63db] hover:text-white hover:border-l-4 border-white"
            >
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem key={item.title}>
                    <a href={item.url} className="flex flex-col items-center">
                      <item.icon />
                      <SidebarGroupLabel className="text-white">
                        {item.title}
                      </SidebarGroupLabel>
                    </a>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarFooter className="bg-[#603AE5] text-white">
          <SidebarMenu>
            <SidebarMenuItem>
              <a href="#" className="flex flex-col items-center">
                <CircleHelp />
                <SidebarGroupLabel className="text-white">
                  Help
                </SidebarGroupLabel>
              </a>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </SidebarComponent>
      <div
        className={`bg-[#7d63db] z-50 w-[12rem] h-[100%] fixed left-21 ease-in-out duration-500 text-white ml-[${show}]`}
        onMouseEnter={() => handleMouseEnter(title)}
        onMouseLeave={handleMouseLeave}
      >
        {title==="Accounting" && (
          <div className="flex flex-col gap-2 ml-4 mr-4 mt-18">
            <Button className="bg-white text-[#7d63db] rounded-[2px] hover:bg-white">Chart of Accounts</Button>
            <Button className="bg-[#7d63db] text-white hover:bg-[#7d63db]">Bills</Button>
            <Button className="bg-[#7d63db] text-white hover:bg-[#7d63db]">Receipts</Button>
            <Button className="bg-[#7d63db] text-white hover:bg-[#7d63db]">Reconcile</Button>
          </div>
        )}
        {title==="Banking" && (
          <div className="flex flex-col gap-2 ml-4 mr-4 mt-18">
            <Button className="bg-white text-[#7d63db] rounded-[2px] hover:bg-white">Chart of Bank</Button>
          </div>
        )}{title==="Reports" && (
          <div className="flex flex-col gap-2 ml-4 mr-4 mt-18">
            <Button className="bg-white text-[#7d63db] rounded-[2px] hover:bg-white">Create Report</Button>
          </div>
        )}{title==="Contacts" && (
          <div className="flex flex-col gap-2 ml-4 mr-4 mt-18">
            <Button className="bg-white text-[#7d63db] rounded-[2px] hover:bg-white">Contact Book</Button>
          </div>
        )}{title==="Invoicing" && (
          <div className="flex flex-col gap-2 ml-4 mr-4 mt-18">
            <Button className="bg-white text-[#7d63db] rounded-[2px] hover:bg-white">Generate Invoice</Button>
            <Button className="bg-[#7d63db] text-white hover:bg-[#7d63db]">Invoices</Button>
          </div>
        )}{title==="Queries" && (
          <div className="flex flex-col gap-2 ml-4 mr-4 mt-18">
            <Button className="bg-white text-[#7d63db] rounded-[2px] hover:bg-white">About</Button>
          </div>
        )}
      </div>
    </SidebarProvider>
  );
};

export default Sidebar;
