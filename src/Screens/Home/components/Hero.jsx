import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

function Hero() {
    const {theme, setTheme} = useContext(ThemeContext)

  return (
    <div className='my-10 flex flex-col items-center gap-5'>
        <h2 className="text-3xl text-center font-bold">Top 20 Productivity Ideas for your next startup</h2>
        <h2 className="text-center my-3">
            <strong className="text-secondary">Like Your Favorite Idea.</strong> Write your best Ideas, No account needed!
        </h2>
        <select 
            onChange={(event) => setTheme(event.target.value)}
            className="select select-bordered border-primary w-full max-w-xs"
            >
            <option disabled selected>Select Theme</option>
            <option>light</option>
            <option>dark</option>
            <option>cupcake</option>
            <option>bumblebee</option>
            <option>emerald</option>
            <option>corporate</option>
            <option>synthwave</option>
            <option>retro</option>
            <option>cyberpunk</option>
            <option>valentine</option>
            <option>halloween</option>
            <option>garden</option>
            <option>winter</option>
        </select>
    </div>
  )
}

export default Hero