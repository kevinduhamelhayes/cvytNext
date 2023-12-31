import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Introduction() {
    return (
        <div className="bg-[#131424]/60 min-h-full w-full z-10 ">
            <div className="w-full h-full bg-gradient-to-r from-[#131424]/10 via-black/30 to-black/10">
                <div className="container grid items-center h-full px-5 mx-auto pt-24 md:grid-cols-2 md:text-left">
                    <motion.div className=" w-auto h-auto mx-auto block"
                        variants={fadeIn('right', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <Image src="/assets/home-4.png" priority width="800" height="600" alt="Avatar" />
                    </motion.div>

                    <motion.div variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="flex flex-col items-center pb-16 justify-center w-full h-full text-white md:items-start"
                    >
                        <h1 className="mb-5 text-4xl leading-tight md:mb-10 text-center md:text-left">Si puedes pensarlo,  <br />
                            <span className="text-secondary text-center md:text-left">puedes programarlo</span></h1>
                        <p className="max-w-sm w-full text-center md:text-left  mb-10 text-xl md:max-w-2xl md:mx-0 md:mb-16 md:text-xl">
                        Soy un desarrollador frontend especializado en la creación de interfaces de usuario dinámicas y visualmente atractivas. Con dominio en tecnologías como React, Next.js y NextUI, y habilidades en CSS y HTML
                        </p>

                        <div className="flex flex-col items-center gap-3 md:gap-10 md:flex-row">
                            <a href="/projects" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-md hover:shadow-white/50">
                                Ver proyectos
                            </a>
                            <a href="/contact" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary rounded-xl hover:shadow-md hover:shadow-secondary">
                                Contacta conmigo
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
