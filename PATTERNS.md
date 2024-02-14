# PATTERNS

## Sliding Window

What is it?

- A window of `n` length that slides to the right based on `x`, `y`, `z`.

Example:

- `[x x x]` x x x x x x
- x `[x x x]` x x x x x
- x x `[x x x]` x x x x

What do I use it for?

- subarrays
- substrings
- subX matching

## Two Pointers or Iterators

What is it?

- Use two pointers that itterate through a collection until they meet a condition

Example:

- `[x]` x x x x x x x `[x]`
- x `[x]` x x x x `[x]` x
- x `[x]` x x x `[x]` x x

What do I use it for?

- find pairs, triplets, or subarrays on sorted collections

## Fast and Slow Pointers (Floyd's Tortoise and Hare algorithm)

What is it?

- Similar to Two Pointers.
- Pointer 1 (P1) moves 1 step at a time while Pointer 2 (P2) moves twice as fast. Addittionaly, P2 starts on position 1 while P1 starts at position 0.

Example:

- Step 1
  - `[P1]` x x x x x x x
  - x `[P2]` x x x x x x
- Step 2
  - x `[P1]` x x x x x x
  - x x x `[P2]` x x x x
- Step 3
  - x x `[P1]` x x x x x
  - x x x x x `[P2]` x x
- etc...

What do I use it for?

- Finding a cycle in a linked list

Known Issues

- This is not a fullproof method.
- If the distance between the cycle is an odd number, P1 and P2 will never meet.
- Consider using a collection of seen nodes instead

## Merge Intervals

What is it?

- Combination of Two Pointers and a Window
- Does Window 1 (W1) and Window 2 (W2) overlap at all?

Example:

- No: `[x x x]` x x x x `(x x)`
- No: x `[x x x]` `(x)` x x x x
- Yes: x `[x x (x] x)` x x x x
- Yes: x `[x (x x)]` x x x x x

What do I use it for?

- If you see the word "overlapping" in the problem.

### Cyclic Sort

What is it?

- Sorting algorithm with O(n) time
- This assumes that our collection is complete from `1` to `n`

Example:

- `[2]` `(6)` 4 3 1 5
  - `2` is at index 1 therefore swap
  - is swap-num `6` at correct position?
    - no -> perform swap and move swap-num forward
- `[6]` 2 `(4)` 3 1 5
  - `6` is at index 1 therefore swap
  - is swap-num `4` at correct position?
    - no -> perform swap and move swap-num forward
- `[4]` 2 6 `(3)` 1 5
  - `4` is at index 1 therefore swap
  - is swap-num `3` at correct position?
    - no -> perform swap and move swap-num forward
- `[3]` 2 6 4 `(1)` 5
  - `3` is at index 1 therefore swap
  - is swap-num `1` at correct position?
    - no -> perform swap and move swap-num forward
- `[1]` 2 6 4 3 `(5)`
  - `1` is at index 1 therefore move forward
- 1 `[2]` 6 4 3 `(5)`
  - `2` is at index 2 therefore move forward
- 1 2 `[6]` 4 3 `(5)`
  - `6` is at index 3 therefore swap
  - is swap-num `5` at correct position?
    - no -> perform swap and move swap-num forward
    - swap-num === arr.length therefore reset swap-num
- 1 2 `[5]` `(4)` 3 6
  - `5` is at index 3 therefore swap
  - is swap-num `4` at correct position?
    - no -> perform swap and move swap-num forward
- 1 2 `[4]` 5 `(3)` 6
  - `4` is at index 3 therefore swap
  - is swap-num `3` at correct position?
    - no -> perform swap and move swap-num forward
- 1 2 `[3]` 5 `(4)` 6
  - `3` is at index 3 therefore move forward
- 1 2 3 `[5]` `(4)` 6
  - `5` is at index 4 therefore swap
  - is swap-num `4` at correct position?
    - no -> perform swap and move swap-num forward
- 1 2 3 `[4]` `(5)` 6
  - `4` is at index 4 therefore move forward
- 1 2 3 4 `[5]` `(6)`
  - `5` is at index 5 therefore move forward
- 1 2 3 4 5 `[6]`
  - `6` is at index 6 therefore move forward
  - 6 === arr.length therefore arr is sorted.

What do I use it for?

- Sort complete collection.
- Find missing nums in a collection.

### In-place reversal of linked list

What is it?

- xyz

Example:

- xyz

What do I use it for?

- xyz

### X

What is it?

- xyz

Example:

- xyz

What do I use it for?

- xyz

## Sources

[14 Patterns to Ace Any Coding Interview Question](https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed)
[Floyd's Tortoise and Hare Algorithm: Finding a Cycle in a Linked List](https://dev.to/alisabaj/floyd-s-tortoise-and-hare-algorithm-finding-a-cycle-in-a-linked-list-39af)
[Coding Pattern: Cyclic Sort](https://blog.stackademic.com/coding-pattern-cyclic-sort-96511b0f60ac)
