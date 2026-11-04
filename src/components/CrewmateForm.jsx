import { ROLES, COLORS } from '../constants/attributes'

function CrewmateForm({ crewmate, setCrewmate, onSubmit, submitLabel, children }) {
  const handleChange = (event) => {
    const { name, value } = event.target
    setCrewmate((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form className="crewmate-form" onSubmit={onSubmit}>
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

      <fieldset className="attribute-group">
        <legend className="form-label">Role</legend>
        <div className="options roles">
          {ROLES.map((role) => (
            <label
              key={role}
              className={`option ${crewmate.role === role ? 'selected' : ''}`}
            >
              <input
                type="radio"
                name="role"
                value={role}
                checked={crewmate.role === role}
                onChange={handleChange}
              />
              {role}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="attribute-group">
        <legend className="form-label">Color</legend>
        <div className="options colors">
          {COLORS.map((color) => (
            <label
              key={color.name}
              className={`option ${crewmate.color === color.name ? 'selected' : ''}`}
            >
              <input
                type="radio"
                name="color"
                value={color.name}
                checked={crewmate.color === color.name}
                onChange={handleChange}
              />
              <span className="swatch" style={{ background: color.hex }} />
              {color.name}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="form-actions">
        <button type="submit" className="submit-button">
          {submitLabel}
        </button>
        {children}
      </div>
    </form>
  )
}

export default CrewmateForm
