import "./layout.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="portfolio">
      <body>{children}</body>
    </html>
  )
}