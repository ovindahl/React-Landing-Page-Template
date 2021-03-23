export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-12'>
            <div className='about-text'>
              <h2>Hvorfor Holdingservice?</h2>
              <p>{props.data ? props.data.paragraph1 : 'loading...'}</p>
              <p>{props.data ? props.data.paragraph2 : 'loading...'}</p>
              <p>{props.data ? props.data.paragraph3 : 'loading...'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
