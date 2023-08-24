import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id="skills" className='text-white border-b-2 border-gray-500 h-auto min-h-[100vh] flex flex-col items-center justify-center heading py-40 px-[10vw]'>
      <h1 className='relative hover:text-[#57ebff] duration-500'>SKILLS</h1>
      <div className="flex flex-row  gap-[100px] justify-center flex-wrap mt-20 relative ">
        <div className="relative bg-white rounded-full flex items-center justify-center  ">
          <div className="box absolute  inset-y-[-10px] inset-x-[-12px] h-[115%] w-[115%] z-[-3]"></div>
          <Image src={"/assets/icons/node.svg"} width={160} height={150} className=' duration-500  cursor-pointer relative' />
        </div>


        <div className="relative bg-white rounded-full flex items-center justify-center ">
          <div className="box absolute  inset-y-[-10px] inset-x-[-12px] h-[115%] w-[115%] z-[-3]"></div>
          <Image src={"/assets/icons/mongodb.svg"} width={160} height={150} className=' duration-500  cursor-pointer scale-[80%]' />
        </div>

        <div className="relative bg-white rounded-full flex items-center justify-center ">
          <div className="box absolute  inset-y-[-10px] inset-x-[-12px] h-[115%] w-[115%] z-[-3]"></div>
          <Image src={"/assets/images/next.svg"} width={160} height={150} className='   duration-500 cursor-pointer' />
        </div>

        <div className="relative bg-white rounded-full flex items-center justify-center ">
          <div className="box absolute  inset-y-[-10px] inset-x-[-12px] h-[115%] w-[115%] z-[-3]"></div>
          <Image src={"/assets/icons/tailwind.svg"} width={160} height={150} className=' duration-500  cursor-pointer scale-[80%]' />
        </div>


        <div className="relative bg-white rounded-full flex items-center justify-center ">
          <div className="box absolute  inset-y-[-10px] inset-x-[-12px] h-[115%] w-[115%] z-[-3]"></div>
          <Image src={"/assets/icons/react.svg"} width={160} height={150} className='  duration-500 cursor-pointer scale-[80%]' />
        </div>

        <div className="relative bg-white rounded-full object-contain flex items-center justify-center  ">
          <div className="box absolute  inset-y-[-10px] inset-x-[-12px] h-[115%] w-[115%] z-[-3]"></div>

          <Image src={"/assets/icons/css.svg"} width={160} height={150} className='  duration-500 cursor-pointer scale-[80%]' />
        </div>


        <div className="relative bg-white rounded-full object-cover flex items-center justify-center  ">
          <div className="box absolute  inset-y-[-10px] inset-x-[-12px] h-[115%] w-[115%] z-[-3]"></div>
          <Image src={"/assets/icons/js2.svg"} width={180} height={150} className=' duration-500  cursor-pointer rounded-full bg-blend-multiply ' />
        </div>

        <div className="relative bg-white rounded-full flex items-center justify-center  ">
          <div className="box absolute  inset-y-[-10px] inset-x-[-12px] h-[115%] w-[115%] z-[-3]"></div>
          <Image src={"/assets/icons/git.svg"} width={160} height={150} className='  duration-500 cursor-pointer scale-[80%]' />
        </div>

        <div className="relative bg-white rounded-full flex items-center justify-center ">
          <div className="box absolute  inset-y-[-10px] inset-x-[-12px] h-[115%] w-[115%] z-[-3]"></div>
          <Image src={"/assets/icons/cpp.svg"} width={160} height={150} className='  duration-500 cursor-pointer scale-[80%]' />
        </div>


        <div className="relative bg-white rounded-full flex items-center justify-center ">
          <div className="box absolute  inset-y-[-10px] inset-x-[-12px] h-[115%] w-[115%] z-[-3]"></div>
          <Image src={"/assets/icons/python.svg"} width={160} height={150} className='  duration-500 cursor-pointer  scale-[80%]' />
        </div>
      </div>

    </div>
  )
}

export default Skills
