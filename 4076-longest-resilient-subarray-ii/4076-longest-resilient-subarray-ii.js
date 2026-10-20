/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var resilientSubarray = function(nums, k) {
    const n = nums.length;
    let maxLen = 0;
    
    let l = 0;
    while (l < n) {
        let r = l;
        let rem = nums[l] % k;
        
        // Find the longest contiguous segment with the same remainder modulo k
        while (r < n && nums[r] % k === rem) {
            r++;
        }
        
        if (rem === 0) {
            maxLen = Math.max(maxLen, r - l);
        } else {
            // Any single element is always a valid resilient subarray of length 1
            if (r > l) {
                maxLen = Math.max(maxLen, 1);
            }
            
            let g = k / gcd(rem, k);
            const firstOccurrence = new Map();
            
            // Track (i + 1) % g so that the subarray length (i - start + 1) is a multiple of g
            for (let i = l; i < r; i++) {
                let mod = (i + 1) % g;
                if (!firstOccurrence.has(mod)) {
                    firstOccurrence.set(mod, i);
                } else {
                    maxLen = Math.max(maxLen, i - firstOccurrence.get(mod) + 1);
                }
            }
        }
        
        l = r;
    }
    
    return maxLen;
};

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}