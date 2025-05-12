import img1 from '../images/2025.png'
import img2 from '../images/2024.png'
import { useState } from 'react'

const images = [img1, img2]
const buttonStyle = "text-[60px] p-1 rounded-full shadow bg-white-80"

export function Carousel() {
    const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr) => curr === 0 ? images.length - 1 : curr - 1)
    const next = () => setCurr((curr) => curr === images.length - 1 ? 0 : curr + 1)


}

export default Carousel
