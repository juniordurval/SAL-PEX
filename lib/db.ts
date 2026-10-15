import {neon} from '@neondatabase/serverless';
import {demoProducts,demoNews,Product,News} from './catalog';
export const configured=()=>Boolean(process.env.DATABASE_URL && !process.env.DATABASE_URL.includes('USER:PASSWORD'));
export function sql(){if(!configured()) throw new Error('DATABASE_URL no configurada.');return neon(process.env.DATABASE_URL!)}
export async function products():Promise<Product[]>{if(!configured())return demoProducts;const rows=await sql()`SELECT * FROM products WHERE active = true ORDER BY sort_order,id`;return rows as unknown as Product[]}
export async function allProducts():Promise<Product[]>{if(!configured())return demoProducts;const rows=await sql()`SELECT * FROM products ORDER BY sort_order,id`;return rows as unknown as Product[]}
export async function news():Promise<News[]>{if(!configured())return demoNews;const rows=await sql()`SELECT * FROM news WHERE published = true ORDER BY created_at DESC`;return rows as unknown as News[]}
export async function allNews():Promise<News[]>{if(!configured())return demoNews;const rows=await sql()`SELECT * FROM news ORDER BY created_at DESC`;return rows as unknown as News[]}
