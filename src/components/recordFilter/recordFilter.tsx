import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Input,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";

interface IProps {
  onClick: (label: string | number, value: string | number) => void;
}
const CUSTOM_FILTER = "Custom";
const RecordFilter: FC<IProps> = ({ onClick }) => {
  const [current, setCurrent] = useState<string | number>("All Time");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [isCustom, setIsCustom] = useState(false);

  const filterData = [
    {
      lable: "1 Day",
      value: "1 Day",
    },
    {
      lable: "3 Days",
      value: "3 Days",
    },
    {
      lable: "7 Days",
      value: "7 Days",
    },
    {
      lable: "All Time",
      value: "All Time",
    },
  ];

  const handleSelect = (value: string | number) => {
    setCurrent(value);

    if (value == CUSTOM_FILTER) {
      setIsCustom(!isCustom);
    } else {
      onClick(value, value);
    }
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
    setIsCustom(false);
    const customValue = `${startDate} ${endDate}`;
    onClick(CUSTOM_FILTER, customValue);
  };
  return (
    <Box>
      <Flex gap="0.625rem">
        {filterData.map((data, index) => (
          <Box
            as="button"
            border={`1px solid ${
              current === data.value ? "#FF5403" : "#EFF1F6"
            }`}
            borderRadius="6.25rem"
            borderRightWidth="0px"
            fontSize={{ base: "0.15rem", md: "0.875rem" }}
            py="0.75rem"
            px={{ base: "0.25rem", md: "1rem" }}
            fontFamily="fonts.heading"
            key={index.toString()}
            onClick={() => handleSelect(data.value)}
            bg={current === data.value ? "brand.secondary" : "background"}
            color={current === data.value ? "brand.primary" : "text.body"}
          >
            <Text
              fontSize="0.875rem"
              fontFamily="fonts.heading"
              fontWeight="700"
              lineHeight="1rem"
              color="text.subheading"
            >
              {data.lable}
            </Text>
          </Box>
        ))}
        <Menu isOpen={isCustom}>
          <MenuButton
            border={`1px solid ${
              current === CUSTOM_FILTER ? "#FF5403" : "#EFF1F6"
            }`}
            borderRadius="6.25rem"
            borderRightWidth="0px"
            py="0.75rem"
            px={{ base: "0.15rem", md: "1rem" }}
            fontSize={{ base: "0.65rem", md: "0.875rem" }}
            fontWeight="700"
            fontFamily="fonts.heading"
            onClick={() => handleSelect(CUSTOM_FILTER)}
            bg={current === CUSTOM_FILTER ? "brand.secondary" : "background"}
            color={current === CUSTOM_FILTER ? "brand.primary" : "text.body"}
          >
            Custom Date
          </MenuButton>
          <MenuList>
            <MenuItem bg="transparent">
              <Box as="form" onSubmit={handleCustomSubmit}>
                <HStack>
                  <Input
                    name="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    type="date"
                    placeholder="Start date"
                    size="sm"
                    // errorMessage=""
                    isRequired
                  />
                  <Input
                    name="endDate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    type="date"
                    placeholder="End date"
                    size="sm"
                    // errorMessage=""
                    isRequired
                  />
                </HStack>
                <HStack mt="8" justifyContent="center">
                  <Box
                  onClick={handleCustomSubmit}
                    // as="button"
                    // // variant="outline"
                    // type="submit"
                    fontSize="sm"
                    bg="brand.secondary"
                    p="1"
                    borderRadius={3}
                  >
                    Ok
                  </Box>
                  <Box
                    // as="button"
                    // variant="unstyled"
                    fontSize="xs"
                    onClick={() => setIsCustom(false)}
                  >
                    Cancel
                  </Box>
                </HStack>
              </Box>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default RecordFilter;
