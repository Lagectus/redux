import React from 'react'

const Contact = () => {
    const handleSubmit = (formData)=>{
        const formInputData = Object.fromEntries(formData.entries())
        console.log(formInputData,"ddddd");
        

    }
  return (
    <section className='section-contact'>
        <h2 className='container-title '>Contact us</h2>
        <div className='contact-wrapper container'>
            <form action={handleSubmit}>
                <input type="text" className='form-control' placeholder='enter your name' name="username" required autoComplete='off'/>
                <input type="email" className='form-control' placeholder='enter your name' name="email" required autoComplete='off'/>
                <textarea rows={10} type="text" className='form-control' placeholder='enter your name' name="message" required autoComplete='off'/>
                <button type='submit' value="send">
                    Send
                </button>
            </form>
        </div>

    </section>
  )
}

export default Contact