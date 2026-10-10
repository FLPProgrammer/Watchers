import { useState } from 'react'; 

export function useLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    return [email, password, setEmail, setPassword, error, setError] as const;
}