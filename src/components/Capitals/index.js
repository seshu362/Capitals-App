import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    activeCaptialId: countryAndCapitalsList[0].id,
  }

  onChangeCapitals = event => {
    this.setState({activeCaptialId: event.target.value})
  }

  getCountry = () => {
    const {activeCaptialId} = this.state
    const activeCaptialAndCountry = countryAndCapitalsList.find(
      eachCaptial => eachCaptial.id === activeCaptialId,
    )
    return activeCaptialAndCountry.country
  }

  render() {
    const {activeCaptialId} = this.state
    const country = this.getCountry(activeCaptialId)
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading"> Countries And Captials</h1>
          <div className="question-container">
            <select
              className="select-item"
              onChange={this.onChangeCapitals}
              value={activeCaptialId}
            >
              {countryAndCapitalsList.map(eachCaptial => (
                <option
                  className="option"
                  key={eachCaptial.id}
                  value={eachCaptial.id}
                >
                  {eachCaptial.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
