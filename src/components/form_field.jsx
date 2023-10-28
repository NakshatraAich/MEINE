import {rarr} from "../assets";
import React, {useState, useRef} from 'react'

const Form = () => {
    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbzISJnaUeI1J5N00rGeXJL9rG6UHUjWn7dsEahoN5C5eBMvZu0BNRp0oTVgDdSh5ZqvYA/exec"
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setLoading(true)

        document.getElementById('sub-button').src = ''

        fetch(scriptUrl, {
        method: 'POST', 
        body: new FormData(formRef.current),

    }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
            setLoading(false)
            var element = document.getElementById('name');
            element.value = ''
            element.placeholder = 'Your email has been submitted!'
            element.style.fontWeight = '550'

            setTimeout(function () {
              element.style.fontWeight = '400'
              element.placeholder = 'Email Address'
            }, 5000); 

        })
        .catch(err => console.log(err))
    }

  return (
    <div className="container">
    <form  ref={formRef} onSubmit={handleSubmit} name="google-sheet">
      <div className="input-style flex flex-1 flex-row pb-2">
          <input type="email" id="name"  name="name" placeholder='Email Address' className='border-2 border-brandColor focus:border-2 border-r-[0px] focus:bg-[#f3f5ea] focus:rounding-[0px] focus:outline-none focus:border-[#869734] grow max-w-[36rem] p-3 shadow-lg'/>
          <button type="submit" id='sub-button' className='bg-brandColor border-2 border-brandColor px-2 shadow text-white text-2xl hover:border-[#869734] hover:bg-[#869734] focus:border-[#485023] focus:bg-[#485023]'><img id='rarr' src= {rarr} width={25}/></button>
      </div>  
    </form>
    
    </div>
  )
}

export default Form
