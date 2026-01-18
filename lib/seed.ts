import pool from './db-script';
import bcrypt from 'bcrypt';

async function seed() {
    try {
        const hashedPassword = await bcrypt.hash('password123', 10);

        await pool.query(`
            INSERT INTO users (name, email, password, bio)
            VALUES ($1, $2, $3, $4)
            ON CONFLICT (email) DO NOTHING
        `, ['Test User', 'test@example.com', hashedPassword, 'This is a test user.']);

        console.log('User created!');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        await pool.end();
    }
}

seed();
