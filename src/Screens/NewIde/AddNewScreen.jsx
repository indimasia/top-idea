import React from 'react'
import Header from '../Home/components/Header'
import { ChevronLeft, Info, Send } from 'lucide-react'
import moment from 'moment'
import { addItem } from '../../../utils/dbOperations'
import { useNavigate } from 'react-router-dom'

export default function AddNewScreen() {
  const [idea, setIdea] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [showAlert, setShowAlert] = React.useState(false)
  const [existingUsername, setExistingUsername] = React.useState(false)
  const navigation = useNavigate()

  React.useEffect(() => {
    const username = localStorage.getItem('username')
    if(username) {
      setExistingUsername(true)
      setUsername(username)
    }
  } , [])

  const handleSubmit = async () => {
    const result = await addItem({
      content : idea,
      username : username,
      voted : 0,
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss')
    })

    if(result) {
      localStorage.setItem('username', username)
      setShowAlert(true)
      setIdea('')
      setExistingUsername(true)

      setTimeout(() => {
        setShowAlert(false)
      }, 3000)
    }
  }

  return (
    <div>
      <Header/>
      <button className="btn mt-7" onClick={() => navigation('/')}>
        <ChevronLeft />
        Back
      </button>
      { showAlert &&
        <div role="alert" className="alert alert-success mt-5 text-white shadow-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Congratulation your idea is save successfully!</span>
        </div>
      }
      <h2 className="font-bold text-2xl mt-5">From Concept to Creation : Empowering your startup journey</h2>
      <div className="flex flex-col mt-7 gap-2">
        <label htmlFor="idea">Your Idea *</label>
        <textarea value={idea} id="idea" onChange={(event) => setIdea(event.target.value)} className="p-2 textarea textarea-bordered border-primary" rows="5" placeholder='write your idea'></textarea>
      </div>
      { !existingUsername &&
        <div className="flex flex-col mt-7 gap-2">
          <label htmlFor="username" className='flex flex-row justify-between'>
            Your Username *
            <span className="flex items-center gap-2 text-sm"><Info className='h-4 w-4'/> No Account Needed</span>
          </label>
          <input type="text" name="" onChange={(event) => setUsername(event.target.value)} value={username} id="" placeholder='Username' className='input input-bordered w-full border-primary'/>
        </div>
      }

      <button className="btn w-full btn-primary mt-7"
        disabled={!(idea&&username)}
        onClick={handleSubmit}
        >
        Send
        <Send className="w-4 h-4"/>
      </button>
    </div>
  )
}
