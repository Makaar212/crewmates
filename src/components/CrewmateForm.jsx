function CrewmateForm({ crewmate, setCrewmate }) {
  const handleChange = (event) => {
    const { name, value } = event.target
    setCrewmate((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form className="crewmate-form">
      <label className="form-label" htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        className="name-input"
        placeholder="Enter crewmate's name"
        value={crewmate.name}
        onChange={handleChange}
        required
      />
    </form>
  )
}

export default CrewmateForm
