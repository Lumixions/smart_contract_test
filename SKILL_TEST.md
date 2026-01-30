# Smart Contract Development Skill Test

**Time Limit: 30 minutes**

## Objective

You are tasked with writing comprehensive tests for the `RTTT.sol` (RiseToTheTop) contract using the Hardhat testing framework. The contract is located at `contracts/RTTT.sol`.

## Instructions

1. **Review the Contract**: Study the `RTTT.sol` contract to understand its functionality
2. **Write Tests**: Complete the test file `test/RTTT.test.ts` with comprehensive test cases
3. **Run Tests**: Ensure all tests pass using `pnpm test:hardhat`

## Contract Overview

The `RiseToTheTop` contract is an ERC721 NFT contract with the following key features:

- **Minting**: Users can mint NFTs by providing a unique name and paying a fee
- **Status Management**: Contract has different states (stopped, minting, eliminations, finished)
- **Elimination System**: Uses Chainlink VRF for random elimination of tickets
- **Reward System**: Winners can claim rewards based on their final rank
- **Admin Functions**: Owner can manage prices, wallets, and contract state

## Test Requirements

You must write tests covering the following scenarios:

### 1. Deployment Tests
- [ ] Contract deploys successfully
- [ ] Initial state is correct (status = minting)
- [ ] Owner is set correctly

### 2. Minting Tests
- [ ] Users can mint with valid name and sufficient payment
- [ ] Minting fails with duplicate name
- [ ] Minting fails with insufficient payment
- [ ] Minting fails when status is not minting
- [ ] Minting fails when mint threshold is reached
- [ ] Events are emitted correctly
- [ ] Token IDs increment correctly
- [ ] Names are tracked correctly

### 3. Status Management Tests
- [ ] Owner can start minting
- [ ] Owner can start elimination phase
- [ ] Non-owner cannot change status
- [ ] Status transitions work correctly

### 4. Elimination Tests
- [ ] Elimination can be triggered during elimination phase
- [ ] Elimination fails when not in elimination phase
- [ ] VRF randomness is requested correctly
- [ ] Elimination updates ranks correctly
- [ ] Elimination events are emitted

### 5. Reward Claim Tests
- [ ] Users can claim rewards after eliminations finish
- [ ] Claiming fails before eliminations finish
- [ ] Claiming fails if not ticket owner
- [ ] Claiming fails if already claimed
- [ ] Rewards are calculated correctly based on rank

### 6. Admin Function Tests
- [ ] Owner can set price
- [ ] Owner can set VRF cost
- [ ] Owner can set admin wallet
- [ ] Owner can set VRF wallet
- [ ] Owner can withdraw admin funds
- [ ] Owner can withdraw VRF funds
- [ ] Non-owner cannot call admin functions

### 7. View Function Tests
- [ ] `getTime()` returns current block timestamp
- [ ] `tokenURI()` returns correct URI based on status and rank
- [ ] `baseURIFromTokenId()` returns correct base URI
- [ ] Balance queries work correctly

### 8. Edge Cases & Security
- [ ] Zero address checks
- [ ] Reentrancy protection (if applicable)
- [ ] Array bounds checking
- [ ] Overflow/underflow protection
- [ ] Access control enforcement

## Getting Started

1. **Install dependencies** (if needed):
   ```bash
   pnpm install
   ```

2. **Review the contract**:
   ```bash
   # Read contracts/RTTT.sol to understand the contract
   ```

3. **Create/Edit test file**:
   ```bash
   # Edit test/RTTT.test.ts
   ```

4. **Run tests**:
   ```bash
   pnpm test:hardhat
   # Or run specific test file:
   pnpm hardhat test test/RTTT.test.ts
   ```

## Hints

- Use `@nomicfoundation/hardhat-chai-matchers` for assertions
- Mock the VRF functionality if needed (the contract uses Chainlink VRF)
- Use `ethers.parseEther()` for value conversions
- Test events using `.to.emit()` matcher
- Use `connect(signer)` to test from different addresses
- Remember to test both success and failure cases

## Evaluation Criteria

- **Test Coverage (40%)**: All major functions and edge cases tested
- **Test Quality (30%)**: Tests are well-structured, readable, and follow best practices
- **Correctness (20%)**: Tests accurately verify contract behavior
- **Completeness (10%)**: All required test scenarios are covered

## Notes

- The contract uses Chainlink VRF which may require mocking in tests
- Focus on testing the contract logic, not the VRF integration itself
- Use the existing Hardhat configuration and framework
- You may need to create mock contracts for VRF if testing requires it

## Submission

Once complete:
- All tests should pass
- Code should compile without errors
- Tests should follow Hardhat/Chai best practices

Good luck!
