import React from 'react'

function IdeaItem({idea, index}) {
  return (
    <div className='my-5 p-5 border shadow-lg rounded-lg'>
      <div className=" flex gap-7 justify-between">
        <h2 className='flex gap-2'><span>{index+1}. </span>{idea.content}</h2>
        <div className='flex flex-col items-center'>
          <h2 className="text-lg hover:bg-gray-200 rounder-md p-1 cursor-pointer px-2 rounded-md">🔥</h2>
          <h2 className="text-lg rounder-md p-1 ">{idea.voted}</h2>
          <h2 className="text-lg hover:bg-gray-200 rounder-md p-1 cursor-pointer px-2 rounded-md">👎</h2>
        </div>
      </div>
      <h2 className="mt-4 text-gray-400 text-sm pl-5">
        By @{idea.username} at {idea.createdAt}
      </h2>
    </div>
  )
}

export default IdeaItem