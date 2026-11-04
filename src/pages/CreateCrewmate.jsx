import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../client'
import CrewmateForm from '../components/CrewmateForm'

function CreateCrewmate() {
  const [crewmate, setCrewmate] = useState({ name: '', role: '', color: '' })
  const navigate = useNavigate()

  const createCrewmate = async (event) => {
    event.preventDefault()

    const { error } = await supabase.from('crewmates').insert(crewmate)

    if (error) {
      alert(`Could not create crewmate: ${error.message}`)
      return
    }

    navigate('/gallery')
  }

  return (
    <div className="CreateCrewmate">
      <h1>Create a New Crewmate</h1>
      <CrewmateForm
        crewmate={crewmate}
        setCrewmate={setCrewmate}
        onSubmit={createCrewmate}
        submitLabel="Create Crewmate"
      />
    </div>
  )
}

export default CreateCrewmate
