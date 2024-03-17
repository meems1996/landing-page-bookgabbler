import logo from './love.png';
import heroImage from './heroImage.png';
import welcome from './welcome.png';
import React, { useState } from 'react';
import './App.css';
import Modal from 'react-modal';
import messaging from './internet.png';
import readingtime from './readingtime.png';
import readbook from './readbook.png';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <div className="whole-app">
    <div className="App">
      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          content: {
            color: 'rgb(238, 202, 220)',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            width: '50%',
            height: '50%',
            margin: 'auto',
            padding: '20px',
            borderRadius: '50px',
            border: '3px solid pink'
          }
        }}
      >
        <h2>Hi Isabella and Kayla! (& Daniella if you are reading this haha)</h2>
        <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center'}}><img src={welcome} className="App-welcome" alt="welcome" height='200px' /></div>
        <p style={{fontSize: '20px'}}>Thank you for taking the time to review my application. 🥰</p>
        <button 
          onClick={() => setModalIsOpen(false)}
          style={{
            backgroundColor: 'pink',
            color: 'black',
            padding: '10px',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer'
          }}
          // className="gradient-button"
        >Continue to page
        </button>
      </Modal>

    <div className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="app-name">BookGabbler</p>
    </div>

      <header className="App-header">
        <div style={{display: 'flex', flexDirection:'column', flexWrap: 'wrap', flex: 1}}>
          <p className="gradient-text">BookGabbler</p>
          <p className="subtitle">Where book conversations happen</p>
          <p className="subtitle">Combining the most beloved features from multiple existing social platforms into <span className="gradient-text-subtitle">one brand new social app exclusively for readers</span></p>
        </div>

        <div style={{flex: 1}}>
         <img src={heroImage} className="App-logos" alt="logo" />
        </div>

      </header>
    </div>

    <div style={{height: '400px', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      {/* two divs in a row */}
      <div style={{flexGrow: '1', display: 'flex', justifyContent:'flex-end', alignItems: 'center', margin: '10px', width: '100%', background: 'linear-gradient(to right, #9effff, #a0ffa0)', borderRadius: '70px', paddingRight: '10px'}}>
      <div style={{marginLeft: '10px', marginRight: '10px', width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <p className="subtitle-dark-bold" style={{fontSize: '30px'}}>Connect</p>
        <p className="subtitle-dark">Connect with readers from around the world. At first the application will only work in the US, but as we grow, we will become available to more people.</p>
      </div>
        <img src={messaging} style={{height:'70%'}} className="App-logos" alt="logo" />
      </div>

      <div style={{flexGrow: '1', display: 'flex', justifyContent:'flex-end', alignItems: 'center', margin: '10px', width: '100%', background: 'linear-gradient(to right, #ffe2fc, #f4b6ff)', borderRadius: '70px', paddingRight: '10px'}}>
      <div style={{marginLeft: '10px', marginRight: '10px', width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <p className="subtitle-dark-bold" style={{fontSize: '30px'}}>Find new reads</p>
        <p className="subtitle-dark">Escape your bubble of what you think you want to read and find new books. Or find new books based on tropes. All recommendations are by readers for readers.</p>
      </div>
        <img src={readbook} style={{height:'70%'}} className="App-logos" alt="logo" />
      </div>

      <div style={{flexGrow: '1', display: 'flex', justifyContent:'flex-end', alignItems: 'center', margin: '10px', width: '100%', background: 'linear-gradient(to right, #fff9e2, #ffefb6)', borderRadius: '70px', paddingRight: '10px'}}>
        <div style={{marginLeft: '10px', marginRight: '10px', width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <p className="subtitle-dark-bold" style={{fontSize: '30px'}}>Build a following</p>
          <p className="subtitle-dark"> Be able to build a following of fellow readers who connect with the books you love. Become an even stronger force as a book influencer. Showcase your readers books that are less known.</p>
        </div>
        <img src={readingtime} style={{height:'70%'}} className="App-logos" alt="logo" />
      </div>
      <div></div>
    </div>

    <div style={{height: '400px', width: '100%', display: 'flex', justifyContent:'center', alignItems: 'center', marginTop: '40px', backgroundColor:'rgb(26, 18, 30)' }}>
      <div style={{width: '50%', borderRadius: '0px', height: '80%'}}>
        <p className="gradient-text-subtitle" style={{fontSize: '40px', margin: '20px'}}>Why BookGabbler</p>
        <p className="subtitle" style={{margin: '20px'}}>We're building BookGabbler because people find solice and escapism in reading. There are absolutely no social platforms that tailor to readers that also include all the features we love from current popular social media apps. We will also be the first social media app to be paid by users, giving us the opportunity to be profitable.</p>
      </div>
    </div>
    </div>
  );
}

export default App;
