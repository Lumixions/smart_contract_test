# RTTT Smart Contract Testing Skill Test

## Overview

This is a **30-minute skill test** to evaluate smart contract testing capabilities. Candidates must write comprehensive tests for the existing `RTTT.sol` (RiseToTheTop) contract using the Hardhat framework.

## Test Objective

Write complete test coverage for the RTTT contract, including:
- Core functionality (minting, eliminations, rewards)
- Admin functions
- Edge cases and security
- State management
- Events

## Files

- **SKILL_TEST.md** - Detailed test requirements and instructions
- **SKILL_TEST_QUICK_START.md** - Quick setup and time management guide
- **test/RTTT.test.ts** - Test file template (candidates implement this)
- **contracts/RTTT.sol** - Contract to test (existing)

## Evaluation Criteria

1. **Test Coverage (40%)**: All major functions and scenarios tested
2. **Test Quality (30%)**: Well-structured, readable, follows best practices
3. **Correctness (20%)**: Tests accurately verify contract behavior
4. **Completeness (10%)**: All required test scenarios covered

## Key Challenges

1. **VRF Integration**: Contract uses Chainlink VRF which requires mocking
2. **State Management**: Multiple status transitions to test
3. **Complex Logic**: Elimination algorithm and reward calculation
4. **Access Control**: Owner vs user permissions

## Expected Deliverables

- Complete `test/RTTT.test.ts` file
- All tests passing
- Good test coverage of main functions
- Proper use of Hardhat/Chai testing patterns

## Notes for Evaluators

- Focus on test quality over quantity
- VRF mocking can be simplified (manual fulfillment is acceptable)
- Look for proper test structure and organization
- Check for edge case coverage
- Verify proper use of assertions and event testing

## Time Breakdown

- **5 min**: Understanding the contract
- **20 min**: Writing tests
- **5 min**: Running and fixing tests

## Getting Started

Candidates should:
1. Read `SKILL_TEST.md` for requirements
2. Review `contracts/RTTT.sol` to understand functionality
3. Implement tests in `test/RTTT.test.ts`
4. Run `pnpm test:hardhat` to verify

Good luck to all candidates!
