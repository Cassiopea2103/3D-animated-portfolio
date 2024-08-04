import { Tilt } from "react-tilt"; 
import { motion } from "framer-motion" ; 
import { fadeIn, textVariant } from "../utils/motion";

import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";


// PorjectCard component : 
const ProjectCard = ({ index , name , description , tags , image , source_code_link  }) => {
    return ( 
        <motion.div
            variants={fadeIn ("up" , "spring" , 0.5*index , 0.75 )}
        >
            <Tilt
                options = {{
                    max : 45 , 
                    scale : 1 , 
                    speed : 450 
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full flex flex-col flex-1 h-full"
            >
                <div className="relative w-full h-[230px]">
                    <img
                        src= { image } 
                        alt= { name }
                        className="w-full h-full object-cover rounded-2xl"
                    />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open ( source_code_link, "_blank" )}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >   
                            <img 
                                src={ github } 
                                alt = "github source code" 
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white text-[24px] font-bold"> { name } </h3>
                    <p className="mt-2 text-secondary text-14px"> { description } </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {
                        tags.map ( 
                            ( tag ) => (
                                <p 
                                    key = { tag.name } 
                                    className={`text-[14px] ${tag.color}`}
                                >
                                    #{ tag.name }
                                </p>
                            )
                        )
                    }
                </div>
            </Tilt>
        </motion.div>
    )
}

const Works = () => {
    return (
        <>
            <motion.div
                variants={textVariant()}
                className={ `mt-4`}
            >
                <p className={ styles.sectionSubText}>My work</p>
                <h2 className={ styles.sectionHeadText}>Projects</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={ fadeIn ("" , "" , 0.1 , 1 ) }
                    className="mt-3 max-w-3xl text-secondary text-[17px] leading-[30px]"
                >
                    The followind showcases my skills and experience through real-world projects .
                    Each project is briefly described with links to repositories .
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {
                    projects.map ( 
                        ( project, index ) => (
                            <ProjectCard 
                                key= { `project-${index}` }
                                index = { index }
                                {...project}
                            />
                        )
                    )
                }
            </div>
        </>
    )
}

export default SectionWrapper ( Works , "")