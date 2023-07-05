import React, { FC, useState } from "react";
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

interface Props {
  children: React.ReactNode;
}
const PageViews: FC<Props> = ({ children }) => {
  const [activeFilter, setActiveFilter] = useState<string | number>("All Time");

  const handleFilter = (
    filterLabel: string | number,
    filterValue: string | number
  ) => {
    setActiveFilter(filterLabel);
  };
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
                  {activeFilter}
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
            <Box w="full">{children}</Box>
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

export default PageViews;
