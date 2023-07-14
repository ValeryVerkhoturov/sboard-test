'use client'

import React, {useEffect} from "react";
import {PostContainer, PostItem} from "@/components/posts";
import {useTokenStore} from "@/utils/store/token-store";
import {useRouter} from "next/navigation";

const Posts: React.FC = () => {
    const {token}= useTokenStore()
    const router = useRouter()
    const posts = [
        { id: 1, title: 'Post 1', content: 'Post 1' },
        { id: 2, title: 'Post 2', content: 'Post 2' },
    ];

    useEffect(() => {
        if (!token) {
            router.push('/login')
        }
    }, [token])

    return (
        <div>
            <h1>Posts</h1>
            <PostContainer>
                {posts.map((post) => (
                    <PostItem key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </PostItem>
                ))}
            </PostContainer>
        </div>
    );
};

export default Posts;