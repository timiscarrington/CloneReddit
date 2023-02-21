import { Community } from "../../atoms/communitiesAtom";
import { auth, firestore } from "@/src/firebase/clientApp";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import usePosts from "@/src/hooks/usePosts";
import { Post } from "@/src/atoms/postsAtom";
import PostItem from "./PostForm/PostItem";
import { useAuthState } from "react-firebase-hooks/auth";
import { Stack } from "@chakra-ui/react";
import PostLoader from "./PostLoader";

type PostsProps = {
  communityData: Community;
};

const Posts: React.FC<PostsProps> = ({ communityData }) => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const {
    postStateValue,
    setPostStateValue,
    onVote,
    onDeletePost,
    onSelectPost,
  } = usePosts();

  const getPosts = async () => {
    try {
        setLoading(true);
      const postQuery = query(
        collection(firestore, "posts"),
        where("communityId", "==", communityData.id),
        orderBy("createdAt", "desc")
      );
      const postDocs = await getDocs(postQuery);
      const posts = postDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPostStateValue((prev) => ({
        ...prev,
        posts: posts as Post[],
      }));

      console.log("posts", posts);
    } catch (error: any) {
      console.log("getPosts error", error.message);
    }
    setLoading(false)
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
    {loading ? (
        <PostLoader />
    ) : (
      <Stack>
      {postStateValue.posts.map((item) => (
          <PostItem
          key={item.id}
          post={item}
          userIsCreator={user?.uid === item.creatorId}
          userVoteValue={undefined}
          onVote={onVote}
          onSelectPost={onSelectPost}
          onDeletePost={onDeletePost}
          />
          ))}
    </Stack>
    )}
          </>

  );
};
export default Posts;
