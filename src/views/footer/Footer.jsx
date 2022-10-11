import { Link } from 'react-router-dom'
import SVGCode from '../../component/SVGCode'

export default function Footer() {
  return (
    <footer className="w-full p-5 bg-neutral text-neutral-content flex items-center justify-center  bg-gray-200/50 gap-20 text-white">
    <div className='flex w-2/5 mx-auto flex-wrap p-5 rounded-lg skew-x-6 bg-gray-200/50 items-center justify-around'>
        <p className=" text-base leading-6 text-center text-gray-100">
           Ramiro Quiroga </p>
           <Link
           className='cursor-pointer hove:bg-blue-200 duration-200'
           to={'//ramiroquiroga.vercel.app/'}
           target='_blank'
           >
            <SVGCode className="w-10 hove:fill-white"/>
           </Link>
            <p className=" text-base leading-6 text-center text-gray-100">Web Developer Front-End
        </p>

        </div>
    </footer>
  )
}
