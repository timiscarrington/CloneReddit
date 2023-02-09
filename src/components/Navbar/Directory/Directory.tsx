import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex, Icon, Menu,
  MenuButton, MenuList, Text
} from "@chakra-ui/react";
import {TiHome} from 'react-icons/ti'
import React from "react";



const Directory: React.FC = () => {
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius={4}
        _hover={{ outline: "1px", outlineColor: "gray.200" }}
        mr={2}
        ml={{base: 0, md: 2}}
      >
         <Flex align="center" justify='space-between'>
            <Flex align="center">
              <Icon fontSize={24} mr={{ base: 1, md: 2}}as={TiHome} />
              <Flex display={{ base: "none", lg: "flex"}}>
              <Text fontWeight={600} fontSize="10pt">Home</Text>
              </Flex>
          </Flex>
          <ChevronDownIcon />
          </Flex>
      </MenuButton>
      <MenuList>
        {/* <Communities /> */}
        Communities
      </MenuList>
    </Menu>
  );
};
export default Directory;
