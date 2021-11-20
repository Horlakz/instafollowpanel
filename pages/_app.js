import '../styles/globals.css'
import '../styles/fontsfold/icon.css'
import HomeLayout from './layouts/HomeLayout'

export default function MyApp({ Component, pageProps }) {
  return (
  <HomeLayout>
    <Component {...pageProps} />
  </HomeLayout>
  )
}

