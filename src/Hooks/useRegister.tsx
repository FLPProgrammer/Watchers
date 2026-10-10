import { useState } from 'react';

export function useRegister() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    return [name, setName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, error, setError] as const;
}