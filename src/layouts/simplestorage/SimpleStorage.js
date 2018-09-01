import React, { Component } from 'react'
import TruffleContract from 'truffle-contract' 
import * as SimpleStorageJSON from '../../../build/contracts/SimpleStorage.json'
import { web3 } from '../../util/connectors'

class SimpleStorage extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props

    this.state = {storedData: null, SimpleStorage: null, newStorageValue: ""}

    this.handleStorageUpdate = this.handleStorageUpdate.bind(this)
  }

  componentDidMount() {
    // const SimpleStorageContract = artifacts.require("./SimpleStorage.sol");
    // let SimpleStorageContract = web3.eth.contract(SimpleStorageJSON.abi);
    // console.log(SimpleStorageC)
    // let SimpleStorage = SimpleStorageC.at(SimpleStorageJSON.networks[4].address)
    let SimpleStorage = TruffleContract(SimpleStorageJSON)
    SimpleStorage.setProvider(web3.currentProvider);
    SimpleStorage = SimpleStorage.at(SimpleStorageJSON.networks[4].address)
    this.setState({ SimpleStorage })
    SimpleStorage.get().then((result) => {this.setState({storedData: result.toNumber()})})
  }

  updateInputValue(e) {
    this.setState({
      newStorageValue: e.target.value
    });
  }

  handleStorageUpdate(e) {
    e.preventDefault()
    let SimpleStorage = this.state.SimpleStorage
    web3.eth.getCoinbase((error, coinbase) => {
      SimpleStorage.set(this.state.newStorageValue, {from: coinbase}).then((result) => {
        this.setState({storedData: result.logs[0].args.value.toNumber()})
      });
    })
    
  }

  render() {
      return (
          <div>
            <div>SimpleStorage value: {this.state.storedData}</div>
            <div>Update storage value to: <input value={this.state.newStorageValue} onChange={(e) => this.updateInputValue(e)} /><button onClick={this.handleStorageUpdate}>Update</button></div>
          </div>
      )
  }
}

export default SimpleStorage