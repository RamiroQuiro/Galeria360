import { useOutletContext } from 'react-router-dom'
import Footer from '../footer/Footer'
import Headerr from '../header/Headerr'
import Main from './Main'
export default function MainGaleria() {

const [event,items,url,movil]=useOutletContext()



  return (
    <div className='flex flex-col w-full min-h-screen items-stretch justify-between'>
     <Headerr event={event} url={url} movil={movil} />
      <Main items={items} url={url}  />
      <Footer />
      </div>
  )
}
