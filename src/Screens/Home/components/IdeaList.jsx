import React from 'react'
import IdeaItem from './IdeaItem'

function IdeaList({ideaList}) {
  return (
    <div>
        {ideaList.map((idea, index) => (
            <IdeaItem key={index} idea={idea} 
            index={index}/>
        ))}
    </div>
  )
}

export default IdeaList