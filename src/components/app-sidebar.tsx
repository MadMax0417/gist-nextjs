import { Calendar, Home, Inbox, Search, Settings, CodeXml, icons } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader
} from "@/components/ui/sidebar"
import Link from "next/link"



// Menu items.
const items = [
  {
    title: "Data Manipulation",
    url: "data-manipulation",
    icon: CodeXml,
  },
  {
    title: "Calculating",
    url: "calculating",
    icon: CodeXml,
  },
  {
    title: "CSV File",
    url: "csv-file",
     icon: CodeXml,
  },
  {
    title: "Matplotlib Plots",
    url: "matplotlib-plots",
     icon: CodeXml,
  },
  {
    title: "Titanic (EDA)",
    url: "titanic-eda",
    icon: CodeXml,
  },
  {
    title: "Prob Survivalon",
    url: "prob-survivalon",
    icon: CodeXml,
  },
  {
    title: "Linear Regression",
    url: "linear-regression",
    icon: CodeXml,
  },
  {
    title: "Decision Tree Irish",
    url: "decision-tree-iris",
    icon: CodeXml,
  },
  {
    title: "AND",
    url: "and",
    icon: CodeXml,
  },
  {
    title: "OR-NOR",
    url: "or-nor",
    icon: CodeXml,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader> <Link href={"/"}> Code Files </Link>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Links</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link 
                    href={`/code/${item.url}`}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      </SidebarHeader>
    </Sidebar>
  )
}