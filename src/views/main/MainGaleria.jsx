import { useOutletContext } from 'react-router-dom'
import Footer from '../footer/Footer'
import Headerr from '../header/Headerr'
import Main from './Main'
export default function MainGaleria() {

const [event,items,url,movil]=useOutletContext()



  return (
    <div className='flex flex-col items-stretch w-full min-h-screen justify-between'>
     {/* <Headerr event={event} url={url} /> */}
      <Main items={items} url={url}  movil={movil} event={event}  />
      <Footer />
      </div>
  )
}
