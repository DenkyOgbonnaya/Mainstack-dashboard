"use client";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import SidebarMenu from "./_components/sidebarMenu/SidebarMenu";
import SidebarMenuTablet from "./_components/sidebarMenuTablet/SidebarMenuTablet";
import SidebarMenuPhone from "./_components/sidebarMenuPhone/SidebarPhone";
import { Logo } from "@/assets";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Flex
        h="100vh"
        overflow="auto"
        position="relative"
        background="background"
      >
        <Box
          as="aside"
          flexBasis={{ base: "40px", lg: "19rem" }}
          display={{ base: "none", md: "block" }}
          alignSelf={["stretch", "stretch", "stretch", "flex-start"]}
          height={["fit-content", "fit-content", "fit-content", "100vh"]}
          bg={{ base: "background", lg: "background" }}
          border="1px solid #EFF1F6"
        //   padding={{ base: "6", lg: "8" }}
          position="sticky"
          top="0"
          bottom="0"
          left="0"
          pt="2rem"
        
        >
          <HStack  pl="3.38rem" mb="1.5rem" display={{ base: "none", lg: "flex" }}>
            <Logo />
          </HStack>
         
          <Box  display={{ base: "none", lg: "block" }}>
            <SidebarMenu />
          </Box>
          <Box mt="10px" display={{ base: "none", md: "block", lg: "none" }}>
            <SidebarMenuTablet />
          </Box>
        </Box>
        <Box as="main" flex="1">
          <Box display={{ base: "block", sm: "block", md: "none", lg: "none" }}>
            <SidebarMenuPhone />
          </Box>
          <Box as="nav"></Box>
          <Box as="section" px={{ base: "2", md: "12" }} pb="12" maxW="100%">
            {children}
          </Box>
        </Box>
      </Flex>
    </>
  );
}
