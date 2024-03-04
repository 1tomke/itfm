import React from 'react'
import img from '../images/home.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const navigateTo = (props) =>{
    navigate(`/${props}`);
  }
  return (
    <div className=' flex fixed h-full w-full'>
      <div className=' w-[50%] flex flex-col items-center justify-center pb-14'>
        <p className='text-slate-700 text-5xl font-bold'>The NEXT generation of<br/>
                                                           self-service ITFM</p>
        <p className='text-slate-500 text-xl py-8'>We are building a new generation of ITFM software aimed to<br/>
                                                     address contemporary and future ITFM challenges</p>
        <div className='flex gap-5 pr-[250px]'>
          <button 
            onClick={() => navigate('contact')}
            className='bg-blue-400 text-white px-3 py-2 rounded-md font-semibold'
            >Join the waitlist
          </button>
          <button
            onClick={() => navigateTo('about')}
            className='flex bg-white text-gray-500 px-3 py-2 rounded-md font-semibold border'
            >Learn more
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="currentColor"/>
            </svg>
           </button>
        </div>
        </div>
        <div className='w-[50%] flex items-center justify-center bg-gradient-to-br from-yellow-50 to-transparent'>
            <img src={img} alt="img" className='mb-32'/>
        </div>
    </div>
  )
}

export default Home