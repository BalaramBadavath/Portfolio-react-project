import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { RiGithubLine } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa';
import { RiDatabaseLine } from 'react-icons/ri';
import { RiJavascriptFill } from 'react-icons/ri';

import { motion } from 'framer-motion';

const iconVariable = (duration) =>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 whileInView={{y:0,opacity:1}} initial={{y:-100, opacity:0}} transition={{duration:1.5}} className='my-20 text-center text-4xl '>Technologies</motion.h1>
        <motion.div whileInView={{opacity:1,x:0}} initial={{x:-100,opacity:0}} transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div variants={iconVariable(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div variants={iconVariable(3.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiJavascriptFill className='text-7xl text-yellow-600'/>
            </motion.div>
            <motion.div variants={iconVariable(6)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div variants={iconVariable(4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiGithubLine className='text-7xl '/>
            </motion.div>
            <motion.div variants={iconVariable(4.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div variants={iconVariable(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiDatabaseLine className='text-7xl text-sky-700'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies