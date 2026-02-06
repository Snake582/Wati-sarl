// app/layout.tsx
import Navbar from './Components/Navbar/Navbar'
import './globals.css'

export const metadata = {
  title: 'WATI - West Africa Trading & Investment',
  description: 'Conseil, investissement et accompagnement stratégique en Afrique de l’Ouest',
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-black text-white antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
