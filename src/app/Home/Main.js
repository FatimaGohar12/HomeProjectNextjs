import React from "react";
import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import "./home.css";

const Main = () => {
  const imageWidth = useBreakpointValue({ base: "100%", md: "460px" });
  const contentWidth = useBreakpointValue({ base: "100%", md: "379px" });

  return (
    <Flex
      display="flex"
      padding={{ base: "20px 0px", md: "50px 0px" }}
      justifyContent="center"
      alignItems="center"
      flexDirection={{ base: "column", md: "row" }}
      gap={{ base: "20px", md: "60px" }}
      alignSelf="stretch"
    >
      {/* Image Box */}
      <Box
        bg={`url('./shutstock.png') 50% / cover no-repeat lightgray`}
        width={imageWidth}
        height="348px"
      />

      {/* Content-flex */}
      <Flex flexDirection="column" width={contentWidth}>
        <Text
          color="var(--dark, #0F0F0F)"
          fontFamily="Aldrich, sans-serif"
          fontSize={{ base: "32px", md: "42px" }}
          fontWeight="400"
          lineHeight="42px"
          textTransform="uppercase"
          textAlign={{ base: "center", md: "left" }}
        >
          Introducing House Smarts,
        </Text>
        <Text
          color="var(--Gray-1, #333)"
          fontFamily="Aldrich, sans-serif"
          fontSize={{ base: "14px", md: "16px" }}
          fontWeight="400"
          lineHeight={{ base: "20px", md: "24px" }}
          textAlign={{ base: "center", md: "left" }}
        >
          Your one-stop solution for all things related to home technology. With
          our state-of-the-art technology and expert installation services,
          we'll transform your home into a smart, connected, and truly immersive
          entertainment experience.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Main;
