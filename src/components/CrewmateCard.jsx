import { getColorHex } from '../constants/attributes'

function CrewmateCard({ crewmate }) {
  return (
    <div
      className="crewmate-card"
      style={{ '--crewmate-color': getColorHex(crewmate.color) }}
    >
      <h3 className="card-name">{crewmate.name}</h3>
      <p className="card-attribute">
        <span>Role:</span> {crewmate.role || 'Unassigned'}
      </p>
      <p className="card-attribute">
        <span>Color:</span> {crewmate.color || 'None'}
      </p>
    </div>
  )
}

export default CrewmateCard
