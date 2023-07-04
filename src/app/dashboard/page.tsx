"use client";
import { Info } from "@/assets";
import { MenuBar, PageViewChart, RecordFilter } from "@/components";
import {
  Flex,
  Text,
  Card,
  CardBody,
  Box,
  VStack,
  Icon,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { useState } from "react";
import TopLocations from "./_components/topLocations";
import TopRefferals from "./_components/topReferrals";
import { DASHBOARD_ROUTE } from "@/constants/routes";
import { getGreetings } from "@/utills/getGreetings";

export default function Dashboard() {
  const [pageViews, setPageViews] = useState<number[]>([
    1, 1.2, 2.7, 2.5, 1.8, 2.1, 3.1, 2.9,
  ]);
  const greetings = getGreetings()
  const labels = [
    "00-03:00",
    "03:00-06:00",
    "09:00-12:00",
    "12:00-15:00",
    "15:00-18:00",
    "18:00-21:00",
    "21:00-24:00",
  ];

  const locations = [
    {
      country: "Nigeria",
      count: 68,
      percent: 34,
    },
    {
      country: "Germany",
      count: 37,
      percent: 19,
    },
    {
      country: "Ghana",
      count: 50,
      percent: 25,
    },
    {
      country: "Finland",
      count: 40,
      percent: 20,
    },
    {
      country: "United Kingdom",
      count: 4,
      percent: 2,
    },
  ];

  const sources = [
    {
      source: "google",
      count: 50,
      percent: 25,
    },
    {
      source: "instagram",
      count: 68,
      percent: 34,
    },
    {
      source: "facebook",
      count: 40,
      percent: 20,
    },
    {
      source: "linkedin",
      count: 41,
      percent: 21,
    },
  ];
  const handleFilter = (filterOption: string | number) => {};
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

      <RecordFilter onClick={handleFilter} />

      <Card mt="8">
        <CardBody
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Box w={{ base: "100%", md: "100%" }}>
            <Flex
              width="full"
              flexDirection={{ base: "row", md: "row" }}
              justifyContent="space-between"
              mb="2.63rem"
            >
              <VStack alignItems="flex-start">
                <Text
                  fontSize="1.125rem"
                  fontFamily="fonts.heading"
                  fontWeight="700"
                  lineHeight="1.5rem"
                  letterSpacing="-0.01688rem;"
                  color="text.heading"
                  mb="0.5rem"
                >
                  Page Views
                </Text>
                <Text
                  fontSize="0.875rem"
                  fontFamily="fonts.body"
                  fontWeight="400"
                  lineHeight="1.25rem"
                  color="text.subheading"
                  mb="1.5rem"
                >
                  All Time
                </Text>
                <Text
                  fontSize="3rem"
                  fontFamily="fonts.heading"
                  fontWeight="bold"
                  lineHeight="1.25rem"
                  color="text.heading"
                  letterSpacing="-0.045rem"
                >
                  500
                </Text>
              </VStack>

              <Icon as={Info} />
            </Flex>
            <Box w="full">
              <PageViewChart data={pageViews} labels={labels} />
            </Box>
          </Box>
        </CardBody>
      </Card>
      <Flex
        justifyContent="space-between"
        flexDirection={{ base: "column", lg: "row" }}
        gap={5}
        mt="1.5rem"
      >
        <Box w={{ base: "100%", lg: "50%" }}>
          <TopLocations locations={locations} />
        </Box>
        <Box w={{ base: "100%", lg: "50%" }}>
          <TopRefferals sources={sources} />
        </Box>
      </Flex>
    </Box>
  );
}
