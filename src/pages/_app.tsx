import '../style/global.css'
import {DesafioContextProvider} from '../providers/desafiosContext'
function MyApp({ Component, pageProps }) {
  return (
  
  <DesafioContextProvider>
    <Component {...pageProps} />
  </DesafioContextProvider>
  )
}

export default MyApp
