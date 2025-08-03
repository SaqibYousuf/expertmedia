import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      insuranceType,
      leadVolume,
      message,
    } = body;

    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'test',
    });

    await connection.execute(
      `INSERT INTO contact_submissions 
      (first_name, last_name, email, phone, insurance_type, lead_volume, message) 
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [firstName, lastName, email, phone, insuranceType, leadVolume, message]
    );

    await connection.end();

    return NextResponse.json({ success: true, message: 'Message submitted successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Something went wrong' }, { status: 500 });
  }
}
