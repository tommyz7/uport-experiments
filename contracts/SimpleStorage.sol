pragma solidity ^0.4.17;

contract SimpleStorage {
  uint storedData;

  event StorageUpdate(uint value);

  constructor() public {
    storedData = 10;
  }

  function set(uint x) public {
    storedData = x;
    emit StorageUpdate(x);
  }

  function get() public view returns (uint) {
    return storedData;
  }
}
