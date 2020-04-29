import React from "react";
import axios from "axios";
import CardCity from "./CardCity";

class CityInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: [],
    };
    this.getCity = this.getCity.bind(this);
  }

  componentDidMount() {
    this.getCity();
  }

  getCity() {
    const url =
      // "https://api.windy.com/api/webcams/v2/list/continent=NA?key=M2vrvYvmbS4ocLVfAScw1tVNvHp7ySbr/";
      "https://api.windy.com/api/webcams/v2/list/country=DE?key=JL07MzvXKKw4PytFeBQOclm38TMYggLM";
    axios.get(url).then((res) => {
      const data = res.data;
      this.setState({ city: data.result.webcams[0] });
      console.log(data);
    });
  }
  render() {
    return (
      <div>
        {/* <h2>{this.state.city}</h2>
        {this.state.city.map((city) => {
          return <CardCity {...city} key={city.id} />;
        })} */}
        <CardCity id={this.state.city.id} title={this.state.city.title} />
        {this.state.city}
      </div>
    );
  }
}

export default CityInfo;
