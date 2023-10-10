import { Inter } from 'next/font/google'
import Header from './Components/Header/Header'
import Services from './Components/Services/Services'
import Testimonial from './Components/Testimonial/Testimonial'
import Technology from './Components/Technology/Technology'
import Partner from './Components/Partner/Partner'
import Newsletter from './Components/Newsletter/Newsletter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header/>
      <Services/>
      <Testimonial/>
      <Technology/>
      <Partner/>
      <Newsletter/>
    </main>
  )
}
