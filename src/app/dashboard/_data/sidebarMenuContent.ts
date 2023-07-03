import { DASHBOARD_ROUTE, ITEMS_ROUTE } from "@/constants/routes";
import { Alarm, Dashboard, Delete, Edit, File, Group, HourGlass, Photo, Subscriptions } from "@/assets";
import { IconProps, MergeWithAs } from "@chakra-ui/react";
import { SVGProps } from "react";

export type SidebarContentItem = {
  title: string;
  route: string;
  Icon: any
};
export type SidebarContent = {
  group: string;
  items: SidebarContentItem[];
};
const sidebarContent: SidebarContent[] = [
  {
    group: "Home",
    items: [
        {
            title: "Dashboard",
            route: ITEMS_ROUTE,
            Icon: Dashboard,
          },
      {
        title: "Item 1",
        route: ITEMS_ROUTE,
        Icon: Edit,
      },
      {
        title: "Item 2",
        route: ITEMS_ROUTE,
        Icon: Group,
      },
      {
        title: "Item 3",
        route: ITEMS_ROUTE,
        Icon: HourGlass,
      },
    ],
  },
  {
    group: "Others 1",
    items: [
      {
        title: "Item 4",
        route: ITEMS_ROUTE,
        Icon: Photo,
      },
      {
        title: "Item 5",
        route: ITEMS_ROUTE,
        Icon: Delete,
      },
    ],
  },
  {
    group: "Others 2",
    items: [
      {
        title: "Item 6",
        route: ITEMS_ROUTE,
        Icon: Subscriptions,
      },
      {
        title: "Item 7",
        route: ITEMS_ROUTE,
        Icon: File,
      },
      {
        title: "Item 8",
        route: ITEMS_ROUTE,
        Icon: Alarm,
      },
    ],
  },
];

export default sidebarContent;
