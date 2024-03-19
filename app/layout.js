import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Restaria Liba",
  description: "Het plekje van Boven-Hardinxveld",
};

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
