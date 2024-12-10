
        // 1 ==================================== 1
        function findTwoNumbers(nums, target) {
            let numMap = new Map(); 

            for (let i = 0; i < nums.length; i++) {
                let complement = target - nums[i];

                if (numMap.has(complement)) {
                    return [numMap.get(complement), i];
                }
                numMap.set(nums[i], i);
            }

            return [];
        }

        // Example usage:
        let nums = [1, 2, 3, 4, 5, 6];
        let target = 10;
        // console.log(findTwoNumbers(nums, target));

        // 2 ==================================== 2
        //For inputArray = [1, 2, 1], elementToReplace = 1 and subtractionElem = 3, 
        //the output should be arrayReplace(inputArray, elementToReplace, substrationElem) = [3, 2, 3].

        function arrayReplace(inputArray,elementToReplace,substrationElem){
            inputArray.forEach((element, index) => {
                if (element === elementToReplace) {
                    inputArray[index]=substrationElem;
                }
            });
            // console.log(inputArray);
        }
        arrayReplace([1, 2, 1], 1, 3);
         
        // 3 ==================================== 3
        function problem3(...params1) {
            let total = 0;
            params1.forEach(perElem=>{
                total += perElem;
            })
            return total;
        }

        function problem3(...params1) {
            return params1.reduce((total, perElem) => total + perElem, 0);
        }
        // console.log(problem3(6,5,2));

        // 4 ==================================== 4

        // 5 ==================================== 5
        function problem5(params5) {
            let prev = params5[0]; // Initialize prev to the first element
            for (let i = 1; i < params5.length; i++) { // Start from the second element
                if (params5[i] < prev) { // If current is less than previous, array is not sorted
                    return false;
                }
                prev = params5[i]; // Update prev
            }
            return true; // If loop completes, array is sorted
        }

        // console.log('problem5', problem5([1, 2, 3, 4])); // true
        // console.log('problem5', problem5([1, 3, 2, 4])); // false
