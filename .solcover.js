// .solcover.js
// Configuration STRICTE pour coverage SkinNFT uniquement

module.exports = {
    // STRICTEMENT SkinNFT.sol
    include: ["contracts/SkinNFT.sol"],
    
    // EXCLURE TOUT LE RESTE - configuration agressive
    skipFiles: [
      "contracts/mocks/**/*.sol",
      "contracts/interfaces/**/*.sol", 
      "contracts/test/**/*.sol",
      "**/mocks/**",
      "**/interfaces/**",
      "**/Mock*.sol",
      "**/IPricefeed.sol",
      "**/PriceFeedMock*.sol"
    ],
    
    // Tester UNIQUEMENT SkinNFT
    testCommand: "npx hardhat test test/*SkinNFT*.ts",
    
    // Configuration stricte
    istanbulReporter: ["text"],
    silent: false,
    skipEmptyLines: true,
    
    // Forcer l'exclusion
    configureYulOptimizer: false,
    measureStatementCoverage: true,
    measureBranchCoverage: true,
    measureFunctionCoverage: true,
};