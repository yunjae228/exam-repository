// @ts-ignore
import * as dotenv from 'dotenv';

dotenv.config();


function required<T>(key: string, defaultValue?: string): string {
    const value = process.env[key] || defaultValue;
    if (value == null) {
        throw new Error(`Key ${key} is undefined`);
    }
    return value;
}

export const config = {
    db: {
        host: required('DB_HOST'),
        user: required('DB_USER'),
        database: required('DB_DATABASE'),
        password: required('DB_PASSWORD'),
        port: parseInt(required('DB_PORT')),
    },
}