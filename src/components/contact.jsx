import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  company: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, company, message }, setState] = useState(initialState)

  const [isSubmitted, setState2] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = async e => {
    e.preventDefault()

    console.log({name, email, company, message})
    let response = await fetch("https://holdingservice.appspot.com/api/userSignup", {method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify( {name, email, company, message} )} )
    let parsedResponse = await response.json()
    console.log({parsedResponse})
    
    setState2(true)

  }

  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>{isSubmitted ? "Takk!" : "Bli kunde"} </h2>
                <p>{isSubmitted ? "Vi kommer tilbake til deg snart." : "Fyll ut skjemaet for å bli kunde, så kommer vi tilbake til deg så raskt som mulig."}</p>
              </div>
              {isSubmitted 
                ? <div></div>
                : <form name='sentMessage' onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Navn'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Epost'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='company'
                    id='company'
                    className='form-control'
                    rows='1'
                    placeholder='Selskapsnavn eller organisasjonsnummer (valgfritt)'
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Melding'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send
                </button>
              </form>}
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Kontaktinfo</h3>
              <p>Holdingservice AS</p>
              <p>Org.nr: 924777338 </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-linkedin'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2021 Holdingservice AS.
          </p>
        </div>
      </div>
    </div>
  )
}
