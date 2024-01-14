/**
 * Write a function to return the maximum area of air that you could traverse on the tightrope. You can't move the buildings, so you can't tilt or re-orient the rectangle. If there's a tall building in your way, you can open a window on both sides and span the rope through the building.
 * Constraints
 * 2 <= n <= 105
 * n == height.length
 * 0 <= height[i] <= 104
 */

/**
 * Solution
 * @param {number[]} height
 * @return {number}
 * @description
 * 1. Initialize maxArea = 0
 * 2. Iterate through the array
 * 3. For each element, iterate through the rest of the array
 * 4. Calculate the area of the rectangle with the current element and the other element
 * 5. If the area is greater than maxArea, update maxArea with the new area value and continue the iteration of the rest of the array elements with the current element
 * 6. Return maxArea
 */

function maxArea(height: number[]): number {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    const currentArea = width * minHeight;
    maxArea = Math.max(maxArea, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

/**
 * Test Cases A
 * Input: [1, 8, 6, 2, 5, 4, 8, 3, 7]
 * Output: 49
 * Explanation: The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. Here the max area (blue section) you can traverse is 49.
 * @param {number[]} height
 * @return {number}
 */

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

/**
 * Test Cases B
 * Input: [1, 1]
 * Output: 1
 * @param {number[]} height
 * @return {number}
 */

console.log(maxArea([1, 1]));

/**
 * Test Cases C
 * Input: [4, 3, 2, 1, 4]
 * Output: 16
 * @param {number[]} height
 * @return {number}
 */

console.log(maxArea([4, 3, 2, 1, 4]));

/**
 * Test Cases D
 * Input: [1, 2, 1]
 * Output: 2
 * @param {number[]} height
 * @return {number}
 */

console.log(maxArea([1, 2, 1]));
