import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
export function FadeIn({children, delay=0, className='' }:{children:ReactNode;delay?:number;className?:string}) { return <motion.div className={className} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-40px'}} transition={{duration:.7,delay,ease:[.25,.1,.25,1]}}>{children}</motion.div> }
export function ContactButton(){ return <a className="contact-btn" href="#contact">Contact Me</a> }
export function Magnet({children}:{children:ReactNode}) { return <motion.div whileHover={{x:5,y:-5,scale:1.02}} transition={{type:'spring',stiffness:180,damping:14}}>{children}</motion.div> }
export function SectionTitle({children}:{children:ReactNode}) { return <h2 className="hero-heading section-title">{children}</h2> }
