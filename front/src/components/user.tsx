'use client'

import React from 'react';
import styled from 'styled-components';
import {LoginResponse} from "@/utils/api";

// Create a styled container for the user info page
const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Create a styled card for displaying each user info field
const UserInfoCard = styled.div`
  width: 300px;
  padding: 20px;
  margin-bottom: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

const formatter = new Intl.DateTimeFormat('en-US');

// Create the UserInfo component
const UserInfo: React.FC<Required<LoginResponse>["user"]> = (props) => {
    const { id, createdAt, updatedAt, firstName,
        lastName, username, role, email,
        avatar, phone, isActive } = props;

    return (
        <UserInfoContainer>
            <UserInfoCard>
                <strong>ID:</strong> {id}
            </UserInfoCard>
            <UserInfoCard>
                <strong>Создан:</strong> {formatter.format(new Date(createdAt))}
            </UserInfoCard>
            <UserInfoCard>
                <strong>Обновлен:</strong> {formatter.format(new Date(updatedAt))}
            </UserInfoCard>
            <UserInfoCard>
                <strong>Имя:</strong> {firstName}
            </UserInfoCard>
            <UserInfoCard>
                <strong>Фамилия:</strong> {lastName}
            </UserInfoCard>
            <UserInfoCard>
                <strong>Username:</strong> {username}
            </UserInfoCard>
            <UserInfoCard>
                <strong>Роль:</strong> {role}
            </UserInfoCard>
            <UserInfoCard>
                <strong>Почта:</strong> {email}
            </UserInfoCard>
            <UserInfoCard>
                <strong>Телефон:</strong> {phone}
            </UserInfoCard>
            <UserInfoCard>
                <strong>Активен:</strong> {isActive ? 'Yes' : 'No'}
            </UserInfoCard>
        </UserInfoContainer>
    );
};

export default UserInfo;
