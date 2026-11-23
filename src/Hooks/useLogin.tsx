
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { loginUser } from '../Services/AuthService';
import { getApiErrorMessage } from '../Services/Api';
import { useAuth } from '../Context/AuthContext';

export function useLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const { refreshUser } = useAuth();

    async function handleLogin() {
        try {
            setError('');
            setLoading(true);

            await loginUser({
                email,
                password,
            });

            await refreshUser();

            router.push('/');

        } catch (error) {
            setError(getApiErrorMessage(error));
        } finally {
            setLoading(false);
        }
    }

    return {
        email,
        password,
        setEmail,
        setPassword,
        error,
        loading,
        handleLogin,
    };
}
