"use client";
import { MenuBar } from "@/components";
import { Flex, Text, Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import { DASHBOARD_ROUTE } from "@/constants/routes";
import { getGreetings } from "@/utills/getGreetings";
import DashboardInformation from "./_components/dashboardInformation";
import { Suspense } from "react";
import DashboardLoader from "./_components/dashboardLoader";

export default function Dashboard() {
  const greetings = getGreetings();

  return (
    <Box as="main" position="relative">
      <Box
        position="sticky"
        p="4"
        top={0}
        left={0}
        h="4.23rem"
        zIndex={50}
        bg="background"
        w="full"
      >
        <MenuBar pageTitle="Dashboard" />
      </Box>

      <Flex
        justify="space-between"
        mt={{ base: "0.25rem", md: "1.5rem" }}
        alignItems="center"
      >
        <Text
          as="h3"
          fontFamily="fonts.heading"
          fontWeight="700"
          fontSize={{ base: "0.85rem", md: "1.5rem" }}
          lineHeight="2rem"
          letterSpacing="0.0225rem"
          color="text.heading"
          mb="0.62rem"
        >
          Good {greetings}, Blessing ⛅️
        </Text>
        <Link
          as={NextLink}
          fontSize="0.875rem"
          fontFamily="fonts.body"
          fontWeight="400"
          lineHeight="1.375rem"
          color="brand.primary"
          href={DASHBOARD_ROUTE}
        >
          View analytics
        </Link>
      </Flex>
      <Text
        fontSize="0.875rem"
        fontFamily="fonts.body"
        fontWeight="400"
        lineHeight="1.375rem"
        color="text.subheading"
        mb="1.44rem"
      >
        Check out your dashboard summary.
      </Text>
      <Suspense fallback={<DashboardLoader />}>
        <DashboardInformation />
      </Suspense>
    </Box>
  );
}
