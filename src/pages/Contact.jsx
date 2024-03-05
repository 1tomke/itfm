// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
import Form from '../components/Form'
import Navbar from '../components/Navbar'
import img from '../images/contact.png'

const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_i243p5h', 'template_dvii5ad', form.current, {
  //       publicKey: 'fj06TQ7ihVYJV6Iek',
  //     })
  //     .then(
  //       () => {
  //         window.alert('Message sent successfully!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };

  //Message sent successfully!
  
  return (
    <div className='flex flex-col fixed w-full h-full'>
      <div>
        <Navbar />
      </div>
      <div className='flex h-full w-full'>
        <div className='flex flex-col items-start h-full w-1/2 pl-52 pt-10'>
          <h1 className='text-3xl font-bold text-slate-900'>
            Want to get in touch with us?
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-600 py-4'>
            If you have any question on our offerings or would like to<br/>
            learn anything about our company please drop us an e-mail<br/>
            and your journey will begin.
          </p>
          <div className='flex'>
          <svg class="w-6 h-6 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.9 6c.4.3.8.3 1.2 0l7.9-6M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"/>
          </svg>      
            <a href="" className='text-slate-600 hover:text-slate-950 pl-2'>info@myitfm.com</a>
          </div>
          <div className='pl-32'>
            <img src={img} alt="contact" width={400}/>
          </div>
        </div>
        <div className='h-full w-1/2 flex justify-center items-center'>
          <Form />
            {/* <form ref={form} onSubmit={sendEmail} className='pb-48 flex flex-col'>
              <div className='grid grid-cols-2 gap-8'>
                <div className='flex flex-col'>
                  <label className='label'>First name</label>
                  <input type="text" name='first-name' className='border-2 rounded px-3.5 py-1'/>
                </div>
                <div className='flex flex-col'>
                  <label className='label'>Last name</label>
                  <input type="text" name='last-name' className='border-2 rounded px-3.5 py-1'/>
                </div>
              </div>
              <div className='mt-5'>
                <label className='label'>Email</label>
                <input type="email" name='email' className='input'/>
              </div>
              <div className='mt-5'>
                <label className='label'>Company</label>
                <input type="text" name='company' className='input'/>
              </div>
              <div className='mt-5'>
                <label className='label'>Phone</label>
                <input type="text" name='phone' className='input'/>
              </div>
              <div className='mt-5'>
                <label className='label'>How can we help you?</label>
                <div className='border-2 rounded'>
                 <textarea name="help" rows="4" className='block w-full'></textarea>
                </div>
              </div>
              <div className='flex justify-end pt-4'>
                <button type='submit' value="Send" className='bg-blue-400 text-white py-2 px-3 rounded-lg text-sm font-semibold'>
                  Send message
                </button>
              </div>
            </form> */}
        </div>
      </div>
    </div>
  )
}

export default Contact