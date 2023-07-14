"use client"

import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {PrimaryButton, ErrorLabel, Form, FormContainer, Input} from "@/components/form";
import {login, LoginResponse} from "@/utils/api";
import {useTokenStore} from "@/utils/store/token-store";
import {useUserStore} from "@/utils/store/user-store";

type LoginFormData = {
    email: string
    password: string
}

const LoginForm: React.FC = () => {
    const { register, handleSubmit } = useForm<LoginFormData>();
    const [loginResponse, setLoginResponse] = useState<LoginResponse>()
    const { token, setToken } = useTokenStore()
    const { user, setUser } = useUserStore()

    const onSubmit = async (data: LoginFormData) => {
        const res =  await login({email: data.email, password: data.password})
        setLoginResponse(res)
        setToken(res.token?.accessToken)
        setUser(res.user)
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
                <PrimaryButton type="submit">Войти</PrimaryButton>
                <ErrorLabel>{loginResponse?.statusCode} {loginResponse?.error}</ErrorLabel>
            </Form>
        </FormContainer>
    );
};

export default LoginForm;