import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#023262] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/e6a6b338-c004-4dec-b843-9c5f891c9ce0' className='flex flex-col max-w-[600px] w-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#f99709] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - ruben.afranco@yahoo.com</p>
            </div>
            <input className='bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#f99709] hover:border-[#f99709] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collab!</button>
        </form>
    </div>
  )
}

export default Contact