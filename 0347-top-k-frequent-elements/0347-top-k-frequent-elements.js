/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // create a map 
    let map = {};
    for (let i = 0; i< nums.length; i++){
        if(!map[nums[i]]) map[nums[i]] = 0;
        ++map[nums[i]];
    }

    //push to MinPQ
    let pq = new MinPriorityQueue(x => x.freq);
    for(key in map){
        pq.enqueue({val: key, freq: map[key]});
        if(pq.size() > k){
            pq.dequeue();
        }
    }
    return pq.toArray().map(x => Number(x.val))
};