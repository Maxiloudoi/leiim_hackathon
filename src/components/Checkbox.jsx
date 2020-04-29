import React from "react";
import styles from "./Checkbox.module.css";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = { continents: false, climat: false, population: false };

    this.handleOnClickCont = this.handleOnClickCont.bind(this);
    this.handleOnClickClim = this.handleOnClickClim.bind(this);
    this.handleOnClickPop = this.handleOnClickPop.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  handleOnClickCont() {
    this.setState({ continents: !this.state.continents });
  }
  handleOnClickClim() {
    this.setState({ climat: !this.state.climat });
  }
  handleOnClickPop() {
    this.setState({ population: !this.state.population });
  }

  render() {
    return (
      <div className={styles.flexcol}>
        <div className={styles.flexrow}>
          <input type="checkbox" onClick={this.handleOnClickCont} />
          <p className={styles.textmargin}>Continents</p>
        </div>

        <div className={styles.flexrow}>
          <input type="checkbox" onClick={this.handleOnClickClim} />
          <p className={styles.textmargin}>Climat</p>
        </div>

        <div className={styles.flexrow}>
          <input type="checkbox" onClick={this.handleOnClickPop} />
          <p className={styles.textmargin}>Population</p>
        </div>
      </div>
    );
  }
}

export default Checkbox;
