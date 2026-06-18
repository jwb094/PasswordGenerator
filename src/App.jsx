import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [password, SetPassword] = useState("");
  const [includeLength, setIncludeLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setNumbers] = useState(false);
  const [includeSpecialCharacters, setSpecialCharacters] = useState(false);

  const handleLengthChange = (e) => {
    setIncludeLength(e.target.value);
  };
  const handleUpperCaseCheckboxChange = (e) => {
    setIncludeUppercase(e.target.checked);
  };
  const handleLowerCaseCheckboxChange = (e) => {
    setIncludeLowercase(e.target.checked);
  };
  const handleNumbersCheckboxChange = (e) => {
    setNumbers(e.target.checked);
  };
  const handleSpecialCharactersCheckboxChange = (e) => {
    setSpecialCharacters(e.target.checked);
  };



  function handleSubmit(e) {
    e.preventDefault();
    let characterPool = "";
    let generatedPassword = "";

    if (includeUppercase) {
      characterPool += 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    }
    if (includeLowercase) {
      characterPool += 'abcdefghijklmnopqrstuvwxyz'.toLowerCase();
    }
    if (includeNumbers) {
      characterPool += '0123456789';
    }
    if (includeSpecialCharacters) {
      characterPool += "!@#£$%^&*()_+-=[]{}|;:,.<>?,'";
    }


    for (let index = 0; index < includeLength; index++) {
      const randomIndex = Math.floor(
        Math.random() * characterPool.length
      );
      generatedPassword += characterPool[randomIndex];
    }
    SetPassword(generatedPassword);
  }

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
                      value={password}
                      readOnly
                    />

                    {/* <button
                      type="button"
                      className="btn btn-outline-secondary"
                    >
                      Copy
                    </button> */}
                  </div>
                </div>

                {/* Configuration Form */}
                <form onSubmit={handleSubmit}>

                  {/* Password Length */}
                  <div className="mb-4">
                    <label
                      htmlFor="passwordLength"
                      className="form-label fw-bold"
                    >
                      Password Length
                    </label>

                    <input
                      id="passwordLength"
                      type="number"
                      className="form-control"
                      min="4"
                      max="50"
                      value={includeLength}
                      onChange={handleLengthChange}
                    />
                  </div>

                  {/* Character Options */}
                  <fieldset className="mb-4">
                    <legend className="fs-6 fw-bold">
                      Include Characters
                    </legend>

                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="uppercase"
                        checked={includeUppercase}
                        onChange={handleUpperCaseCheckboxChange}
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
                        checked={includeLowercase}
                        onChange={handleLowerCaseCheckboxChange}
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
                        onChange={handleNumbersCheckboxChange}
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

                        onChange={handleSpecialCharactersCheckboxChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="special"
                      >
                        Special Characters (!@#$%^&*)
                      </label>
                    </div>
                  </fieldset>

                  {/* Generate Password */}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Generate Password
                    </button>
                  </div>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
