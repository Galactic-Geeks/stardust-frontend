import { Avatar, Box, Text, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, useDisclosure } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { default as Logo } from "../assets/icons/Stardust.svg";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";

const Navbar = () => {

  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <Box py="4" mb="2" borderBottom={"1px solid white"}>
      <Container maxW={"container.xl"}>
        <Flex justifyContent={"space-between"}>
          <Link to="/">
            <Flex display={{ base: "flex", md: "flex" }} alignItems={"center"} gap="4">
              {/* <IconButton icon={Logo}></IconButton> */}
              <img src={Logo} alt="logo" width={"30px"} height={"30px"} />

              <Text fontSize={"2xl"} fontWeight={"bold"} color={"white"} letterSpacing={"widest"} fontFamily={"mono"}>
                Stardust
              </Text>
            </Flex>
          </Link>

          {/* DESKTOP */}
          <Flex gap="4" alignItems={"center"} display={{ base: "none", md: "flex" }}>
            <Link to="/">Home</Link>
            <Link to="/">Explore</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Contact</Link>
          </Flex>

          {/* Mobile */}
          <Flex display={{ base: "flex", md: "none" }} alignItems={"center"} gap="4">
            <Link to="/search">
              <SearchIcon fontSize={"xl"} />
            </Link>
            <IconButton onClick={onOpen} icon={<HamburgerIcon />} />
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent bg={"black"}>
                <DrawerCloseButton />
                <DrawerHeader>
                  <Avatar size={"sm"} bg="gray.800" as="button" />
                </DrawerHeader>

                <DrawerBody>
                  <Flex flexDirection={"column"} gap={"4"} onClick={onClose}>
                    <Link to="/">Home</Link>
                    <Link to="/">Explore</Link>
                    <Link to="/">About Us</Link>
                    <Link to="/">Contact</Link>
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
