# Daredevil Stunt Planner

This project includes a function designed to calculate the maximum area a daredevil can traverse on a tightrope between two buildings. The buildings are represented as an array of integers, where each integer signifies the height of a building.

## Function

The function `maxArea` takes an array of integers as input and returns the maximum area that can be traversed on a tightrope.

```typescript
function maxArea(height: number[]): number {
  // function body
}
```

## Usage

Here are some examples demonstrating how to use the `maxArea` function:

```typescript
const areaExample = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(areaExample); // Output: 49
```

## Constraints

<li>`2 <= n <= 105`</li>
<li>`n == height.length`</li>
<li>`0 <= height[i] <= 104`</li>

## Time and Space Complexity

The time complexity of the `maxArea` function is O(n), and the space complexity is O(1), where n is the number of buildings.
