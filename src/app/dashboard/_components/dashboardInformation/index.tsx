'use client'
import React from "react";
import TopLocations from "../topLocations";
import TopRefferals from "../topReferrals";
import { Flex, Box } from "@chakra-ui/react";
import { useDashboardData } from "@/hooks";
import PageViews from "../pageViews";
import PageViewChart from "../pageViewaChart";

const DashboardInformation = async () => {
  const { data } = useDashboardData();

  return (
    <>
      <PageViews>
        <PageViewChart data={data?.graph_data?.views!} />
      </PageViews>
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
