import {BallCanvas} from './canvas' ; 
import { SectionWrapper} from '../hoc';

import { technologies } from '../constants' ; 


const Tech = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center gap-6'>
            {
                technologies.map ( 
                    ( technology ) => (
                        <div 
                            key = { technology.name }
                            className='w-24 h-24'
                        >
                            <BallCanvas icon = { technology.icon } />
                        </div>
                    )                
                )
            }
        </div>
    )
}


export default SectionWrapper ( Tech , "")