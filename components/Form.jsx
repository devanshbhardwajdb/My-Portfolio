'use client'
import Link from 'next/link'

import { motion } from "framer-motion";
import { fadeIn, fadeIn2, slideIn, slideIn2, staggerContainer, textVariant, textVariant1 } from "@/utils/motion";
import { contactItems } from '@utils/contact';


const Form = ({ setFormData, handleSubmit, formData }) => {
  return (
    <div id='contact' className='w-full h-auto min-h-[100vh] flex flex-row justify-start items-start max-lg:items-center max-lg:justify-center text-white  py-20 px-[10vw] max-md:px-0 relative max-lg:flex-col  bg_contact'>

      <div className='w-1/2 max-lg:w-full max-md:px-8'>
        <h1 className='font-teachers htext text-4xl font-extrabold  text-center hover:text-[#57ebff] duration-[0.7s]'>Contact me</h1>
        <form className='mt-10 w-full max-w-1/2 flex flex-col gap-7 glassmorphism project-class' onSubmit={handleSubmit}>


          <label>
            <span className='font-teachers font-semibold text-base text-gray-200'>
              Name

            </span>
            <input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}


              type='text'
              placeholder='Enter your name'
              required
              className='form_input cursor-text'

            />
          </label>
          <label>
            <span className='font-teachers font-semibold text-base text-gray-200'>
              Phone

            </span>
            <input
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}

              type='phone'
              placeholder='Enter you phone'
              required
              className='form_input cursor-text'
            />
          </label>
          <label>
            <span className='font-teachers font-semibold text-base text-gray-200'>
              Email

            </span>
            <input

              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              type='email'
              placeholder='Enter your email'
              required
              className='form_input cursor-text'
            />
          </label>
          <label>
            <span className='font-teachers font-semibold text-base text-gray-200'>
              Your message
            </span>

            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}


              placeholder='Write your message here'
              required
              className='form_textarea cursor-text '
            />
          </label>

          <div className='flex-end mx-3 mb-5 gap-4'>


            <button
              type='submit'

              className='contact-btn bg_button1 rounded-full w-full px-5 h-16 hover:shadow-glow hover:scale-[0.9] duration-500 text-black  font-teachers text-xl'
            >
              Submit

            </button>
          </div>
        </form>
      </div>
      
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" className='lg:w-1/2 min-h-[100vh]  flex flex-col gap-10 justify-center items-start lg:ml-[22vw] '>
        <motion.h1 variants={slideIn('left', "tween", 0, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className='font-teachers text-center hover:text-[#57ebff] duration-[0.7s] htext text-4xl font-extrabold '>Socials</motion.h1>

        {/* Mapping through contact items */}
        {contactItems.map((item) => (
          <motion.div key={item.id} variants={slideIn('left', "tween", 0, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}>
            <Link href={item.link} target="_blank" className='flex flex-row gap-5 justify-center items-center hover:scale-[1.15] duration-500 cursor-pointer'>
              <img src={item.image} alt="Logo" width={30} height={30} className='' />
              <p className='font-teachers font-semibold text-base text-gray-200'>{item.text}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Form
