"use client";
import { Flex, Skeleton } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Flex flexDirection="column" gap={5}>
      <Skeleton height="30px" width="60%" />
      <Skeleton height="300px" w="100%" />
      <Flex
        justifyContent="space-between"
        flexDirection={{ base: "column", lg: "row" }}
        gap={5}
        mt="1.5rem"
      >
        <Skeleton w={{ base: "100%", lg: "50%" }} height="100px" />
        <Skeleton w={{ base: "100%", lg: "50%" }} height="100px" />
      </Flex>
    </Flex>
  );
}
