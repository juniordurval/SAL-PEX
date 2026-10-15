import type {Metadata} from 'next';import './globals.css';import Header from '@/components/Header';import Footer from '@/components/Footer';
export const metadata:Metadata={title:{default:'SALÍPEX | Origen de Sal',template:'%s | SALÍPEX'},description:'Sitio institucional y catálogo de productos SALÍPEX. Sal fina, sal parrillera y sal mineral para ganado. Demo oficial en desarrollo.',robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body><Header/>{children}<Footer/></body></html>}
