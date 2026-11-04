import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="status-message">
      <p>This crewmate was ejected... or never existed.</p>
      <Link to="/gallery" className="submit-button">
        Back to the gallery
      </Link>
    </div>
  )
}

export default NotFound
