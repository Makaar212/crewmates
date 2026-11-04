import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Home">
      <h1>Welcome to the Crewmate Creator!</h1>
      <p className="home-tagline">
        Build your crew and send them off into space.
      </p>
      <p className="home-description">
        Give each crewmate a name, a role, and a color. Then check on your
        whole crew in the gallery, see what each member is up to, and make
        changes whenever you need to.
      </p>
      <div className="home-actions">
        <Link to="/create" className="submit-button">
          Create a Crewmate
        </Link>
        <Link to="/gallery" className="edit-button">
          View Your Crew
        </Link>
      </div>
    </div>
  )
}

export default Home
