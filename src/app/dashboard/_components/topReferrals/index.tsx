import React, { FC } from "react";
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
import { getHashedColor } from "@/utills/getHashColor";
import NextLink from "next/link";
import Image from "next/image";
import { getSocialLogo } from "@/utills/getSocialLogo";
import { DASHBOARD_ROUTE } from "@/constants/routes";
import { Source } from "../../_interface";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  sources: Source[];
}
const TopRefferals: FC<Props> = ({ sources = [] }) => {

  const labels = sources.map((source) => source.source);
  const dataSet = sources.map((source) => source.count);
  const backgroundColors = sources.map((source) =>
    getHashedColor(source.source)
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
      },
    },
  };
 
  return (
    <Card height="full" alignSelf="stretch">
      <CardBody>
        <Flex justifyContent="space-between" mb="2.63rem">
          <Text
            fontSize="1.125rem"
            fontFamily="fonts.heading"
            fontWeight="700"
            lineHeight="1.5rem"
            color="text.heading"
            letterSpacing="-0.01688rem;"
          >
            Top Referral source
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
          flexDirection={{ base: "column", md: "row" }}
        >
          <VStack
            alignItems="flex-start"
            spacing="1.19rem"
            mb={{ base: "4", md: "0" }}
          >
            {sources.map((source, index) => (
              <HStack key={source.source} spacing={5}>
                <Image
                  src={getSocialLogo(source.source)}
                  width={20}
                  height={20}
                  alt={source.source}
                />

                <Text
                  fontSize="1rem"
                  fontFamily="fonts.heading"
                  fontWeight="400"
                  lineHeight="1.5rem"
                  color="text.heading"
                >
                  {source.source}
                </Text>

                <Text
                  fontSize="1rem"
                  fontFamily="fonts.heading"
                  fontWeight="600"
                  lineHeight="1.5rem"
                  color="text.heading"
                >
                  {source.percent}%
                </Text>
                <Box
                  width="0.75rem"
                  height="0.75rem"
                  rounded="full"
                  bg={backgroundColors[index]}
                />
              </HStack>
            ))}
          </VStack>
          <Box w="40%">
            <Doughnut data={data} options={options} />
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default TopRefferals;
