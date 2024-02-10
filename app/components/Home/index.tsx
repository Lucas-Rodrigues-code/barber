import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <Box
      w={"100%"}
      h={"815px"}
      bgSize="cover"
      backgroundImage={[
        "url('/assets/home/barberMobile.png')",
        "url('/assets/home/barber.png')",
      ]}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        className="logo"
        h={"100%"}
      >
        <Box position={"absolute"} top={[20, 10]}>
          <Image
            src={"/assets/footer/logo-barber.svg"}
            alt="logo"
            width={166}
            height={196}
            //style={{ zIndex: 1, position: "absolute", top: 10 }}
          />
        </Box>

        <Flex flexDirection={"column"} alignItems={"center"}>
          <Text
            as={"h1"}
            textAlign={"center"}
            fontSize={["34px", "48px"]}
            fontWeight={700}
            lineHeight={["51px", "72px"]}
            fontFamily={"inter"}
            color={"#fff"}
            mt={[60, 50]}
          >
            ESTILO É UM REFLEXO DA SUA
            <br /> ATITUDE E SUA PERSONALIDADE.
          </Text>
          <Text
            as={"h3"}
            textAlign={"center"}
            fontSize={["16px", "18px"]}
            fontWeight={500}
            lineHeight={["24px", "27px"]}
            fontFamily={"inter"}
            color={"#fff"}
            mt={2}
          >
            Horário de funcionamento: 09:00 ás 19:00
          </Text>
          <Link
            href="https://api.whatsapp.com/send?phone=5541996721134&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20site"
            className="no-underline"
            target="_blank"
          >
            <Button
              w={["193px", "292px"]}
              h={["48px", "66px"]}
              bg={"#D94140"}
              mt={10}
            >
              Agendar horário
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}
