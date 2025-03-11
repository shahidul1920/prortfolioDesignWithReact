import React from 'react'
import { motion } from 'framer-motion'

export default function AnimeTest() {
return (
    <div>
        <motion.div className='bg-slate-900 h-[40vh] grid place-items-center'>
            <motion.div 
                initial={{ rotate: 0 }} 
                animate={{ rotate: 360 }} 
                transition={{ duration: 2, ease: "linear", repeat: Infinity }} 
                className='size-[200px] bg-sky-200'>
            </motion.div>
        </motion.div>
    </div>
)
}
