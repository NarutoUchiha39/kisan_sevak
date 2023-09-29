import './globals.css'
export const metadata = {
  title: 'Kisan Sevak',
  description: 'Help Farmers Help India Grow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {children}
        
      </body>
    </html>
  )
}
