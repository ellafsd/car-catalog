import type { FC } from 'react'
import type { Car } from '../../types';
import { motion } from "motion/react";


interface Props {
    car: Car;
}
const Info: FC<Props> = ({ car }) => {
    const arr = [
        {
            icon: "/steering-wheel.svg",
            text: car?.trany.includes("Automatic") ? "Automatic" : "Manual",
        },
        {
            icon: "/tire.svg",
            text: car?.drive  || "Unknown",
        },
        {
            icon: "/calendar.svg",
            text: car?.year || "Unknown",
        },
    ]

    // animation
    const variants = {
        hidden: {
            opacity: 0,
            y: 50,
        },

        visible: {
            opacity: 1,
            y: 0,
        },
    };
    return (
        <div className='grid grid-cols-3 w-full mt-4'>
            {arr.map((item, index) => (
                <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    variants={variants}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center gap-2 text-center px-2">
                    <img src={item.icon} width={25} height={25} />
                    <p className="text-s text-gray-300 leading-tight">{item.text}</p>
                </motion.div>

            ))}
        </div>
    )
}
export default Info