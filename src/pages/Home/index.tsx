import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Carousel from './components/Carousel'
import Featured from './components/Featured'
import Hero from './components/Hero'

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Carousel />
      <Featured />
      <Footer />
    </>
  )
}

export default HomePage