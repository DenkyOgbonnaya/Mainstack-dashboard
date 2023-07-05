import React, { useState } from "react";
import TopLocations from "../topLocations";
import TopRefferals from "../topReferrals";
import PageViewChart from "../pageViewaChart";
import { Info } from "@/assets";
import { RecordFilter } from "@/components";
import {
  Flex,
  Text,
  Card,
  CardBody,
  Box,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { useDashboardData } from "@/hooks";

const DashboardInformation = async () => {
  const { data } = useDashboardData();

  const handleFilter = (filterOption: string | number) => {};
  return (
    <>
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
              <PageViewChart data={data?.graph_data?.views!}  />
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
          <TopLocations locations={data?.top_locations!} />
        </Box>
        <Box w={{ base: "100%", lg: "50%" }}>
          <TopRefferals sources={data?.top_sources!} />
        </Box>
      </Flex>
    </>
  );
};

export default DashboardInformation;
