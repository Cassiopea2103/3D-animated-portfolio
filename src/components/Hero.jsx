import { motion } from "framer-motion";

import { styles } from '../styles' ; 
import { ComputersCanvas } from './canvas' ; 

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`${ styles.paddingX } absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">

                    <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
                    <div className="w-1 sm:h80 h-40 violet-gradient" />
                </div>

                <div>
                    <h1 className={`${ styles.heroHeadText } text-white`}>
                        Hello over there 🙂 ! 
                        I am <span className="text-[#915eff]">&nbsp;Cassiopea</span>
                    </h1>
                    <p className={`${ styles.heroSubText } mt-2 text-white-100 `}>
                        I'm a computer science engineering student💻 @EPT, a Junior DevOps intern @InTouch SA &
                        a Cloud computing☁️ and DevOps⚙ enthusiast .
                    </p>
                </div>
            </div>

            <ComputersCanvas/>

                {/* animated scroll button */}
                <div className="absolute z-50 xs:bottom-72 sm:bottom-80 xl:bottom-6  w-full flex justify-center items-center">
                    <a href="#about">
                        <div className="w-[34px] h-[64px] rounded-2xl border-4 border-secondary flex justify-center items-start p-2">
                            <motion.div
                                animate = {{ y : [ 0, 24 , 0 ] }}
                                transition = {{
                                    duration : 1.5 , 
                                    repeat : Infinity , 
                                    repeatType : 'loop'
                                }}
                                
                                className="w-3 h-3 rounded-full bg-violet-800 mb-1"
                            />
                        </div>
                    </a>
                </div>
            
        </section>
    )
}

export default Hero