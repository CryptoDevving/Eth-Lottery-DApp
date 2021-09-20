import "./App.css";
import React from "react";

import web3 from './web3';
import lotteryContract from './lottery';

class App extends React.Component {

  state = { // Don't forget to initialize state
    manager: '' 
  };

  async componentDidMount() {
    const contractManager = await lotteryContract.methods.manager().call(); // Get current address of manager then add to state

    this.setState({ manager: contractManager });
  };

  render() {

    web3.eth.getAccounts()
      .then(console.log(`Web3 version: ${web3.version}`));

      // Test console logs
      console.log(this.state.manager);

    return (
      <div>
        <h2>Eth-Lottery</h2>
        <p>Lottery manager: <strong>{this.state.manager}</strong></p>
      </div>
    );
  }
}

export default App;

