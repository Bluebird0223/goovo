import pool from './db-script'

async function migrate() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        avatar TEXT,
        bio TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `)
    await pool.query(`
        CREATE TABLE IF NOT EXISTS plans(
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT UNIQUE NOT NULL,
        destination TEXT NOT NULL,
        start_date DATE NOT NULL,
        end_date DATE,
        likes INTEGER DEFAULT 0,
        total_members INTEGER DEFAULT 0,
        cover_image TEXT,
        more_images TEXT[],
        created_by INTEGER REFERENCES users(id) ON DELETE CASCADE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log('database tables created!')
    process.exit()
}

migrate().catch(console.error)