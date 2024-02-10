"use client";

import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import Image from "next/image";

export function Footer() {
  return (
    <Flex
      w={"100%"}
      h={"412px"}
      background={"#06121E"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        w={"511px"}
        h={"326px"}
        direction={"column"}
        align={"center"}
        marginTop={30}
      >
        <Flex justifyContent={"space-between"} w={"120px"}>
          <Image
            src="./assets/footer/instagram.svg"
            alt="logo-instagram"
            width={33}
            height={33}
          />
          <Image
            src="./assets/footer/facebook.svg"
            alt="logo-instagram"
            width={33}
            height={33}
          />
          <Image
            src="./assets/footer/twitter.svg"
            alt="logo-instagram"
            width={33}
            height={33}
          />
        </Flex>
        <Box marginTop={30}>
          <Image
            src="./assets/footer/logo-barber.svg"
            alt="logo-instagram"
            width={166}
            height={196}
          />
        </Box>
        <Text
          as="h3"
          color={"white"}
          textAlign={"center"}
          fontFamily={"inter"}
          fontWeight={700}
         
          marginTop={40}
        >
          Copyright© 2024 | Lucas-code - Todos os direitos reservados.
        </Text>
      </Flex>
    </Flex>
  );
}
