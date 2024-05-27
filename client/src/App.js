import React, { Component } from "react";
import EvidenceContract from "./contracts/Evidence.json";
import getWeb3 from "./getWeb3";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Usersignin from "./Usersignin";
import Usersignup from "./Usersignup";
import Dashboard from "./Dashboard";
import Policesignup from "./Policesignup";
import Policedashboard from "./Policedashboard";
import Searchevidence from "./Searchevidence";
import EditEvidenceForm from "./EditEvidenceForm";
import EvidenceList from "./EvidenceList";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = EvidenceContract.networks[networkId];
      const instance = new web3.eth.Contract(
        EvidenceContract.abi,
        deployedNetwork && deployedNetwork.address
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  render() {
    const { contract } = this.state; // Extract contract instance from state

    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/signup" element={<Usersignup />} />
            <Route path="/signin" element={<Usersignin />} />
            <Route
              path="/dashboard"
              element={<Dashboard contract={this.state.contract} />}
            />
            <Route path="/policesignup" element={<Policesignup />} />
            <Route path="/policedashboard" element={<Policedashboard />} />
            <Route
              path="/searchevi"
              element={<Searchevidence contract={this.state.contract} />}
            />
            <Route
              path="/editevie"
              element={<EditEvidenceForm contract={this.state.contract} />}
            />
            <Route
              path="/evilist"
              element={<EvidenceList contract={this.state.contract} />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
