import React, { FC, useRef } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CoreChartOptions,
  ElementChartOptions,
  PluginChartOptions,
  DatasetChartOptions,
  ScaleChartOptions,
  DoughnutControllerChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { _DeepPartialObject } from "chart.js/dist/types/utils";
import {
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import { ChartJSOrUndefined } from "react-chartjs-2/dist/types";
import { getFlagEmoji } from "@/utills/getFlagEmoji";
import { getHashedColor } from "@/utills/getHashColor";
import NextLink from "next/link";
import { DASHBOARD_ROUTE } from "@/constants/routes";
import { Location } from "../../_interface";

ChartJS.register(ArcElement, Tooltip, Legend);


interface Props {
  locations: Location[];
}
const TopLocations: FC<Props> = ({ locations=[] }) => {
  const chartRef = useRef<ChartJSOrUndefined<
    "doughnut",
    number[],
    string
  > | null>(null);

  const labels = locations.map((location) => location.country);
  const dataSet = locations.map((location) => location.count);
  const backgroundColors = locations.map((location) =>
    getHashedColor(location.country)
  );

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Score",
        data: dataSet,
        backgroundColor: backgroundColors,
        borderColor: backgroundColors,
        borderWidth: 1,
      },
    ],
  };

  const options: _DeepPartialObject<
    CoreChartOptions<"doughnut"> &
      ElementChartOptions<"doughnut"> &
      PluginChartOptions<"doughnut"> &
      DatasetChartOptions<"doughnut"> &
      ScaleChartOptions<any> &
      DoughnutControllerChartOptions
  > = {
    cutout: "60%",
    responsive: true,

    plugins: {
      legend: {
        display: false,
        position: "left",
        align: "center",
        textDirection: "ltr",
        labels: {
          usePointStyle: true,
        },

        // generateLabels: handleGenerateLabel,
      },
    },
  };
  return (
    <Card height="full" alignSelf="stretch">
      <CardBody>
        <Flex justifyContent="space-between"  mb="2.63rem">
          <Text
            fontSize="1.125rem"
            fontFamily="fonts.heading"
            fontWeight="700"
            lineHeight="1.5rem"
            color="text.heading"
            letterSpacing="-0.01688rem;"
          >
            Top Locations
          </Text>
          <Link as={NextLink} href={DASHBOARD_ROUTE}>
            <Text
              fontSize="0.875rem"
              fontFamily="fonts.heading"
              fontWeight="400"
              lineHeight="1.375rem"
              color="brand.primary"
              letterSpacing="-0.01688rem;"
            >
              View full reports
            </Text>
          </Link>
        </Flex>
        <Flex
          w="100%"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{base:"column", md:"row"}}
        >
          <VStack alignItems="flex-start" spacing="1.19rem" mb={{base:"4", md:"0"}}>
            {locations.map((location, index) => (
              <HStack key={location.country} spacing={5}>
                <Text>{getFlagEmoji(location.country)}</Text>
                <Text
                  fontSize="1rem"
                  fontFamily="fonts.heading"
                  fontWeight="400"
                  lineHeight="1.5rem"
                  color="text.heading"
                >
                  {location.country}
                </Text>

                <Text
                  fontSize="1rem"
                  fontFamily="fonts.heading"
                  fontWeight="600"
                  lineHeight="1.5rem"
                  color="text.heading"
                >
                  {location.percent}%
                </Text>
                <Box
                  width="0.75rem"
                  height="0.75rem"
                  rounded="full"
                  bg={
                    chartRef.current?.data?.datasets[0]!.backgroundColor[
                      index
                    ] || "red"
                  }
                />
              </HStack>
            ))}
          </VStack>
          <Box w="40%" >
            <Doughnut ref={chartRef} data={data} options={options} />
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default TopLocations;
