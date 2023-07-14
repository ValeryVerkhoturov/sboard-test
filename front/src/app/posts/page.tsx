'use client'

import React, {useEffect, useState} from "react";
import {PostContainer, PostItem} from "@/components/posts";
import {useTokenStore} from "@/utils/store/token-store";
import {useRouter} from "next/navigation";
import {deletePost, getPosts, GetPostsResponse} from "@/utils/api/posts";
import Link from "next/link";
import {StyledLink} from "@/components/layout";

type Posts = GetPostsResponse['data']
const formatter = new Intl.DateTimeFormat('en-US');

const Posts: React.FC = () => {
    const {token}= useTokenStore();
    const router = useRouter();
    const [posts, setPosts] = useState<Posts | undefined>(undefined);
    useEffect(() => {
        const fetchPosts = async () => {
            setPosts((await getPosts(token!)).data);
        }

        fetchPosts()
    }, [token])

    useEffect(() => {
        if (!token) {
            router.push('/login')
        }
    }, [token, router])

    const edtPost = (postId: string) => {
        return () => {
            router.push(`/posts/${postId}/update`)
        }
    }

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
                <StyledLink href='/posts/create'>Создать пост</StyledLink>
                {token && posts?.map((post) => (
                    <PostItem key={post.id}>
                        <h2>{post.translations[0]?.title}</h2>
                        <p>{post.translations[0]?.description}</p>
                        <p>{formatter.format(new Date(post.createdAt))}</p>
                        <button onClick={edtPost(post.id)}>Редактировать</button>
                        <button onClick={delPost(post.id, token)}>Удалить</button>
                    </PostItem>
                ))}
            </PostContainer>
        </div>
    );
};

export default Posts;