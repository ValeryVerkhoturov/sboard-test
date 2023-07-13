"use client"

import React from 'react';
import {useForm} from "react-hook-form";
import {Button, Form, FormContainer, Input} from "@/components/form";

type LoginFormData = {
    email: string
    password: string
}

const LoginForm: React.FC = () => {
    const { register, handleSubmit } = useForm<LoginFormData>();

    const onSubmit = (data: LoginFormData) => {
        console.log(data);
    };

    return (
        <FormContainer>
            <h2>Вход</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="email"
                    placeholder="Email"
                    {...register('email')}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    {...register('password')}
                />
                <Button type="submit">Войти</Button>
            </Form>
        </FormContainer>
    );
};

export default LoginForm;