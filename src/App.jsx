import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="card shadow">
              <div className="card-header text-center">
                <h2 className="mb-0">Password Generator</h2>
              </div>

              <div className="card-body">

                {/* Password Display */}
                <div className="mb-4">
                  <label className="form-label fw-bold">
                    Generated Password
                  </label>

                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value="X7$gT9!qP2"
                      readOnly
                    />

                    <button className="btn btn-outline-secondary">
                      Copy
                    </button>
                  </div>
                </div>

                {/* Password Length */}
                <div className="mb-4">
                  <label className="form-label fw-bold">
                    Password Length
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    min="4"
                    max="50"
                    defaultValue="12"
                  />
                </div>

                {/* Character Options */}
                <div className="mb-4">
                  <label className="form-label fw-bold d-block">
                    Include Characters
                  </label>

                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="uppercase"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="uppercase"
                    >
                      Uppercase Letters (A-Z)
                    </label>
                  </div>

                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="lowercase"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="lowercase"
                    >
                      Lowercase Letters (a-z)
                    </label>
                  </div>

                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="numbers"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="numbers"
                    >
                      Numbers (0-9)
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="special"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="special"
                    >
                      Special Characters (!@#$%^&*)
                    </label>
                  </div>
                </div>

                {/* Generate Button */}
                <div className="d-grid">
                  <button className="btn btn-primary btn-lg">
                    Generate Password
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
