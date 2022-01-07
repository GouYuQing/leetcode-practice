/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	//    if(!nums.length) return 0;
	//    let j = 0;
	//    for(let i = 0;i<nums.length;i++){
	//        if(nums[j] !== nums[i]){
	//            j++;
	//            nums[j]=nums[i];
	//        }
	//    }
	//    return j+1;
	for (let i = nums.length; i > 0; i--) {
		if (nums[i] == nums[i - 1]) {
			nums.splice(i, 1);
		}
	}
	return nums.length;
};
