import { Link } from 'react-router-dom'
import { getColorHex } from '../constants/attributes'

function CrewmateCard({ crewmate }) {
  return (
    <div
      className="crewmate-card"
      style={{ '--crewmate-color': getColorHex(crewmate.color) }}
    >
      <h3 className="card-name">
        <Link to={`/crewmate/${crewmate.id}`} className="card-link">
          {crewmate.name}
        </Link>
      </h3>
      <p className="card-attribute">
        <span>Role:</span> {crewmate.role || 'Unassigned'}
      </p>
      <p className="card-attribute">
        <span>Color:</span> {crewmate.color || 'None'}
      </p>
      <Link to={`/edit/${crewmate.id}`} className="edit-button">
        Edit
      </Link>
    </div>
  )
}

export default CrewmateCard
