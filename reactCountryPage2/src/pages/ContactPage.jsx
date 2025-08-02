import React from 'react'

const ContactPage = () => {
    const handleSubmit = (formdata)=>{
        const formInput = Object.fromEntries(formdata.entries())
        console.log(formInput,"dddd");
        
    }
  return (
    <section className='section-contact'>
        <h2 className='container-title'>contact us </h2>
        <div className='contact-wrapper container'> 
            <form action={handleSubmit}>
                <input type="text" className='form-control' placeholder=' enter your name' name = "username" required  autoComplete='off'/>
                <input type="email" className='form-control' placeholder=' enter your email' name = "email" required  autoComplete='off'/>
                <textarea type="text" className='form-control' placeholder=' enter your name' rows={10} name = "username" required  autoComplete='off'/>
                <button type='submit' value="send"> Send</button>

            </form>
        </div>

    </section>
  )
}

export default ContactPage