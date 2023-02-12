import { Flex } from '@chakra-ui/react';
import React from 'react';

type PageContentProps = {
    
};

const PageContent:React.FC<PageContentProps> = ({children}) => {
    console.log('here is children', children)
    return(
        <Flex>
            <Flex>
                {/* Lhs */}
                <Flex>{children&& children[0 as keyof typeof children]}</Flex>

                {/* RHs */}
                <Flex>{children && children[1 as keyof typeof children]}</Flex>
            </Flex>
        </Flex>
    )
}
export default PageContent;