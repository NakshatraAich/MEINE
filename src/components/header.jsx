import { logoFooter, logoHeader} from '../assets';

const Header = () => {
  return (
    <nav>
         <div className='h-[10vh]'>
            <ul className='flex flex-1 justify-center'>
              <li>
                <div className='hidden lg:block bg-brandColor pl-[12px] pr-[8px] pt-7 pb-7 rounded-b-[30px]'>
                <img 
                  src= { logoHeader }
                  alt = "Logo"
                  color='#222222'
                  width={130}
                  height={130} 
                  />
                </div>
              </li>
              <li>
                <div className='lg:hidden pl-[12px] pr-[8px] pt-7 pb-7 rounded-b-[30px]'>
                <img 
                  src= { logoFooter }
                  alt = "Logo"
                  color='#222222'
                  width={130}
                  height={130} 
                  />
                </div>
              </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header