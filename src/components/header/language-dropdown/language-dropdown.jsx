import React, { Component } from "react";
import styles from "./language-dropdown.module.scss";
import { headerConfig } from "../header.config";
import { LanguageDropdownRow } from "./language-dropdown-row";
import arrow from "../../../img/arrow_icon_lang.svg";

export default class LanguageDropdown extends Component {
  state = {
    selectedLang: "UA",
    isOpened: false,
  };

  toggleDropdown = () => this.setState({ isOpened: !this.state.isOpened });

  onRowSelect = (selectedLang) =>
    this.setState({
      selectedLang: selectedLang.toUpperCase(),
      isOpened: false,
    });

  renderDropdown = () => {
    const { selectedLang } = this.state;

    const dropdownRows = headerConfig.langDropdown.filter(
      (el) => el.shortcut !== selectedLang
    );

    return dropdownRows.map((el) => (
      <LanguageDropdownRow onSelect={this.onRowSelect} {...el} />
    ));
  };

  renderSelected = () => {
    const { selectedLang, isOpened } = this.state;

    const selected = headerConfig.langDropdown.filter(
      (el) => el.shortcut === selectedLang
    );

    return (
      <div className={styles.selected} onClick={this.toggleDropdown}>
        <img className={styles.flag} src={selected[0].imgSrc} alt="flag" />
        <span>{selected[0].shortcut}</span>
        <img
          className={[styles.arrow, isOpened ? styles.up : ""].join(" ")}
          src={arrow}
          alt="arrow"
        />
      </div>
    );
  };

  render() {
    const { isOpened } = this.state;

    return (
      <div className={styles.container}>
        {this.renderSelected()}
        {isOpened && (
          <div className={styles.dropdown}>{this.renderDropdown()}</div>
        )}
      </div>
    );
  }
}
