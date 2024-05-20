import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, fadeIn2, slideIn, slideIn2, staggerContainer, textVariant, textVariant1 } from "@/utils/motion";
import Link from 'next/link';
import { contactItems } from '@utils/contact';

const Socials = ({ }) => {
    return (
        <div className='flex flex-wrap  gap-3 items-center justify-center h-20 w-full'>
            {contactItems.map((item) => (



                <motion.div key={item.id} variants={slideIn('left', "tween", 0, 0.5)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}>
                    <Link href={item.link} target="_blank" className={` flex flex-row gap-5 justify-center items-center hover:scale-[1.15] duration-500 cursor-pointer black-gradient rounded-full h-16 w-16 hover:shadow-lg hover:shadow-[${item.shadow}] `} style={{
                        boxShadow: `0 1px 20px ${item.shadow}`
                    }}>
                        <img src={item.image} alt="Logo" className='w-32 p-4' />
                        {/* <p className='font-poppins font-semibold text-base text-gray-200'>{item.text}</p> */}
                    </Link>
                </motion.div>
            ))}
        </div>

    )
}

export default Socials