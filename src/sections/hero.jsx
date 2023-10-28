import { bgImage, fb, ig, link, x, vert } from "../assets"
import Form_field from "../components/form_field";

function copyFunction() { 
  var copyText = document.getElementById("email-address");
  navigator.clipboard.writeText('meine.electric@gmail.com');
}

const Hero = () => {
  return (
      <div className="sm:bg-hero-pattern bg-no-repeat bg-contain bg-right-bottom md:h-[90vh] sm:py-[200px] pt-[50px]">
        <div className="px-[9vw]">
          <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-textColor pb-6 md:pb-3 leading-tight md:leading-tight tracking-wider">STAY TUNED FOR SOMETHING <span className="text-brandColor"><br/>ELECTRIC</span></h1>
          <h2 className="text-altTextColor font-semibold pb-2 text-xl">Receive updates when the site is up</h2>
          </div>
          <Form_field />
          <ul className="flex flex-1 flex-row gap-1 items-center align-center">
            <li className="opacity-90 hover:opacity-100"><a href="https://www.linkedin.com/company/meineelectric/?originalSubdomain=in"><img src={link} className="w-5 h-auto"/></a></li>
            <li className="opacity-90 hover:opacity-100"><a href="https://www.instagram.com/meineelectric/"><img src={ig} className="w-5 h-auto"/></a></li>
            <li className="opacity-90 hover:opacity-100"><a href="https://m.facebook.com/p/MEINE-Electric-100083796047404/?locale=hi_IN"><img src={fb} className="w-5 h-auto"/></a></li>
            <li className="opacity-90 hover:opacity-100"><a href="https://twitter.com/meineelectric"><img src={x} className="w-5 h-auto"/></a></li>
            <li><img src={vert} className="h-6"/></li>
            <li id='email-address' onClick={copyFunction} className="font-semibold text-xs hover:text-brandColor">meine.electric@gmail.com </li>
          </ul>
        </div>
      </div>
  )
}

export default Hero