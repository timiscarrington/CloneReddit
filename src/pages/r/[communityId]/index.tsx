import {firestore} from '../../../firebase/clientApp';
import { doc, getDoc } from 'firebase/firestore';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { Community } from '../../../atoms/communitiesAtom';
import safeJsonStringify from 'safe-json-stringify';
import NotFound from '../../../components/Community/NotFound'
import Header from '@/src/components/Community/Header';
import PageContent from '../../../components/Layout/PageContent';
import CreatePostLink from '@/src/components/Community/CreatePostLink';

type CommunityPageProps = {
    communityData: Community;
};

const index:React.FC<CommunityPageProps> = ({ communityData }) => {
    console.log("here is data", communityData)
    
    if(!communityData){
        return <NotFound/>
        
    }

    return(
        <><Header communityData={communityData} />
        <PageContent>
            <>
            <CreatePostLink />
            </>
            <>
            <div>RH</div>
            </>
        </PageContent></>
    )
}
export async function getServerSideProps(context: GetServerSidePropsContext){
    //get community data and pass it to client

try {
    const communityDocRef = doc(firestore, 'communities', context.query.communityId as string);
    const communityDoc = await getDoc(communityDocRef);

    return{
        props: {
            communityData: communityDoc.exists() ? JSON.parse(safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })
            )
            :"",
        }
    }

} catch (error) {
    // could add error page here
    console.log('getServerSideProps error', error)
}
}

export default index;