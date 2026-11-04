import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'
import { getColorHex } from '../constants/attributes'

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
    </div>
  )
}

export default CrewmateDetail
