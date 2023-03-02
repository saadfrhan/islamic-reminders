import '../styles/globals.css';
import { AnalyticsWrapper } from '../components/analytics';

export const metadata = {
  title: 'Create Next App',
  description: 'Website with Next.js 13'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
