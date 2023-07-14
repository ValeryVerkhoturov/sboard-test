'use client'

import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {PrimaryButton, ErrorLabel, Form, FormContainer, Input, Label, Button} from "@/components/form";
import {register as registerApi, RegisterResponse} from "@/utils/api/register";
import {useRouter} from "next/navigation";

interface RegistrationFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
}

const RegisterForm: React.FC = () => {
    const router = useRouter()
    const { register, handleSubmit } = useForm<RegistrationFormData>();
    const [registerResponse, setRegisterResponse] = useState<RegisterResponse>()

    const onSubmit = async (data: RegistrationFormData) => {
        const res = await registerApi(data)
        setRegisterResponse(res)
        if (res.user) {
            await router.push('/login')
        }
    };

    return (
        <FormContainer>
            <h2>Регистрация</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Label>Имя</Label>
                <Input type="text" {...register('firstName')} />

                <Label>Фамилия</Label>
                <Input type="text" {...register('lastName')} />

                <Label>Почта</Label>
                <Input type="email" {...register('email')} />

                <Label>Пароль</Label>
                <Input type="password" {...register('password')} />

                <Label>Телефон</Label>
                <Input type="tel" {...register('phone')} />

                <PrimaryButton type="submit">Зарегистрироваться</PrimaryButton>
                <ErrorLabel>{registerResponse?.statusCode} {registerResponse?.error}</ErrorLabel>
            </Form>
        </FormContainer>
    );
};

export default RegisterForm;