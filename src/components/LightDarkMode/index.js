import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    color: 'black',
    headingColor: 'white-heading',
    mode: 'light Mode',
    borderColor: '',
  }

  onLightDarkMode = () => {
    const {color, headingColor, mode, borderColor} = this.state
    if (
      color === 'black' &&
      headingColor === 'white-heading' &&
      mode === 'light Mode' &&
      borderColor === ''
    ) {
      this.setState({color: 'white'})
      this.setState({headingColor: 'black-heading'})
      this.setState({mode: 'Dark Mode'})
      this.setState({borderColor: 'black-border'})
    } else {
      this.setState({color: 'black'})
      this.setState({headingColor: 'white-heading'})
      this.setState({mode: 'Light Mode'})
    }
  }

  render() {
    const {color, headingColor, mode, borderColor} = this.state

    return (
      <div className="container">
        <div className={`card-container ${color}`}>
          <h1 className={`heading ${headingColor}`}>Click To Change Mode</h1>
          <button
            className={`button ${borderColor}`}
            onClick={this.onLightDarkMode}
          >
            {mode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
