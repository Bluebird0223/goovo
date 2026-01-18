import pool from '@/lib/db'

export async function createPlan(data: {
    title: string
    description?: string
    destination?: string
    start_date?: string
    end_date?: string
    imageUrl: string
    likes?: number
    total_members?: number
    created_by: number
}) {
    const res = await pool.query(
        `
    INSERT INTO plans
    (title,description,destination,start_date,end_date,created_by)
    VALUES ($1,$2,$3,$4,$5,$6)
    RETURNING *
    `,
        [
            data.title,
            data.description,
            data.destination,
            data.start_date,
            data.end_date,
            data.created_by,
        ]
    )

    return res.rows[0]
}

export async function getAllPlans() {
    const res = await pool.query(`
    SELECT 
      plans.*,
      users.name AS host
    FROM plans
    JOIN users ON users.id = plans.created_by
    ORDER BY plans.created_at DESC
  `)

    return res.rows
}
