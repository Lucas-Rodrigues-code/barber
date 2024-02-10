import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Location() {
  return (
    <Flex
      bg={"#ff"}
      flexDirection={"column"}
      alignItems={"center"}
      w={"100%"}
      mt={5}
    >
      <Text
        fontFamily={"inter"}
        fontSize={"34px"}
        lineHeight={"51px"}
        fontWeight={700}
        color={"#06121e"}
      >
        Venha conhecer
      </Text>
      <iframe
        style={{ width: "100%", height: "412px", marginTop: "30px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14397.550346382934!2d-49.28037175657466!3d-25.558768867520975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfbe15837e5e5%3A0xbfae13e123fd87b7!2sConstrumad%20Materiais%20de%20Constru%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1707590929240!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
    </Flex>
  );
}
