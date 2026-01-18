import pool from '@/lib/db'

export async function createUser(
    name: string,
    email: string,
    password: string,
    avatarUrl: string,
    bio: string
) {
    const res = await pool.query(
        `INSERT INTO users(name,email,password,avatar,bio)
            VALUES($1,$2,$3,$4,$5)
            RETURNING id,name,email,avatar,bio`,
        [name, email, password, avatarUrl, bio]
    );

    return res.rows[0]
}

export async function findUserByEmail(email: string) {
    const res = await pool.query(
        `SELECT * FROM users WHERE email=$1`,
        [email]
    )

    return res.rows[0]
}
