import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

function Menu() {
  return (
    <Box as="nav">
      <IconButton
        icon={<FaBars />}
        variant="outline"
        aria-label="Open menu"
      />
    </Box>
  );
}

export default Menu;