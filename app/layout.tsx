import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "PikaMed - Tip 1 Diyabet Yönetim Uygulaması",
  description: "Tip 1 diyabet hastalarına yönelik yapay zeka destekli kolaylaştırıcı uygulama",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
        <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://raw.github.com/KeremKuyucu/PikaMed/main/assets/logo.png"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

