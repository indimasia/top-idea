import React from 'react'
import Header from '../Home/components/Header'
import { ChevronLeft, Info, Send } from 'lucide-react'

export default function AddNewScreen() {
  return (
    <div>
      <Header/>
      <button className="btn mt-7">
        <ChevronLeft />
        Back
      </button>
      <h2 className="font-bold text-2xl mt-5">From Concept to Creation : Empowering your startup journey</h2>
      <div className="flex flex-col mt-7 gap-2">
        <label htmlFor="idea">Your Idea *</label>
        <textarea id="idea" className="p-2 textarea textarea-bordered border-primary" rows="5" placeholder='write your idea'></textarea>
      </div>
      <div className="flex flex-col mt-7 gap-2">
        <label htmlFor="username" className='flex flex-row justify-between'>
          Your Username *
          <span className="flex items-center gap-2 text-sm"><Info className='h-4 w-4'/> No Account Needed</span>
        </label>
        <input type="text" name="" id="" placeholder='Username' className='input input-bordered w-full border-primary'/>
      </div>

      <button className="btn w-full btn-primary mt-7">
        Send
        <Send className="w-4 h-4"/>
      </button>
    </div>
  )
}
