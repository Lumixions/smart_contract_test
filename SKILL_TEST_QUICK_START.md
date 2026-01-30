# Quick Start Guide - RTTT Skill Test

## Setup (2 minutes)

1. **Verify dependencies are installed**:
   ```bash
   pnpm install
   ```

2. **Compile contracts**:
   ```bash
   pnpm hardhat compile
   ```

## Test Structure

- **Contract to test**: `contracts/RTTT.sol` (already exists)
- **Test file**: `test/RTTT.test.ts` (template provided - you need to implement)
- **Framework**: Hardhat with Chai matchers

## Time Management (30 minutes total)

- **5 min**: Read and understand RTTT.sol contract
- **20 min**: Implement test cases in `test/RTTT.test.ts`
- **5 min**: Run tests, fix issues, verify coverage

## Running Tests

Run all tests:
```bash
pnpm test:hardhat
```

Run only RTTT tests:
```bash
pnpm hardhat test test/RTTT.test.ts
```

Run with coverage:
```bash
pnpm hardhat coverage
```

## Key Contract Functions to Test

### Core Functions
- `mint(string memory name_)` - Mint NFT with name
- `startElimination(...)` - Start elimination phase
- `eliminate()` - Trigger elimination
- `fulfillRandomWords(...)` - Handle VRF callback
- `claimreward(uint16 ticketId)` - Claim rewards

### Admin Functions
- `startMinting()` - Start minting phase
- `setPrice(uint p)` - Set mint price
- `setVRFCost(uint p)` - Set VRF cost
- `withdrawAdmin()` - Withdraw admin funds
- `withdrawVRFFunds()` - Withdraw VRF funds

### View Functions
- `getTime()` - Get current timestamp
- `tokenURI(uint256 tokenId)` - Get token URI
- `baseURIFromTokenId(uint256 tokenId)` - Get base URI

## Testing Tips

1. **VRF Mocking**: The contract uses Chainlink VRF. You may need to:
   - Use mock contracts for LinkToken and VRFV2Wrapper
   - Manually call `rawFulfillRandomWords` to simulate VRF responses
   - Or skip VRF-dependent tests and focus on other functionality

2. **Test Structure**: 
   - Use `beforeEach` for setup
   - Group related tests in `describe` blocks
   - Use meaningful test names

3. **Assertions**:
   - Use `expect(...).to.equal(...)` for values
   - Use `expect(...).to.be.revertedWith(...)` for reverts
   - Use `expect(...).to.emit(...)` for events

4. **Value Handling**:
   - Use `ethers.parseEther()` for ETH amounts
   - Remember: `price + vrf_cost` is required for minting

5. **Status Enum**:
   - `STATUS.stopped = 0`
   - `STATUS.minting = 1`
   - `STATUS.eliminations = 2`
   - `STATUS.finished = 3`

## Common Patterns

```typescript
// Send ETH with transaction
await rttt.connect(user1).mint("TestName", { value: TOTAL_MINT_COST });

// Check event emission
await expect(rttt.connect(user1).mint("TestName", { value: TOTAL_MINT_COST }))
  .to.emit(rttt, "Mint")
  .withArgs(user1Address, ...);

// Check revert
await expect(rttt.connect(user1).mint("TestName", { value: MINT_PRICE }))
  .to.be.revertedWith("Insufficient mint value!");

// Get contract value
const balance = await ethers.provider.getBalance(await rttt.getAddress());
```

## What's Provided

- ✅ RTTT.sol contract (existing)
- ✅ Hardhat configuration
- ✅ Test file template with test structure
- ✅ All dependencies

## What You Need to Do

- ❌ Implement all test cases in `test/RTTT.test.ts`
- ❌ Set up mocks for VRF (if needed)
- ❌ Ensure all tests pass
- ❌ Test edge cases and security

## Focus Areas

Prioritize these test categories:
1. **Minting** (most important - core functionality)
2. **Status Management** (critical for state transitions)
3. **Admin Functions** (access control)
4. **View Functions** (easier, good for coverage)
5. **Elimination & Rewards** (complex, may need VRF mocking)

Good luck!
