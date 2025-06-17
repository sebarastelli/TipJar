// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TipJar {
    address public owner;

    event NewTip(address indexed from, uint amount, string message);

    constructor() {
        owner = msg.sender;
    }

    function tip(string memory message) public payable {
        require(msg.value > 0, "Tip must be greater than 0");
        emit NewTip(msg.sender, msg.value, message);
    }

    function withdraw() public {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }
}