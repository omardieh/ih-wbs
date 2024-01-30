import './App.css';
import logo from './assets/discord-logo-white.png'
import menuIcon from './assets/menu-icon.png'
import discordBackground from './assets/discord-background.png'

function App() {

  return (
    <div className="App">
      <nav>
        <img src={logo}  alt="discord logo" className="discord-logo"/>
        <img src={menuIcon} alt="menu icon" className="menu-icon"/>
      </nav>

      <header class="hero-header">
        <h1>Imagine a place...</h1>
        <p>
        ...where you can belong to a school club, a gaming group, or a worldwide art community. 
        Where just you and a handful of friends can spend time together. 
        A place that makes it easy to talk every day and hang out more often.
        </p>

        <div className="hero-buttons">
          <button className="hero-button btn-white">Download for Windows</button>
          <button className="hero-button btn-black">Open Discord in your browser</button>
        </div>

        <img src={discordBackground} alt="discord background" className="discord-background"/>
      </header>


    </div>
  )
}

export default App;
