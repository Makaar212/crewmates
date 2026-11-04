import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'
import { getColorHex, ROLE_DESCRIPTIONS } from '../constants/attributes'

function CrewmateDetail() {
  const { id } = useParams()
  const [crewmate, setCrewmate] = useState(null)

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
    }

    fetchCrewmate()
  }, [id])

  if (!crewmate) return null

  return (
    <div
      className="CrewmateDetail"
      style={{ '--crewmate-color': getColorHex(crewmate.color) }}
    >
      <div className="detail-header">
        <span className="detail-swatch" />
        <h1>{crewmate.name}</h1>
      </div>

      <div className="detail-stats">
        <p>
          <span>Role:</span> {crewmate.role || 'Unassigned'}
        </p>
        <p>
          <span>Color:</span> {crewmate.color || 'None'}
        </p>
      </div>

      <div className="detail-extra">
        <h3>About this crewmate</h3>
        <p>
          {ROLE_DESCRIPTIONS[crewmate.role] ??
            "This crewmate hasn't picked a role yet."}
        </p>
        <p className="detail-date">
          Joined the crew on{' '}
          {new Date(crewmate.created_at).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
    </div>
  )
}

export default CrewmateDetail
