/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []; // If the tree is empty, return an empty array

    const result = [];
    const queue = [root]; // Initialize the queue with the root node

    while (queue.length > 0) {
        const level = [];
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const node = queue.shift(); // Remove the front node in the queue
            level.push(node.val); // Add the current node's value to the current level array

            // Add left and right children to the queue if they exist
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(level); // Add the current level to the result
    }

    return result;
};

// Example Usage
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

// Example binary tree:
//         3
//        / \
//       9   20
//           /  \
//          15   7
const root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log(levelOrder(root)); // Output: [[3], [9, 20], [15, 7]]
