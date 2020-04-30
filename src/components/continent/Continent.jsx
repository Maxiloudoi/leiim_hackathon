import React from "react";
import axios from "axios";
import { Link, BrowserRouter as Router } from "react-router-dom";

class Continent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      codeContinent: "",
    };
  }
  componentDidMount() {
    this.getContinent();
  }
  getContinent() {
    const url = `https://api.windy.com/api/webcams/v2/list/continent=${codeContinent}?key=JL07MzvXKKw4PytFeBQOclm38TMYggLM`;
    axios.get(url).then((res) => {
      const data = res.data;
      this.setState({ cities: data.result.webcams });
    });
  }
  render() {
    return (
      <div>
        {/* <img
          className={this.displayImg !== codeContinent ? "displayImgOff" : ""}
        /> */}
        {this.state.cities.map((city) => {
          return (
            <Router>
              <Link to="/continent/:id">
                <li key={city.id}>{city.title}</li>
              </Link>
            </Router>
          );
        })}
      </div>
    );
  }
}

export default Continent;
