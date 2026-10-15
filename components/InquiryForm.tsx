'use client';
import {useState} from 'react';
import {useSearchParams} from 'next/navigation';
import {Send,CheckCircle2} from 'lucide-react';
import {readCollection,writeCollection} from '@/lib/demo-storage';
type Kind='cotizacion'|'contacto';
export default function InquiryForm({kind}:{kind:Kind}){
 const query=useSearchParams();const [done,setDone]=useState(false);
 const submit=(e:React.FormEvent<HTMLFormElement>)=>{
   e.preventDefault();const form=e.currentTarget;
   const row={...Object.fromEntries(new FormData(form).entries()),id:Date.now(),status:'nuevo',created_at:new Date().toISOString()};
   const key=kind==='cotizacion'?'quotes':'contacts';writeCollection(key,[row,...readCollection(key)]);
   form.reset();setDone(true);
 };
 return <form onSubmit={submit} className="bg-white p-7 md:p-10 rounded-[28px] shadow-xl shadow-slate-200/40 border border-slate-100">
 <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-900 mb-7"><b>Modo demostración.</b> Los datos se guardan únicamente en este navegador, no se envían a SALÍPEX. No ingreses información sensible.</div>
 <div className="grid md:grid-cols-2 gap-5">
 <div><label className="label" htmlFor="nombre">Nombre *</label><input className="field" id="nombre" name="full_name" required maxLength={120}/></div>
 <div><label className="label" htmlFor="email">Correo *</label><input className="field" id="email" name="email" type="email" required maxLength={160}/></div>
 <div><label className="label" htmlFor="telefono">Teléfono</label><input className="field" id="telefono" name="phone" maxLength={50}/></div>
 {kind==='cotizacion'&&<><div><label className="label" htmlFor="empresa">Empresa</label><input className="field" id="empresa" name="company"/></div><div><label className="label" htmlFor="ciudad">Ciudad</label><input className="field" id="ciudad" name="city"/></div><div><label className="label" htmlFor="producto">Producto *</label><select key={query.get('producto')||'general'} className="field" id="producto" name="product_slug" defaultValue={query.get('producto')||''} required><option value="" disabled>Elegir producto</option><option value="sal-fina">Sal fina</option><option value="sal-parrillera">Sal parrillera</option><option value="sal-mineral-ganado">Sal mineral para ganado</option><option value="general">Distribución / general</option></select></div><div><label className="label" htmlFor="cantidad">Cantidad</label><input className="field" id="cantidad" name="quantity"/></div></>}
 <div className="md:col-span-2"><label className="label" htmlFor="mensaje">Mensaje *</label><textarea className="field min-h-32" id="mensaje" name="message" maxLength={3000} required/></div></div>
 <button type="submit" className="btn btn-dark mt-7">Simular envío <Send size={16}/></button>
 {done&&<p className="mt-5 text-emerald-700 flex gap-2 items-center" role="status"><CheckCircle2 size={18}/> Guardado en este navegador como demostración. Puedes verlo en el panel demo.</p>}
 </form>;
}
