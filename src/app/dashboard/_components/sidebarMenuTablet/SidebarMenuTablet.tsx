import React from "react";
import { List, ListItem, ListIcon, Flex } from "@chakra-ui/react";
import Link from "next/link";
import sidebarContent from "@/app/dashboard/_data/sidebarMenuContent";

const SidebarMenuTablet = () => {
  return (
    <List bg="brand.100">
      {sidebarContent.map((menuGroup) => (
        <Flex flexDirection="column" key={menuGroup.group}>
          {menuGroup.items.map((menuItem) => (
            <ListItem
              bg="brand.100"
              transition="all 0.3s ease-in"
              _hover={{ transform: "translateX(10px)" }}
              as={Link}
              href={menuItem.route}
              key={menuItem.title}
              py="4"
              fontSize="xs"
            >
              <ListIcon
                as={menuItem.Icon}
                color="brand.300"
                fontSize="30px"
                fontWeight="bold"
              />
            </ListItem>
          ))}
        </Flex>
      ))}
    </List>
  );
};

export default SidebarMenuTablet;
