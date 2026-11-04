import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../client'
import CrewmateForm from '../components/CrewmateForm'

function EditCrewmate() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [crewmate, setCrewmate] = useState({ name: '', role: '', color: '' })
  const [savedCrewmate, setSavedCrewmate] = useState(null)

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        console.error('Could not load crewmate:', error.message)
        return
      }

      setCrewmate(data)
      setSavedCrewmate(data)
    }

    fetchCrewmate()
  }, [id])

  const updateCrewmate = async (event) => {
    event.preventDefault()

    const { name, role, color } = crewmate
    const { data, error } = await supabase
      .from('crewmates')
      .update({ name, role, color })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      alert(`Could not update crewmate: ${error.message}`)
      return
    }

    setCrewmate(data)
    setSavedCrewmate(data)
  }

  const deleteCrewmate = async () => {
    if (!window.confirm(`Are you sure you want to delete ${crewmate.name}?`)) {
      return
    }

    const { error } = await supabase.from('crewmates').delete().eq('id', id)

    if (error) {
      alert(`Could not delete crewmate: ${error.message}`)
      return
    }

    navigate('/gallery')
  }

  return (
    <div className="EditCrewmate">
      <h1>Update Your Crewmate</h1>
      {savedCrewmate && (
        <div className="current-stats">
          <h3>Current Info</h3>
          <p>
            {savedCrewmate.name} · {savedCrewmate.role || 'Unassigned'} ·{' '}
            {savedCrewmate.color || 'None'}
          </p>
        </div>
      )}
      <CrewmateForm
        crewmate={crewmate}
        setCrewmate={setCrewmate}
        onSubmit={updateCrewmate}
        submitLabel="Update Crewmate"
      >
        <button type="button" className="delete-button" onClick={deleteCrewmate}>
          Delete Crewmate
        </button>
      </CrewmateForm>
    </div>
  )
}

export default EditCrewmate
