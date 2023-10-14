import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';

import { CustomButton } from '../components';

import state from '../store';

const Home = () => {
    const snap = useSnapshot(state);

  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className="home" {...slideAnimation('left')}>
                <motion.header {...slideAnimation("down")}>
                    <img src='./threejs.png' alt='logo' className='w-120 h-20 object-contain' />
                </motion.header>
                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text' style={{ fontSize: '90px' }}>
                            Al-lure 🤖✨👕
                        </h1>
                        <span style={{ fontStyle: 'italic', fontWeight: 'lighter' }}> - (ai.lure intended as allure(noun): the quality of being powerfully and mysteriously attractive or fascinating)</span>
                    </motion.div>
                    <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                        <p className='max-w-lg font-normal text-gray-600 text-base'>
                            Have one or many design idea(s)? Out of ideas? Wondering how your design will look? <br></br><strong>With one click - unleash your imagination</strong>, explore limitless possibilities and define your own style.
                        </p>
                        <CustomButton
                            type='filled'
                            title='Customize It'
                            handleClick={() => state.intro = false}
                            customStyles='w-fit px-4 py-2.5 font-bold text-sm'
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home