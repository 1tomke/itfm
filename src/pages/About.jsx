import React from 'react'
import img from '../images/about.png'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div className='flex flex-col fixed w-full h-full'>
      <div>
        <Navbar />
      </div>
      <div className='flex flex-grow'>
        <div className='w-1/2 flex flex-col gap-8 items-center'>
          <div className='overflow-y-auto h-full max-h-[calc(100vh-8rem)] pb-20 pr-6 custom-scrollbar'>
            <h1 className='h1 pr-[360px]'>Who are we?</h1>
            <p className='text-[17px] text-gray-500y leading-8'>
              We are an early stage start-up that is fusing industry level<br/>
              expertise in IT Financial Management with cutting edge software<br/> 
              development.
            </p>
            <h1 className='h1 pr-[340px]'>ITFM Software</h1>
            <p className='text-[17px] text-gray-500y leading-8'>
              We are building the next generation of IT Financial Management<br/>
              software to enable small to mid-size companies to effectively build<br/>
              ITFM framework without a significant investment in human capacity<br/>
              or complex toolset. Our ITFM platform is designed by industry<br/>
              experts to address many contemporary ITFM challenges.
            </p>
            <h1 className='h1'>ITFM Consultancy and Implementation<br/> Services</h1>
            <p className='text-[17px] text-gray-500y leading-8'>
              We offer effective ITFM consulting services across multiple<br/>
              industries to support buildout of ITFM framework or toolset at any<br/>
              stage. Our advisory ranges from helping you formulate your Service<br/>
              Strategy, to helping you set up complex allocation models, or<br/>
              providing you with assistance with implementation of any ITFM<br/>
              toolset.
            </p>
            <h1 className='h1'>System Integration and Custom Design</h1>
            <p className='text-[17px] text-gray-500y leading-8'>
              Through our software development partnership we are able to offer<br/>
              a wide array of cost effective data integration services of existing<br/>
              systems or complete custom buildout of new software solutions<br/>
              that meet your needs.
            </p>
          </div>
      </div>
      <div className='w-1/2'>
        <img src={img} alt="about" className='h-full w-full object-contain'/>
      </div>
      </div>
    </div>
  )
}

export default About