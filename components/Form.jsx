'use client'
import Link from 'next/link'

import { motion } from "framer-motion";
import { fadeIn, fadeIn2, slideIn, slideIn2, staggerContainer, textVariant, textVariant1 } from "@/utils/motion";


const Form = ({ setFormData, handleSubmit, formData }) => {
  return (
    <div id='contact' className='w-full h-auto min-h-[100vh] flex flex-row justify-start items-start max-lg:items-center max-lg:justify-center text-white  py-20 px-[10vw] max-md:px-0 relative max-lg:flex-col '>

      <div className='w-1/2 max-lg:w-full max-md:px-8'>
        <h1 className='font-teachers text-3xl font-bold text-center hover:text-[#57ebff] duration-[0.7s]'>Contact me</h1>
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
      {/* <div className='lg:w-1/2 min-h-[100vh]  flex flex-col gap-10 justify-center items-start lg:ml-[22vw] '>
        <h1
          className='heading text-center hover:text-[#57ebff] duration-[0.7s]'>Socials</h1>

        <div>
          <Link href="https://www.youtube.com/@DevanshBhardwajDB" className='flex flex-row gap-5 justify-center items-center hover:scale-[1.15] duration-500 cursor-pointer' target="_blank">

            <img src={"/assets/icons/yt.png"} alt={"Logo"} width={30} height={30} className='invert' />
            <p className='font-teachers font-semibold text-base text-gray-200'>Subscribe to my Youtube channel</p>
          </Link>
        </div>
        <div >
          <Link href="https://www.linkedin.com/in/devansh-bhardwaj-98771b239/" target="_blank" className='flex flex-row gap-5 justify-center items-center hover:scale-[1.15] duration-500 cursor-pointer'>

            <img src={"/assets/icons/linkedin.png"} alt={"Logo"} width={30} height={30} className='invert' />
            <p className='font-teachers font-semibold text-base text-gray-200'>Follow me on LinkedIn</p>
          </Link>
        </div>
        <div >
          <Link href="https://github.com/devanshbhardwajdb" target="_blank" className='flex flex-row gap-5 justify-center items-center hover:scale-[1.15] duration-500 cursor-pointer'>

            <img src={"/assets/icons/github.png"} alt={"Logo"} width={30} height={30} className='invert' />
            <p className='font-teachers font-semibold text-base text-gray-200'>Check out my Github</p>
          </Link>
        </div>

        <div >
          <Link href="https://www.instagram.com/devanshbhardwaj_db/" className='flex flex-row gap-5 justify-center items-center hover:scale-[1.15] duration-500 cursor-pointer' target="_blank">

            <img src={"/assets/icons/insta.png"} alt={"Logo"} width={30} height={30} className='invert' />
            <p className='font-teachers font-semibold text-base text-gray-200'>Follow me on Instagram</p>
          </Link>
        </div>

        <div>
          <Link href="https://www.facebook.com/devanshbhardwajdb" className='flex flex-row gap-5 justify-center items-center hover:scale-[1.15] duration-500   cursor-pointer' target="_blank">

            <img src={"/assets/icons/fb.png"} alt={"Logo"} width={30} height={30} className='invert' />
            <p className='font-teachers font-semibold text-base text-gray-200'>Follow me on Facebook</p>
          </Link>
        </div>

        <div>
          <Link href="https://twitter.com/i/flow/login?redirect_after_login=%2FDevansh06122166" className='flex flex-row gap-5 justify-center items-center hover:scale-[1.15] duration-500 cursor-pointer' target="_blank">

            <img src={"/assets/icons/twitter.png"} alt={"Logo"} width={30} height={30} className='invert' />
            <p className='font-teachers font-semibold text-base text-gray-200'>Follow me on Twitter</p>
          </Link>
        </div>
      </div> */}
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" className='lg:w-1/2 min-h-[100vh]  flex flex-col gap-10 justify-center items-start lg:ml-[22vw] '>
        <motion.h1 variants={slideIn('left', "tween", 0, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className='heading text-center hover:text-[#57ebff] duration-[0.7s]'>Socials</motion.h1>

        <motion.div variants={slideIn('left', "slideIn", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}>
          <Link href="https://www.youtube.com/@DevanshBhardwajDB" className='flex flex-row gap-5 justify-center items-center hover:scale-[1.15] duration-500 cursor-pointer' target="_blank">

            <img src={"/assets/icons/yt.png"} alt={"Logo"} width={30} height={30} className='invert' />
            <p className='font-teachers font-semibold text-base text-gray-200'>Subscribe to my Youtube channel</p>
          </Link>
        </motion.div>
        <motion.div variants={slideIn('left', "tween", 0.1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}>
          <Link href="https://www.linkedin.com/in/devansh-bhardwaj-98771b239/" target="_blank" className='flex flex-row gap-5 justify-center items-center hover:scale-[1.15] duration-500 cursor-pointer'>

            <img src={"/assets/icons/linkedin.png"} alt={"Logo"} width={30} height={30} className='invert' />
            <p className='font-teachers font-semibold text-base text-gray-200'>Follow me on LinkedIn</p>
          </Link>
        </motion.div>
        <motion.div variants={slideIn('left', "tween", 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}>
          <Link href="https://github.com/devanshbhardwajdb" target="_blank" className='flex flex-row gap-5 justify-center items-center hover:scale-[1.15] duration-500 cursor-pointer'>

            <img src={"/assets/icons/github.png"} alt={"Logo"} width={30} height={30} className='invert' />
            <p className='font-teachers font-semibold text-base text-gray-200'>Check out my Github</p>
          </Link>
        </motion.div>

        <motion.div variants={slideIn('left', "tween", 0.3, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}>
          <Link href="https://www.instagram.com/devanshbhardwaj_db/" className='flex flex-row gap-5 justify-center items-center hover:scale-[1.15] duration-500 cursor-pointer' target="_blank">

            <img src={"/assets/icons/insta.png"} alt={"Logo"} width={30} height={30} className='invert' />
            <p className='font-teachers font-semibold text-base text-gray-200'>Follow me on Instagram</p>
          </Link>
        </motion.div>

        <motion.div variants={slideIn('left', "tween", 0.4, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}>
          <Link href="https://www.facebook.com/devanshbhardwajdb" className='flex flex-row gap-5 justify-center items-center hover:scale-[1.15] duration-500   cursor-pointer' target="_blank">

            <img src={"/assets/icons/fb.png"} alt={"Logo"} width={30} height={30} className='invert' />
            <p className='font-teachers font-semibold text-base text-gray-200'>Follow me on Facebook</p>
          </Link>
        </motion.div>

        <motion.div variants={slideIn('left', "tween", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}>
          <Link href="https://twitter.com/i/flow/login?redirect_after_login=%2FDevansh06122166" className='flex flex-row gap-5 justify-center items-center hover:scale-[1.15] duration-500 cursor-pointer' target="_blank">

            <img src={"/assets/icons/twitter.png"} alt={"Logo"} width={30} height={30} className='invert' />
            <p className='font-teachers font-semibold text-base text-gray-200'>Follow me on Twitter</p>
          </Link>
        </motion.div>
      </motion.div>

    </div>
  )
}

export default Form
