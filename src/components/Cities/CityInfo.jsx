import React from "react";
import axios from "axios";
import { Spinner } from "reactstrap";

import CardCity from "./CardCity";

class CityInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityDetail: [],
            id: "",
            loading: true,
        };
        this.getCity = this.getCity.bind(this);
    }

    componentDidMount() {
        this.getCity();
    }
    getCity() {
        const url = `https://api.windy.com/api/webcams/v2/list/webcam=${this.props.match.params.id}?show=webcams:image,location,player&key=JL07MzvXKKw4PytFeBQOclm38TMYggLM`;
        axios
            .get(url)
            .then((res) => {
                const data = res.data;
                this.setState({ cityDetail: data.result.webcams[0] });
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            })
            .finally(() => {
                this.setState({ loading: false });
            });
    }

    // 200 404 400 401 403 201
    render() {
        if (this.state.loading) {
            return (
                <div>
                    <Spinner />
                </div>
            );
        }
        return (
            <div>
                <CardCity
                    id={this.state.cityDetail.id}
                    image={this.state.cityDetail.image.current.preview}
                    title={this.state.cityDetail.title}
                    wiki={this.state.cityDetail.location.wikipedia}
                    player={this.state.cityDetail.player.lifetime.embed}
                />
            </div>
        );
    }
}

export default CityInfo;
