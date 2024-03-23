import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        {children}
        <Analytics/>
        <SpeedInsights />
      </body>
    </html>
  );
}
