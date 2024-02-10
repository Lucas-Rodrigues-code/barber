import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function About() {
  return (
    <Flex
      bg={"#06121E"}
      w={"100%"}
      h={"506px"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        w={"570px"}
        h={"529px"}
        top={-20}
        left={20}
        display={{ base: "none", sm: "none", md: "none", lg: "block" }}
        mr={ { base: 0, sm: 0, md: 150, lg: 150 }}
      >
        <div style={{ position: "relative" }}>
          <Image
            src={"/assets/about/image1.png"}
            alt="banner"
            width={278}
            height={310}
            style={{ position: "absolute", top: 0, left: 250, zIndex: "2" }}
          />
          <Image
            src={"/assets/about/image2.png"}
            alt="banner2"
            width={229}
            height={255}
            style={{ position: "absolute", top: 250, left: 350, zIndex: "1" }}
          />
          <Image
            src={"/assets/about/image3.png"}
            alt="banner3"
            width={310}
            height={192}
            style={{ position: "absolute", top: 150, left: 30, zIndex: "1" }}
          />
        </div>
      </Box>
    
      <Box
        display={["flex", ""]}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        // bg={"red"}
      >
        <Text
          as={"h1"}
          fontSize={"44px"}
          fontWeight={700}
          lineHeight={"66px"}
          fontFamily={"inter"}
          color={"#fff"}
        >
          Sobre
        </Text>
        <Text
          as={"p"}
          w={["auto", "500px"]}
          fontSize={"18px"}
          fontWeight={500}
          lineHeight={"27px"}
          fontFamily={"inter"}
          color={"#fff"}
          px={5}
        >
          Lorem ipsum dolor sit amet consectetur. Ornare eget pellentesque proin
          risus. Orci proin morbi vestibulum convallis leo vestibulum mus. Non
          duis augue eros mattis a quis sem sodales.
        </Text>
        <Text
          as={"h3"}
          fontSize={"18px"}
          fontWeight={500}
          lineHeight={"27px"}
          fontFamily={"inter"}
          color={"#fff"}
          mt={5}
        >
          Horário de funcionamento: 09:00 ás 19:00
        </Text>
      </Box>
    </Flex>
  );
}
