import React from "react";
import axios from "axios";
import CardCity from "./CardCity";

class CityInfo extends React.Component {
  constructor({ id }) {
    super({ id });
    this.state = {
      city: [],
    };
    this.getCity = this.getCity.bind(this);
  }

  componentDidMount() {
    this.getCity();
  }
  getCity() {
    const url = `https://api.windy.com/api/webcams/v2/list/webcam=${id}?show=webcams:image,location,player&key=JL07MzvXKKw4PytFeBQOclm38TMYggLM`;
    axios.get(url).then((res) => {
      const data = res.data;
      this.setState({ city: data.result.webcams[0] });
      console.log(data);
    });
  }
  render() {
    return (
      <div>
        <img></img>
      </div>
    );
  }
}

export default CityInfo;
