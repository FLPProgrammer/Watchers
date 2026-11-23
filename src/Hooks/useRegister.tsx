
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { registerUser } from '../Services/AuthService';
import { getApiErrorMessage } from '../Services/Api';
import { useAuth } from '../Context/AuthContext';

export function useRegister() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const { refreshUser } = useAuth();

    async function handleRegister() {
        try {
            setError('');

            if (password !== confirmPassword) {
                setError('Passwords do not match.');
                return;
            }

            setLoading(true);

            await registerUser({
                name,
                email,
                password,
                confirmPassword,
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
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        error,
        loading,
        handleRegister,
    };
}
