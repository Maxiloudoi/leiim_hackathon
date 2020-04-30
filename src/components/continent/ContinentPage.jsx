import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ContinentPage extends React.Component {
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
    const url = `https://api.windy.com/api/webcams/v2/list/continent=${this.props.match.params.codeContinent}?key=JL07MzvXKKw4PytFeBQOclm38TMYggLM`;
    axios.get(url).then((res) => {
      const data = res.data;
      this.setState({ cities: data.result.webcams });
    });
  }
  render() {
    const { codeContinent } = this.props.match.params;
    return (
      <div>
        <Link to="/">
          <button type="button" class="btn btn-outline-info">
            Retour à la map monde
          </button>
        </Link>
        <h2 className="text-center">...Quelques villes...</h2>
        {this.state.cities.map((city) => {
          return (
            <Link to={`/${codeContinent}/${city.id}`}>
              <div
                lg="4"
                className="card text-info bg-secondary mb-3 mx-auto"
                style={{
                  width: "30vw",
                }}
              >
                <li class="list-group-item text-center" key={city.id}>
                  {city.title}
                </li>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default ContinentPage;
