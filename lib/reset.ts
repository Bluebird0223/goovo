import pool from './db-script';

async function reset() {
    await pool.query(`DROP TABLE IF EXISTS plans CASCADE;`);
    await pool.query(`DROP TABLE IF EXISTS users CASCADE;`);
    console.log('Database reset complete.');
    process.exit();
}

reset().catch(console.error);
