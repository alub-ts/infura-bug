import React from "react";
import Web3 from "web3";
import { TerminalHttpProvider, SourceType } from "@terminal-packages/sdk";

const prodAPI = "Z0CsA9B5xAkCjfw0kcKh6g==";
const prodProjectID = "RAqPOBVGxWjYGedk";

const web3 = new Web3(
  new TerminalHttpProvider({
    apiKey: prodAPI,
    projectId: prodProjectID,
    source: "Infura",
    host: "https://ethereum-rpc.trustwalletapp.com"
  })
);

function App() {
  const test = () => {
    web3.eth.getAccounts((err, accounts) =>
      web3.eth.sendTransaction({
        from: accounts[0],
        to: accounts[0],
        value: web3.utils.toWei("0", "ether")
      })
    );
  };
  return (
    <div className="App">
      <button onClick={() => test()}>Test Button</button>
    </div>
  );
}

export default App;
