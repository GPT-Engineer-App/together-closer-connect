import React from "react";
import { Box, Icon } from "@chakra-ui/react";
import { FaHome, FaInfo, FaAddressBook } from "react-icons/fa";

function Footer() {
  return (
    <Box as="footer" position="fixed" bottom="0" width="100%" p="4" bg="gray.200">
      <Icon as={FaHome} w={6} h={6} />
      <Icon as={FaInfo} w={6} h={6} />
      <Icon as={FaAddressBook} w={6} h={6} />
    </Box>
  );
}

export default Footer;
