import React from "react";
import styles from "./Checkbox.module.css";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={styles.flexcol}>
        <div className={styles.flexrow}>
          <input type="checkbox" />
          <p className={styles.textmargin}>Continent</p>
        </div>
        <div className={styles.flexrow}>
          <input type="checkbox" />
          <p className={styles.textmargin}>Climat</p>
        </div>
        <div className={styles.flexrow}>
          <input type="checkbox" />
          <p className={styles.textmargin}>Population</p>
        </div>
      </div>
    );
  }
}

export default Checkbox;
