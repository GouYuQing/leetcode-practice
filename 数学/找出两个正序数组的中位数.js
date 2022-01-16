/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * 算法的时间复杂度应该为 O(log (m+n))
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2);
    arr.sort((a, b) => a - b);
    if(arr.length % 2 == 0) {
        let first = arr[arr.length / 2];
        let last = arr[arr.length/2 - 1];
        if((first + last) == 0){
            return 0;
        }else{
            return ( first + last ) / 2;
        }
    }else{
        return arr[Math.floor(arr.length/2)];
    }
};
console.log(findMedianSortedArrays([1,2], [3,4]));