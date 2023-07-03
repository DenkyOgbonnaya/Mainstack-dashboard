import React, { useCallback, useState } from "react";
import { List, ListItem, ListIcon, Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import sidebarContent from "@/app/dashboard/_data/sidebarMenuContent";
import { Dashboard } from "@/assets";

const SidebarMenu = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const handleSelect = (menuTitle: string) => {
    setActiveMenu(menuTitle);
  };
  const isActiveMenu = useCallback(
    (menuTitle: string) => {
      return menuTitle === activeMenu;
    },
    [activeMenu]
  );
  return (
    <List bg="transparent">
      {sidebarContent.map((menuGroup, index) => (
        <Flex flexDirection="column" key={menuGroup.group}>
          <ListItem
            pt="4"
            pb="1"
            fontSize="0.75rem"
            fontWeight="semibold"
            color="text.body"
            letterSpacing="2px"
            textTransform="uppercase"
            fontFamily="fonts.body"
            mb="1rem"
            mt="0.25rem"
            pl="3.38rem"
          >
            {index > 0 && menuGroup.group}
          </ListItem>
          {menuGroup.items.map((menuItem) => (
            <ListItem
              bg="transparent"
              transition="all 0.3s ease-in"
              color={`${isActiveMenu(menuItem.title) ? "#FF5403" : "text.body"}`}
              // _hover={{ transform: "translateX(10px)" }}
              as={Link}
              href={menuItem.route}
              key={menuItem.title}
              py="2"
              fontSize="1rem"
              pl="3.38rem"
              fontFamily="fonts.body"
              fontWeight="500"
              lineHeight="1.5rem"
              mb="1.38rem"
              onClick={() => handleSelect(menuItem.title)}
              borderLeft={`2px solid ${
                isActiveMenu(menuItem.title) ? "#FF5403" : "transparent"
              }`}
            >
              <ListIcon
                as={menuItem.Icon}
                mr="4"
                color={`${isActiveMenu(menuItem.title) ? "#FF5403" : "text.body"}`}
                fontSize="1.25rem"
                fontWeight="bold"
              
              />
              {menuItem.title}
            </ListItem>
          ))}
        </Flex>
      ))}
    </List>
  );
};

export default SidebarMenu;
