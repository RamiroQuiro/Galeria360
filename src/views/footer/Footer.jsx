import { Link } from 'react-router-dom'
import SVGCode from '../../component/SVGCode'

export default function Footer() {
  return (
    <footer className="w-full p-2  items-center justify-center  bg-gray-200/50 text-gray-100 font-medium">
    <div className='flex w-2/5 mx-auto flex-wrap p- rounded-lg skew-x-6  items-center justify-around'>
        <p className=" text-base leading-6 text-center ">
           Ramiro Quiroga </p>
           <Link
           className='cursor-pointer hove:bg-blue-200 duration-200'
           to={'//ramiroquiroga.vercel.app/'}
           target='_blank'
           >
            <SVGCode className="w-10 hove:fill-white"/>
           </Link>
            <p className=" text-base leading-6 text-center">Web Developer Front-End
        </p>

        </div>
    </footer>
  )
}
