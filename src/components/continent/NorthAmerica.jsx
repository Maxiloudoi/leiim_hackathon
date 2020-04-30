import React from "react";
import axios from "axios";
import { Link, BrowserRouter as Router } from "react-router-dom";

class NorthAmerica extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: [],
    };
  }

  componentDidMount() {
    this.getContinent();
  }

  getContinent() {
    const url = `https://api.windy.com/api/webcams/v2/list/continent=NA?key=JL07MzvXKKw4PytFeBQOclm38TMYggLM`;
    axios.get(url).then((res) => {
      const data = res.data;
      this.setState({ city: data.result.webcams });
      console.log(data);
    });
  }
  render() {
    return (
      <div>
        {this.state.city.map((city) => {
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

export default NorthAmerica;
