import { createHmac, timingSafeEqual } from 'node:crypto';
import {cookies} from 'next/headers';
const NAME='salipex_admin';
const maxAge=60*60*8;
const mac=(value:string)=>createHmac('sha256',process.env.SESSION_SECRET||'not-configured').update(value).digest('hex');
export function validConfig(){return Boolean(process.env.ADMIN_PASSWORD && process.env.ADMIN_PASSWORD.length>=16 && process.env.SESSION_SECRET && process.env.SESSION_SECRET.length>=32)}
export function compare(a:string,b:string){const aa=Buffer.from(a);const bb=Buffer.from(b);return aa.length===bb.length&&timingSafeEqual(aa,bb)}
export function loginCookie(){const expiry=(Date.now()+maxAge*1000).toString();return `${expiry}.${mac(expiry)}`}
export async function authenticated(){if(!validConfig())return false;const v=(await cookies()).get(NAME)?.value;if(!v)return false;const [expires,signature]=v.split('.');return Boolean(expires&&signature&&/^\d+$/.test(expires)&&Number(expires)>Date.now()&&compare(mac(expires),signature))}
export const cookieName=NAME;
export const cookieOptions={httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'strict' as const,path:'/',maxAge};
export function adminForbidden(){return Response.json({error:'Acceso no autorizado'}, {status:401})}
export function trustedRequest(req:Request){const origin=req.headers.get('origin');if(!origin)return true;try{return new URL(origin).host===new URL(req.url).host}catch{return false}}
