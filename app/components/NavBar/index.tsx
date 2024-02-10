import { Button, Flex } from "@chakra-ui/react";
import Image from "next/image";

export function NavBar() {
  return (
    <Flex
      justifyContent="center"
      position={"fixed"}
      top={5}
      left={0}
      right={0}
      zIndex={"2"}
    >
      <Flex
        w={"90%"}
        height={"38px"}
        justifyContent={["center","space-between"]}
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
        <Button display={["none","block"]}>Agendar horário</Button>
      </Flex>
    </Flex>
  );
}
