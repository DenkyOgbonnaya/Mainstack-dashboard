import { Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface IProps {
  pageTitle: string;
}
const MenuBar: FC<IProps> = ({ pageTitle }) => {
  return (
    <>
      <Flex
        justifyContent="space-between"
        py="4"
        display={{ base: "none", md: "flex" }}
      >
        <Text
          fontWeight="bold"
          fontSize="1.25rem"
          fontFamily="fonts.heading"
          color="text.heading"
          lineHeight="1.5rem"
          letterSpacing='-0.01875rem'
        >
          {pageTitle}
        </Text>
      </Flex>
    </>
  );
};

export default MenuBar;
