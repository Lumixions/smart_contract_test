# RTTT Skill Test - Grading Guide

**For Evaluators Only - Do not share with candidates**

## Evaluation Checklist

### 1. Test Coverage (40 points)

#### Deployment Tests (5 points)
- [ ] Contract deployment test
- [ ] Owner verification
- [ ] Initial state checks (status, values)

#### Minting Tests (10 points)
- [ ] Successful mint with valid inputs
- [ ] Duplicate name rejection
- [ ] Insufficient payment rejection
- [ ] Status check (not minting)
- [ ] Threshold check
- [ ] Event emission
- [ ] Token ID increment
- [ ] Name tracking
- [ ] State updates (total_tickets_remaining, vrf_funds)

#### Status Management (5 points)
- [ ] Owner can start minting
- [ ] Owner can start elimination
- [ ] Non-owner rejection
- [ ] State transitions

#### Elimination Tests (8 points)
- [ ] Elimination trigger
- [ ] Status validation
- [ ] Rank assignment
- [ ] Array updates
- [ ] Event emission
- [ ] Completion detection

#### Reward Claim Tests (7 points)
- [ ] Successful claim
- [ ] Status validation
- [ ] Owner validation
- [ ] Double claim prevention
- [ ] Reward calculation
- [ ] Event emission

#### Admin Functions (5 points)
- [ ] All setter functions
- [ ] Withdrawal functions
- [ ] Access control

### 2. Test Quality (30 points)

#### Structure (10 points)
- [ ] Well-organized describe blocks
- [ ] Logical test grouping
- [ ] Clear test names
- [ ] Proper use of beforeEach/setup

#### Code Quality (10 points)
- [ ] Clean, readable code
- [ ] Proper variable naming
- [ ] Good comments where needed
- [ ] No code duplication

#### Best Practices (10 points)
- [ ] Proper use of Chai matchers
- [ ] Event testing with .to.emit()
- [ ] Revert testing with .to.be.revertedWith()
- [ ] Proper use of connect() for different signers
- [ ] Value handling (parseEther, etc.)

### 3. Correctness (20 points)

- [ ] Tests accurately verify contract behavior
- [ ] Assertions are correct
- [ ] Edge cases are handled properly
- [ ] No false positives/negatives

### 4. Completeness (10 points)

- [ ] All major functions tested
- [ ] Edge cases covered
- [ ] Security considerations addressed
- [ ] View functions tested

## Common Issues to Watch For

### Positive Indicators
✅ Tests are well-structured and organized
✅ Good use of beforeEach for setup
✅ Comprehensive edge case coverage
✅ Proper event testing
✅ Access control thoroughly tested
✅ Clear test descriptions

### Negative Indicators
❌ Tests skip important functionality
❌ Poor test organization
❌ Missing edge cases
❌ Incorrect assertions
❌ No event testing
❌ Missing access control tests
❌ Hardcoded values without explanation

## VRF Handling

Since VRF requires mocking, acceptable approaches:
- Manual fulfillment via `rawFulfillRandomWords` (if accessible)
- Mock contracts for LinkToken and VRFWrapper
- Skipping VRF-dependent tests with explanation
- Testing elimination logic separately from VRF

**Don't penalize** for VRF complexity if candidate shows understanding of testing principles elsewhere.

## Scoring Rubric

### Excellent (90-100 points)
- Comprehensive test coverage
- Excellent code quality
- All major scenarios tested
- Proper testing patterns
- Good edge case coverage

### Good (75-89 points)
- Good test coverage
- Solid code quality
- Most scenarios tested
- Some edge cases missing
- Minor issues with structure

### Satisfactory (60-74 points)
- Basic test coverage
- Acceptable code quality
- Core functionality tested
- Missing some edge cases
- Some structural issues

### Needs Improvement (<60 points)
- Incomplete test coverage
- Poor code quality
- Many scenarios untested
- Missing critical tests
- Significant structural issues

## Example Good Test Structure

```typescript
describe("Minting", function () {
  beforeEach(async function () {
    // Setup: ensure contract is in minting state
  });

  it("Should allow users to mint with valid name and sufficient payment", async function () {
    // Arrange
    const name = "TestName";
    const mintCost = MINT_PRICE + VRF_COST;
    
    // Act & Assert
    await expect(rttt.connect(user1).mint(name, { value: mintCost }))
      .to.emit(rttt, "Mint")
      .withArgs(user1Address, ...);
    
    expect(await rttt.ownerOf(1)).to.equal(user1Address);
    expect(await rttt.namesTaken(name)).to.be.true;
  });

  it("Should fail with duplicate name", async function () {
    // First mint
    await rttt.connect(user1).mint("TestName", { value: TOTAL_MINT_COST });
    
    // Second mint with same name should fail
    await expect(
      rttt.connect(user2).mint("TestName", { value: TOTAL_MINT_COST })
    ).to.be.revertedWith("Name is already taken!");
  });
});
```

## Notes

- Focus on **quality over quantity** - better to have fewer well-written tests than many poor ones
- **Understanding** is more important than perfect implementation
- Look for **testing mindset** - do they think about edge cases?
- **Code organization** shows experience level

## Questions to Consider

1. Does the candidate understand the contract?
2. Are tests logically organized?
3. Do they test both success and failure cases?
4. Are edge cases considered?
5. Is the code maintainable?
6. Do they follow testing best practices?

Good luck evaluating!
