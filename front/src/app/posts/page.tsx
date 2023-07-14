'use client'

import React, {useEffect, useState} from "react";
import {PostContainer, PostItem} from "@/components/posts";
import {useTokenStore} from "@/utils/store/token-store";
import {useRouter} from "next/navigation";
import {deletePost, getPosts, GetPostsResponse} from "@/utils/api/posts";

type Posts = GetPostsResponse['data']

const Posts: React.FC = () => {
    const {token}= useTokenStore();
    const router = useRouter();
    const [posts, setPosts] = useState<Posts | undefined>(undefined);
    const [error, setError] = useState<string>()
    useEffect(() => {
        const fetchPosts = async () => {
            setPosts((await getPosts(token!)).data);
            console.log(await getPosts(token!));
        }

        fetchPosts()
    }, [])

    useEffect(() => {
        if (!token) {
            router.push('/login')
        }
    }, [token])

    const delPost = (postId: string, token: string) => {
        return async () => {
            await deletePost(postId, token)
            // @ts-ignore
            setPosts(posts?.filter((post) => post.id !== postId))
        }
    }

    return (
        <div>
            <h1>Посты</h1>
            <PostContainer>
                {token && posts?.map((post) => (
                    <PostItem key={post.id}>
                        <h2>{post.translations[0]?.title}</h2>
                        <p>{post.translations[0]?.description}</p>
                        <button onClick={delPost(post.id, token)}>Удалить</button>
                    </PostItem>
                ))}
            </PostContainer>
        </div>
    );
};

export default Posts;