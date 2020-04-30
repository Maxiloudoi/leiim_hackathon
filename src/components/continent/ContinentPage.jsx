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
                {this.state.cities.map((city) => {
                    return (
                        <Link to={`/${codeContinent}/${city.id}`}>
                            <li key={city.id}>{city.title}</li>
                        </Link>
                    );
                })}
            </div>
        );
    }
}

export default ContinentPage;
