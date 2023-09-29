
import './globals.css'
import { GlobalContextProvider } from './Context/store'
export const metadata = {
  title: 'Kisan Sevak',
  description: 'Help Farmers Help India Grow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>   
            <GlobalContextProvider>
                {children}
            </GlobalContextProvider>
        
        
      </body>
    </html>
  )
}
