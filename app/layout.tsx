import "./globals.css"
import Providers from "./providers"
import Nav from "./nav"

export const metadata = {
  title: "emivespa.com",
  description: "",
  other: {
    "color-scheme": "dark light",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[canvas] text-[canvastext]">
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  )
}
