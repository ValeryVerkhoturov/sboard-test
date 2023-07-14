'use client'

import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import {Button, FormContainer, Input} from "@/components/posts/create";
import {createPost} from "@/utils/api/posts";
import {useTokenStore} from "@/utils/store/token-store";
import {useRouter} from "next/navigation";

type FormData = {
    title: string;
    description: string;
};

const CreatePostForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const {token} = useTokenStore()
    const router = useRouter()

    useEffect(() => {
        if (!token) {
            router.push('/login')
        }
    }, [token])

    const onSubmit = async (data: FormData) => {
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

            <Button type="submit">Создать</Button>
        </FormContainer>
    );
};

export default CreatePostForm;
