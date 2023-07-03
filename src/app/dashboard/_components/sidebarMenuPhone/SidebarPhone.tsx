import {
  List,
  ListIcon,
  ListItem,
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Button,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import Link from "next/link";
import sidebarContent from "@/app/dashboard/_data/sidebarMenuContent";
import { Alarm, Dashboard, Logo } from "@/assets";

const SidebarMenuPhone = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const handleSelect = (menuTitle: string) => {
    setActiveMenu(menuTitle);
    onClose();
  };
  const isActiveMenu = useCallback(
    (menuTitle: string) => {
      return menuTitle === activeMenu;
    },
    [activeMenu]
  );

  const handleLogout = () => {
    onClose();
  };
  return (
    <>
      <Flex
        p="4"
        justifyContent="space-between"
        alignItems="center"
        bg="#FFDDCD"
        color="#ffffff"
      >
        <HStack>
          <Logo />
          <Text fontSize="sm" fontWeight="semibold">
            Dashboard
          </Text>
        </HStack>
        <Button colorScheme="transparent" onClick={onOpen}>
          <Icon as={Dashboard} color={"icon.default"}>
            <Dashboard />
          </Icon>
        </Button>
      </Flex>
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen} isFullHeight>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" bg="#FFDDCD">
            <Flex
              justifyContent="space-between"
              alignItems="center"
              bg="#FFDDCD"
              color="text.body"
            >
              <HStack>
                <Logo />
                <Text fontSize="sm">Dashboard</Text>
              </HStack>
              <Button colorScheme="transparent" onClick={onClose}>
                <Icon as={Dashboard} color={"icon.defualt"}>
                  <Dashboard />
                </Icon>
              </Button>
            </Flex>
          </DrawerHeader>
          <DrawerBody bg="brand.100">
            <List bg="transparent">
              {sidebarContent.map((menuGroup, index) => (
                <Flex flexDirection="column" key={menuGroup.group}>
                  {menuGroup.items.map((menuItem) => (
                    <ListItem
                      bg="transparent"
                      transition="all 0.3s ease-in"
                      color={`${isActiveMenu(menuItem.title) ? "#FF5403" : "text.body"}`}
                      _hover={{ transform: "translateX(10px)" }}
                      as={Link}
                      href={menuItem.route}
                      key={menuItem.title}
                      py="4"
                      px="4"
                      fontSize="1rem"
                      pl="1.38rem"
                      fontFamily="fonts.body"
                      fontWeight="500"
                      lineHeight="1.5rem"
                      mb="1.38rem"
                      onClick={() => handleSelect(menuItem.title)}
                      borderLeft={`2px solid ${
                        isActiveMenu(menuItem.title) ? "#FF5403" : "transparent"
                      }`}
                      // borderBottom="0.02px solid gray"
                    >
                      <ListIcon
                        as={menuItem.Icon}
                        mr="4"
                        color={`${
                          isActiveMenu(menuItem.title) ? "#FF5403" : "text.body"
                        }`}
                        fontSize="1.25rem"
                        fontWeight="bold"
                      />
                      {menuItem.title}
                    </ListItem>
                  ))}
                </Flex>
              ))}
              <ListItem
                bg="transparent"
                transition="all 0.3s ease-in"
                _hover={{ transform: "translateX(10px)" }}
                as={Link}
                href={"/"}
                key="logout"
                py="4"
                px="4"
                fontSize="sm"
                color="#ffffff"
                borderBottom="0.02px solid gray"
                mt="1"
                onClick={handleLogout}
              >
                <ListIcon
                  as={Alarm}
                  mr="8"
                  color="#ffffff"
                  fontSize="2xl"
                  fontWeight="bold"
                />
                Logout
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SidebarMenuPhone;
