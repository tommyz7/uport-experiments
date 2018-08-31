pragma solidity ^0.4.17;

contract SimpleStorage {
  uint storedData;

  constructor() public {
    storedData = 10;
  }

  function set(uint x) public {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
}
