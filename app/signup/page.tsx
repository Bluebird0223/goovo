'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { register } from '@/actions/auth.actions'



export default function Signup() {

    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [avatar, setAvatar] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        setLoading(true)
        console.log("data", email, password)

        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('bio', bio)
        if (avatar) {
            formData.append('avatar', avatar)
        }
        try {
            await register(formData)
            setLoading(false)
            alert('Account created! please login.')
            router.push('/login')
        } catch (error: any) {
            console.log('Error signing up:', error.message)
            alert(error.message)
        }
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <h1 className='text-4xl font-bold mb-4'>Sign Up</h1>
            <input
                className='border p-2 mb-2 w-64'
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className='border p-2 mb-2 w-64'
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                className='border p-2 mb-2 w-64'
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className='border p-2 mb-2 w-64'
                type="text"
                placeholder="Bio"
                onChange={(e) => setBio(e.target.value)}
            />
            <input
                className='border p-2 mb-2 w-64'
                type="file"
                accept="image/*"
                onChange={(e) => setAvatar(e.target.files?.[0] || null)}
            />
            <button className='bg-blue-500 text-white p-2 rounded w-64' onClick={handleSubmit}>
                {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
        </div>
    )
}