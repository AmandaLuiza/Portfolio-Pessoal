import '../../styles/globals.css'
import Header from '../../components/Header/index'
import { useState, useContext } from 'react'


function MyApp({ Component, pageProps }) {
  const [cor, setCor] = useState('white')
  const mudacor = ()=>{
    if(cor === 'white'){
      setCor('black')
    } else {
      setCor('white')
    }
  }
 

function Head() {
  let year = useContext(Head)
  return year = ("© 2023"); 
}

  return (
    <>  
      <title>AmandaDev</title> 
      <Head/>       
      <div className={cor==='white'? 'whiteTheme': 'blackTheme'}>
      <Header />
      <button onClick={()=>(mudacor()) }>Change Color Theme</button>
      <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
