import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Professional IT Services | Richard Wollyce",
  description:
    "Complete IT solutions including support, software updates, hardware repair, cybersecurity consulting, and network infrastructure services",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/rwfavicon.webp",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/rwfavicon.webp",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/rwfavicon.webp",
        type: "image/webp",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
