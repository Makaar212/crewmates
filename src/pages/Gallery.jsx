import { useEffect, useState } from 'react'
import { supabase } from '../client'

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
      <p>You have {crewmates.length} crewmates.</p>
    </div>
  )
}

export default Gallery
