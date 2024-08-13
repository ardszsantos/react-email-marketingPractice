import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo-text'>LOGO</div>
      </header>
      <div className='heroContainer'>
        <p className='heroText' >Email Template</p>
        <img src="heroContainer.png" alt='hero-image' />
        <p className='heroSubText'>
          Boost your emaisl with Blush! Create dope emails easy and fast!
          Install the Blush plugin to customize all the illustrations!
        </p>
        <button className='heroButton'>
          <a className='buttonA' href='#'>Try it now!</a>
        </button>
        
        <div className='secondHeroSection'>
          <img src="hero2image.png"/> 
          <div className="ndTextWrapper">
            <p className='secondHeroText'>Customize this email template!</p>
            <p className="secondHeroSubText">Boost your emails with Blush! Create dope emails easy and fast!</p>
            <button className='secondHeroButton'>
              <a className='buttonA' href='#'>Try it now!</a>
            </button>
          </div>
        </div>
        <div className='secondHeroSection'>
          <img src="hero2image.png"/> 
          <div className="ndTextWrapper">
            <p className='secondHeroText'>Customize this email template!</p>
            <p className="secondHeroSubText">Boost your emails with Blush! Create dope emails easy and fast!</p>
            <button className='secondHeroButton'>
              <a className='buttonA' href='#'>Try it now!</a>
            </button>
          </div>
        </div>
        <div className='thirdHeroSection'>
          <div className="thirdTextWrapper">
            <p className='thirdHeroText'>Customize this email template!</p>
            <p className="thirdHeroSubText">Boost your emails with Blush! Create dope emails easy and fast!</p>
            <button className='secondHeroButton'>
              <a className='buttonA' href='#'>Try it now!</a>
            </button>
          </div>
          <img className='thirdImage' src="amigss.png"/> 
        </div>
        <div className='thirdHeroSection'>
          <img src="avatar.png"/> 
          <div className="ndTextWrapper">
            <p className='secondHeroText'>Customize this email template!</p>
            <p className="secondHeroSubText">Boost your emails with Blush! Create dope emails easy and fast!</p>
            <button className='secondHeroButton'>
              <a className='buttonA' href='#'>Try it now!</a>
            </button>
          </div>
        </div>
        <div className='lastSection'>
          <p className='lastSectionText'>
          Boost your emails with Blush! Create dope emails easy and fast!
          Install the Blush plugin to customize all the illustrations!
          </p>
          <p className='lastSectionText2'>
            Create the coolest emails!
          </p>
          <hr className='horizontalLine'/>
          <footer className='footerSection'>
            <div className='info'>

              <p className='infoText'>Corporation</p>
              <p className='infoText'> You are receiving this email because you opted in via our website.</p>
              <img className='socialLinks' src="socialContainer.png"/>
              <p className='infoText'>Address, #PC</p>
              <p className='infoText'>City, State.</p>
              <p className='infoTextUns'>Unsubscribe</p>
            </div>
            <div className='logo-text'>LOGO</div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
