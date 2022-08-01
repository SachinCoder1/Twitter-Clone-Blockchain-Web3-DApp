import '../styles/globals.css'
import {MainContext} from '../context/mainContext'
import {useContext} from 'react'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
