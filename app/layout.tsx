import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"DaanVeda ImpactOS | CSR & ESG, connected", description:"Discover trusted partners, execute CSR programs, collect verified ESG data and produce audit-ready disclosures in one operating system.", other:{"codex-preview":"development"}, icons:{icon:"/favicon.svg"} };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
