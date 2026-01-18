'use server';

import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { writeFile } from 'fs/promises';
import path from 'path';

import { createUser, findUserByEmail } from "@/models/user.model";

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const REFRESH_SECRET = process.env.REFRESH_SECRET || 'your-refresh-secret';

export async function login(email: string, pass: string) {
    try {
        const user = await findUserByEmail(email);
        if (!user) {
            return { error: { message: 'Invalid credentials' } };
        }

        const isMatch = await bcrypt.compare(pass, user.password);
        if (!isMatch) {
            return { error: { message: 'Invalid credentials' } };
        }

        const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '15m' });
        const refreshToken = jwt.sign({ userId: user.id }, REFRESH_SECRET, { expiresIn: '7d' });

        (await cookies()).set('accessToken', accessToken, { httpOnly: true, secure: true, maxAge: 15 * 60 });
        (await cookies()).set('refreshToken', refreshToken, { httpOnly: true, secure: true, maxAge: 7 * 24 * 60 * 60 });

        return { success: true };
    } catch (error: any) {
        console.error('Login error:', error);
        return { error: { message: 'Something went wrong' } };
    }
}

export async function register(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const bio = formData.get('bio') as string;
    const avatarFile = formData.get('avatar') as File | null;

    let avatarUrl = '';

    if (avatarFile && avatarFile.size > 0) {
        try {
            const buffer = Buffer.from(await avatarFile.arrayBuffer());
            const filename = Date.now() + '_' + avatarFile.name.replaceAll(' ', '_');
            const uploadDir = path.join(process.cwd(), 'public/uploads');

            await writeFile(path.join(uploadDir, filename), buffer);
            avatarUrl = `/uploads/${filename}`;
        } catch (error) {
            console.error('Error saving file:', error);
            return { data: null, error: { message: 'Failed to upload avatar' } };
        }
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await createUser(
            name,
            email,
            hashedPassword,
            avatarUrl,
            bio
        )
    } catch (error: any) {
        console.error('Error creating user:', error);
        return { data: null, error: error };
    }
}

export async function getUserDetails(email: string) {
    try {
        await findUserByEmail(email)
    } catch (error: any) {
        console.log('Error fetching user data', error)
        return { data: null, error: error }

    }
}
