import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/layout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
