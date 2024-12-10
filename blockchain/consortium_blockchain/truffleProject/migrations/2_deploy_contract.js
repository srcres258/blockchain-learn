const HelloWorld = artifacts.require("./HelloWorld.sol");

modules.exports = function(deployer) {
    deployer.deploy(HelloWorld, "HelloWorld");
};