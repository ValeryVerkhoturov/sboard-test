'use client'

import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import {Button, FormContainer, Input} from "@/components/posts/create";
import {createPost, deletePost} from "@/utils/api/posts";
import {useTokenStore} from "@/utils/store/token-store";
import {useRouter} from "next/navigation";

type FormData = {
    title: string;
    description: string;
};

const UpdatePostForm: React.FC<{ params: { postId: string } }> = ({ params }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const {token} = useTokenStore()
    const router = useRouter()

    useEffect(() => {
        if (!token) {
            router.push('/login')
        }
    }, [token, router])

    const onSubmit = async (data: FormData) => {
        await deletePost(params.postId, token!)
        await createPost({title: data.title, description: data.description}, token!)
        router.push('/posts')
    };

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="text"
                id="title"
                placeholder="Заголовок"
                {...register('title', { required: true })}
            />
            {errors.title && <span>Заголовок обязателен</span>}

            <Input
                id="description"
                placeholder="Описание"
                {...register('description', { required: true })}
            />
            {errors.description && <span>Описнаие обязательно</span>}

            <Button type="submit">Обновить</Button>
        </FormContainer>
    );
};

export default UpdatePostForm;
