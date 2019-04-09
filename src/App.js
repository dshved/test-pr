import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Dialog from "./components/Dialog";
import Table from "./components/Table";

import { getCountryes } from "./utils/api";

import "./App.css";

class App extends Component {
  state = {
    regions: [],
    data: [],
    detail: {},
    open: false,
  };
  async componentDidMount() {
    const regions = await getCountryes();
    this.setState({
      regions,
    });
  }

  handleClickOpen = country => {
    this.setState({
      open: true,
      detail: country,
    });
  };

  handleClose = value => {
    this.setState({ open: false });
  };

  renderRegions() {
    const { regions } = this.state;
    return regions.map((region, id) => {
      const countries = [];
      return (
        <section key={id}>
          {region[1].map((country, id) => {
            countries.push(country);
            return false;
          })}
          <Table
            data={countries}
            onCountrySelect={this.handleClickOpen}
            region={region[0]}
          />
          <br />
        </section>
      );
    });
  }
  render() {
    const { regions, detail } = this.state;
    return (
      <div className="wrapper">
        <header>
          <Typography align="center" component="h1" variant="h2" gutterBottom>
            World Regions
          </Typography>
        </header>
        <main>
          {regions.length === 0 ? <LinearProgress /> : this.renderRegions()}
        </main>
        <Dialog
          open={this.state.open}
          detail={detail}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default App;
