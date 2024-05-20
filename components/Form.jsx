'use client'
import Link from 'next/link'
import { motion } from "framer-motion";
import { fadeIn, fadeIn2, slideIn, slideIn2, staggerContainer, textVariant, textVariant1 } from "@/utils/motion";
import { contactItems } from '@utils/contact';
import StarsCanvas from './Stars';
import Socials from './Socials';

const Form = ({ setFormData, handleSubmit, formData }) => {
  return (
    <div id='contact' className='w-full  h-auto min-h-[100vh] flex  max-lg:items-center max-lg:justify-center text-white py-10  px-[10vw] max-md:px-0 relative max-lg:flex-col'>
      {/* <StarsCanvas /> */}


      <div className='max-lg:w-full max-md:px-8'>
        <h1 className='font-poppins text-gray-200 text-5xl font-extrabold  text-center hover:text-[#57ebff] duration-[0.7s]'>Contact me</h1>
        <form className='mt-10 w-full   green-pink-gradient p-[1.5px] rounded-3xl' onSubmit={handleSubmit}>


          <div className='bg-[#121212] rounded-3xl px-12 max-md:px-5 py-6 flex flex-col gap-10'>

            <label>
              <span className='font-poppins font-semibold text-base text-gray-200'>
                Name

              </span>
              <input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}


                type='text'
                placeholder='Enter your name'
                required
                className='w-full bg-[#220c31] p-3 focus:outline-none rounded-lg cursor-text'

              />
            </label>
            
            <label>
              <span className='font-poppins font-semibold text-base text-gray-200'>
                Email

              </span>
              <input

                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                type='email'
                placeholder='Enter your email'
                required
                className='w-full bg-[#220c31] p-3 focus:outline-none rounded-lg cursor-text'
              />
            </label>
            <label>
              <span className='font-poppins font-semibold text-base text-gray-200'>
                Your message
              </span>

              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}


                placeholder='Write your message here'
                required
                className='w-full bg-[#220c31] p-3 h-28 focus:outline-none rounded-lg cursor-text resize-none'
              />
            </label>

            <div className='flex-end hero_link green-pink-gradient w-44 h-16 p-[1px] rounded-xl'>

              <button className="hero_button font-poppins bg-[#121212] w-full h-full rounded-xl duration-300 ">
                Send Message
              </button>

            </div>
          </div>
        </form>
      </div>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" className=' min-h-[80vh]  flex flex-col gap-10 justify-center items-center lg:ml-[22vw] max-lg:px-8 '>
        <motion.h1 variants={slideIn('left', "tween", 0, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className='font-poppins text-center  hover:text-[#57ebff] duration-[0.7s] text-gray-200 text-5xl font-extrabold '>Socials</motion.h1>

        <Socials />

      </motion.div>
    </div >
  )
}

export default Form
