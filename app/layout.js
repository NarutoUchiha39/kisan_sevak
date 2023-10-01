
import './globals.css'
import { GlobalContextProvider } from './Context/store'
import AuthProvider from '@/components/AuthProvider'
export const metadata = {
  title: 'Kisan Sevak',
  description: 'Help Farmers Help India Grow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>   
      <AuthProvider>
            <GlobalContextProvider>
             
                {children}
                
            </GlobalContextProvider>
            </AuthProvider>
        
        
      </body>
    </html>
  )
}
