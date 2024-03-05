import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_i243p5h', 'template_dvii5ad', form.current, {
                publicKey: 'fj06TQ7ihVYJV6Iek',
            })
            .then(
                () => {
                    window.alert('Message sent successfully!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <form ref={form} onSubmit={sendEmail} className='pb-48 flex flex-col'>
            <div className='grid grid-cols-2 gap-8'>
                <div className='flex flex-col'>
                    <label className='label'>First name</label>
                    <input type="text" name='first-name' className='border-2 rounded px-3.5 py-1' />
                </div>
                <div className='flex flex-col'>
                    <label className='label'>Last name</label>
                    <input type="text" name='last-name' className='border-2 rounded px-3.5 py-1' />
                </div>
            </div>
            <div className='mt-5'>
                <label className='label'>Email</label>
                <input type="email" name='email' className='input' />
            </div>
            <div className='mt-5'>
                <label className='label'>Company</label>
                <input type="text" name='company' className='input' />
            </div>
            <div className='mt-5'>
                <label className='label'>Phone</label>
                <input type="text" name='phone' className='input' />
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
        </form>
    )
}

export default Form