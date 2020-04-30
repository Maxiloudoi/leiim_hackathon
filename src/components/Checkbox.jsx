import React from "react";
import styles from "./Checkbox.module.css";

class Checkbox extends React.Component {
  render() {
    return (
      <div className={styles.flexcol}>
        <div className={styles.flexrow}>
          <h5 className={styles.titlecolor}>Map Info</h5>
        </div>
        <div className={styles.flexrow}>
          <input type="checkbox" onClick={this.props.handleOnClickCont} />
          <p className={styles.textmargin}>Continents</p>
        </div>

        <div className={styles.flexrow}>
          <input type="checkbox" onClick={this.props.handleOnClickClim} />
          <p className={styles.textmargin}>Climat</p>
        </div>

        <div className={styles.flexrow}>
          <input type="checkbox" onClick={this.props.handleOnClickPop} />
          <p className={styles.textmargin}>Population</p>
        </div>
      </div>
    );
  }
}

export default Checkbox;
