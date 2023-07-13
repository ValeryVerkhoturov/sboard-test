'use client'

import React from 'react';
import {useForm} from "react-hook-form";
import {Button, Form, FormContainer, Input, Label} from "@/components/form";

interface RegistrationFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
}

const LoginForm: React.FC = () => {
    const { register, handleSubmit } = useForm<RegistrationFormData>();

    const onSubmit = (data: RegistrationFormData) => {
        console.log(data);
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

                <Button type="submit">Зарегистрироваться</Button>
            </Form>

            <Button>Войти</Button>
        </FormContainer>
    );
};

export default LoginForm;