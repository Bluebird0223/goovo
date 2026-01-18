'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/actions/auth.actions';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        const { error } = await login(email, password);
        setLoading(false);

        if (error) {
            alert(error.message);
        } else {
            router.push('/');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">Login</h1>
            <input
                className="border p-2 mb-2 w-64"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="border p-2 mb-4 w-64"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white p-2 rounded w-64"
                onClick={handleSubmit}
            >
                {loading ? 'Logging in...' : 'Login'}
            </button>
        </div>
    );
}
