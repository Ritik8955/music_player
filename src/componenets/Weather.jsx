import React from 'react'
import "./Weather.css";
function Weather() {
  return (
   <div>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous" />
  <div className="frame">
    <div className="moon">
      <div className="moon-crater1" />
      <div className="moon-crater2" />
    </div>
    <div className="hill-bg-1" />
    <div className="hill-bg-2" />
    <div className="hill-fg-1" />
    <div className="hill-fg-2" />
    <div className="hill-fg-3" />
    <div className="front">
      <div>
        <div className="temperature">
          12°
        </div>
        <div className="icons">
          <i className="fas fa-wind" /><br /><i className="fas fa-tint" />
        </div>
        <div>
          <div className="info">
            E 7 km/h <br /> 87%
          </div>
          <table className="preview">
            <tbody>
              <tr>
                <td>Tue</td>
                <td>21° | 9°</td>
              </tr>
              <tr>
                <td>Wed</td>
                <td>23° | 10°</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="proverb">“Frogs croaking in the lagoon,<br />Means rain will come real soon.”</div>
    </div>
    <div className="drop-big-1" />
    <div className="drop-big-2" />
    <div className="drop-big-3" />
    <div className="drop-big-4" />
    <div className="drop-big-5" />
    <div className="drop-big-6" />
    <div className="drop-big-7" />
    <div className="drop-big-8" />
    <div className="drop-big-9" />
    <div className="drop-big-10" />
    <div className="drop-medium-1" />
    <div className="drop-medium-2" />
    <div className="drop-medium-3" />
    <div className="drop-medium-4" />
    <div className="drop-medium-5" />
    <div className="drop-medium-6" />
    <div className="drop-medium-7" />
    <div className="drop-medium-8" />
    <div className="drop-medium-9" />
    <div className="drop-medium-10" />
    <div className="drop-small-1" />
    <div className="drop-small-2" />
    <div className="drop-small-3" />
    <div className="drop-small-4" />
    <div className="drop-small-5" />
    <div className="drop-small-6" />
    <div className="drop-small-7" />
    <div className="drop-small-8" />
    <div className="drop-small-9" />
    <div className="drop-small-10" />
  </div>
</div>



  )
}

export default Weather
