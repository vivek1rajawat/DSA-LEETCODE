var permute = function(nums) {
    let result = [];

    function backtrack(path) {

        if(path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for(let i = 0; i < nums.length; i++) {

            if(!path.includes(nums[i])) {

                path.push(nums[i]);

                backtrack(path);

                path.pop();
            }
        }
    }

    backtrack([]);

    return result;
};