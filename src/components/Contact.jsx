// import React from 'react'
// import { CONTACT } from '../constants'
// import { motion } from 'framer-motion'

// const Contact = () => {
//   return (
//     // <div  className='border-b border-neutral-900 pb-20'>
//     //     <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='my-10 text-center text-4xl'>Get in Touch</motion.h2>
//     //     <div className='text-center tracking-tighter'>
//     //         <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.5}} className='my-4'>{CONTACT.address}</motion.p>
//     //         <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className='my-4'>{CONTACT.phoneNo}</motion.p>
//     //         <a href="#" className='border-b '>{CONTACT.email}</a>
//     //     </div>
//     // </div>
//     <div className='border-b mr-4 mt-2 flex items-center justify-center'>
      
//     </div>
//   )
// }

// export default Contact


// import React, { useState } from 'react';

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [errors, setErrors] = useState({});

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add form validation and submission logic here
//     console.log('Form submitted:', { name, email, message });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 pt-6 mb-4">
//       <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
//       <div className="flex flex-wrap -mx-3 mb-6">
//         <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//           <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
//             Name
//           </label>
//           <input
//             className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
//             id="name"
//             type="text"
//             value={name}
//             onChange={(event) => setName(event.target.value)}
//           />
//           {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
//         </div>
//         <div className="w-full md:w-1/2 px-3">
//           <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
//             id="email"
//             type="email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//           {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
//         </div>
//       </div>
//       <div className="flex flex-wrap -mx-3 mb-6">
//         <div className="w-full px-3">
//           <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
//             Message
//           </label>
//           <textarea
//             className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
//             id="message"
//             value={message}
//             onChange={(event) => setMessage(event.target.value)}
//           />
//           {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
//         </div>
//       </div>
//       <button
//         className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
//         type="submit"
//       >
//         Send Message
//       </button>
//     </form>
//   );
// };

// export default ContactForm;

import React from 'react'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8b45498c-c61d-44dd-a825-7f4e8739e9c9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className='max-w-md w-full mx-auto p-6  rounded-lg showdow-md '>
      <h2 className='text-3xl text-center text-neutral-200 font-bold mb-6'>Get in Touch</h2>
      <form onSubmit={onSubmit}>
        <div className='mb-4'>
          <label htmlFor="" className='block text-white text-sm font-semibold mb-2'>Your Name</label>
          <input type="text" name='name' placeholder='Enter Name' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500' required />
        </div>
        <div className='mb-4'>
          <label htmlFor="" className='block text-white text-sm font-semibold mb-2'>Enter Your Email</label>
          <input type="email" name='email' placeholder='example@gmail.com' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500' required />
        </div>
        <div className='mb-4'>
          <label htmlFor="" className='block text-white text-sm font-semibold mb-2'>Enter Your Text</label>
          <textarea rows='4' cols='4' type="text" placeholder='Type your message here' name='message' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500' required />
        </div>
        <div className='flex justify-center'>
          <button type='submit' className='bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-500 focus:outline-white'>Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default Contact