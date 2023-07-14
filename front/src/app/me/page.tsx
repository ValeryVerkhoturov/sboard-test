'use client';

import React, {useEffect} from 'react';
import UserInfo from "@/components/user";
import {useUserStore} from "@/utils/store/user-store";
import {useRouter} from "next/navigation";
import {useTokenStore} from "@/utils/store/token-store";

const UserPage: React.FC = () => {
    const {user} = useUserStore()
    const {token}= useTokenStore()
    const router = useRouter()

    useEffect(() => {
       if (!token) {
           router.push('/login')
       }
    }, [token])

    return (
        <div>
            <h1>User Info</h1>
            {user && <UserInfo {...user} />}
        </div>
    );
};

export default UserPage;
