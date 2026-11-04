import { useState } from 'react'
import CrewmateForm from '../components/CrewmateForm'

function CreateCrewmate() {
  const [crewmate, setCrewmate] = useState({ name: '', role: '', color: '' })

  return (
    <div className="CreateCrewmate">
      <h1>Create a New Crewmate</h1>
      <CrewmateForm crewmate={crewmate} setCrewmate={setCrewmate} />
    </div>
  )
}

export default CreateCrewmate
