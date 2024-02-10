import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Service() {
  return (
    <Flex
      bg={"#ff"}
      flexDirection={"column"}
      alignItems={"center"}
      w={"100%"}
      pb={20}
      mt={5}
    >
      <Box w={["auto", "800px"]}>
        <Text
          as={"h1"}
          fontSize={"44px"}
          fontWeight={500}
          lineHeight={"66px"}
          fontFamily={"inter"}
          color={"#06121E"}
          textAlign={"center"}
        >
          Serviços
        </Text>
        <Text
          as={"h3"}
          fontSize={"18px"}
          fontWeight={700}
          lineHeight={"27px"}
          fontFamily={"inter"}
          color={"#323232"}
          textAlign={"center"}
          px={5}
        >
          Lorem ipsum dolor sit amet consectetur. Ornare eget pellentesque proin
          risus. Orci proin morbi vestibulum convallis leo vestibulum mus. Non
          duis augue eros mattis a quis sem sodales.
        </Text>
      </Box>
      <Flex mt={5} flexDirection={["column", "row"]} w={"100%"}>
        <Box w={["340px", "354px"]} h={"389px"} mx={5} mt={[5, 0]}>
          <Image
            src={"/assets/service/cabelo.png"}
            alt="corte-cabelo"
            width={354}
            height={313}
          />
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"100%"}
            h={"76px"}
            boxShadow="10px 10px 14px 0px rgba(0,0,0,0.75)"
            borderRadius={10}
          >
            <Text
              as={"h2"}
              fontFamily={"inter"}
              fontSize={"18px"}
              fontWeight={700}
              lineHeight={"27px"}
              color={"black"}
              ml={5}
            >
              Corte de cabelo
            </Text>
            <Button color={"black"} bg={"#d94140"} mr={5}>
              R$ 45,00
            </Button>
          </Box>
        </Box>

        <Box w={["340px", "354px"]} h={"389px"} mx={5} mt={[5, 0]}>
          <Image
            src={"/assets/service/barba.png"}
            alt="corte-cabelo"
            width={354}
            height={313}
          />
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"100%"}
            h={"76px"}
            boxShadow="10px 10px 14px 0px rgba(0,0,0,0.75)"
            borderRadius={10}
          >
            <Text
              as={"h2"}
              fontFamily={"inter"}
              fontSize={"18px"}
              fontWeight={700}
              lineHeight={"27px"}
              color={"black"}
              ml={5}
            >
              Barba completa
            </Text>
            <Button color={"black"} bg={"#d94140"} mr={5}>
              R$ 35,00
            </Button>
          </Box>
        </Box>

        <Box w={["340px", "354px"]} h={"389px"} mx={5} mt={[5, 0]}>
          <Image
            src={"/assets/service/cabelo_barba.png"}
            alt="corte-cabelo"
            width={354}
            height={313}
          />
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"100%"}
            h={"76px"}
            boxShadow="10px 10px 14px 0px rgba(0,0,0,0.75)"
            borderRadius={10}
          >
            <Text
              as={"h2"}
              fontFamily={"inter"}
              fontSize={"18px"}
              fontWeight={700}
              lineHeight={"27px"}
              color={"black"}
              ml={5}
            >
              Cabelo e barba
            </Text>
            <Button color={"black"} bg={"#d94140"} mr={5}>
              R$ 70,00
            </Button>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
