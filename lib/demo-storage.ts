// Almacenamiento exclusivamente local y demostrativo. No es una base de datos compartida.
export type DemoRow=Record<string,unknown>;
export function readCollection(key:string):DemoRow[]{if(typeof window==='undefined')return [];try{const v=JSON.parse(localStorage.getItem('salipex_demo_'+key)||'[]');return Array.isArray(v)?v:[]}catch{return []}}
export function writeCollection(key:string,rows:DemoRow[]){if(typeof window==='undefined')return;localStorage.setItem('salipex_demo_'+key,JSON.stringify(rows))}
