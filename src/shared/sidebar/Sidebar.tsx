import { Sidebar as SidebarComponent, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarProvider } from '@/components/ui/sidebar';
import { Landmark, Home, UserCog, ClipboardMinus, BookUser, FileText, CircleHelp } from "lucide-react"

import headerlogo from '@/assets/headerlogo.svg';

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
      title: "Invocing",
      url: "#",
      icon: FileText,
    },
    {
      title: "Queries",
      url: "#",
      icon: CircleHelp,
    },
  ];


  return (
    <SidebarProvider>
      <SidebarComponent collapsible='none'>
        <SidebarHeader className='bg-[#603AE5] items-center'><img src={headerlogo} alt="headerImage" className='size-12'/></SidebarHeader>
        <SidebarContent className='bg-[#603AE5] text-white'>
          {items.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem key={item.title}>
                    <a href={item.url} className='flex flex-col items-center'>
                      <item.icon />
                      <SidebarGroupLabel className='text-white'>{item.title}</SidebarGroupLabel>
                    </a>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarFooter className='bg-[#603AE5] text-white'>
        <SidebarMenu>
                  <SidebarMenuItem>
                      <a href="#" className='flex flex-col items-center'>
                        <CircleHelp />
                      <SidebarGroupLabel className='text-white'>Help</SidebarGroupLabel>
                      </a>
                  </SidebarMenuItem>
                </SidebarMenu>
        </SidebarFooter>
      </SidebarComponent>
    </SidebarProvider>
  )
}

export default Sidebar