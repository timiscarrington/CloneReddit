import { Flex, Icon, MenuItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import CreateCommunityModal from '../../Modal/Create Communit/CreateCommunityModal';
import { GrAdd } from 'react-icons/gr'

type CommunitiesProps = {
    
};

const Communities:React.FC<CommunitiesProps> = () => {
    const [open, setOpen] = useState(false)
    
    return(
        <>
        <CreateCommunityModal open={open} handleClose={()=> setOpen(false)} />
        <MenuItem width='100%' fontSize='10pt' _hover={{ bg: "gray.100"}} onClick={()=> setOpen(true)}>
        <Flex>
            <Icon  fontSize='20' mr={2}  as={GrAdd}/>
        </Flex>
        </MenuItem>
    
        </>
    )
}
export default Communities;