import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../client'
import CrewmateCard from '../components/CrewmateCard'

function Gallery() {
  const [crewmates, setCrewmates] = useState([])

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Could not load crewmates:', error.message)
        return
      }

      setCrewmates(data)
    }

    fetchCrewmates()
  }, [])

  return (
    <div className="Gallery">
      <h1>Your Crewmate Gallery</h1>
      {crewmates.length > 0 ? (
        <div className="gallery-grid">
          {crewmates.map((crewmate) => (
            <CrewmateCard key={crewmate.id} crewmate={crewmate} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>You haven't made a crewmate yet!</p>
          <Link to="/create" className="submit-button">
            Create one here
          </Link>
        </div>
      )}
    </div>
  )
}

export default Gallery
