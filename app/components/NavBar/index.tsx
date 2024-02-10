import { Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

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
        justifyContent={["center", "space-between"]}
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
        <Link
          href="https://api.whatsapp.com/send?phone=5541996721134&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20site"
          className="no-underline"
          target="_blank"
        >
          <Button display={["none", "block"]}>Agendar horário</Button>
        </Link>
      </Flex>
    </Flex>
  );
}
