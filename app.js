
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

        // 6 ==================================== 6
        // Javascript Program for Prime Numbers 
       
        function problem6(params6) {
            let total = 0;
            if (params6 <= 1) return 0;
            for (let i = 2; i < params6; i++) {
                for (let j = 2; j < params6; j++) {
                    if (i === j) {
                        total += i; 
                    }
                    if (i % j === 0) {
                        break
                    }
                }
            }
            return total;
        }
        console.log(problem6(4)); // 1+2+3

        // 18 ====================================
        // Javascript math functions
        console.log(Math.ceil(4.2)); // 5
        console.log(Math.floor(4.2)); // 4
        console.log(Math.round(4.2)); // 4
        console.log(Math.max(1, 2, 3, 4)); // 4
        console.log(Math.min(1, 2, 3, 4)); // 1
        console.log(Math.random()); // Random number between 0 and 1
        console.log(Math.sqrt(16)); // 4
        console.log(Math.pow(2, 3)); // 8 (2 raised to the power of 3)
        console.log(Math.abs(-5)); // 5 (absolute value)
        console.log(Math.PI); // 3.141592653589793 (value of pi)
        console.log(Math.E); // 2.718281828459045 (value of euler's number) 
        console.log(Math.log(10)); // Natural logarithm of 10
        console.log(Math.log10(100)); // Base 10 logarithm of 100
        console.log(Math.sin(Math.PI / 2)); // 1 (sine of 90 degrees)
        console.log(Math.cos(0)); // 1 (cosine of 0 degrees)    
        console.log(Math.tan(Math.PI / 4)); // 1 (tangent of 45 degrees)
        console.log(Math.asin(1)); // 1.5707963267948966 (inverse sine of 1)
        console.log(Math.acos(1)); // 0 (inverse cosine of 1)
        console.log(Math.atan(1)); // 0.7853981633974483 (inverse tangent of 1)
        console.log(Math.atan2(1, 1)); // 0.7853981633974483 (inverse tangent of 1/1)
        console.log(Math.hypot(3, 4)); // 5 (hypotenuse of a right triangle with sides 3 and 4)
        console.log(Math.clz32(0)); // 32 (number of leading zero bits in 0)
        console.log(Math.imul(2, 3)); // 6 (integer multiplication of 2 and 3)
        console.log(Math.sign(-5)); // -1 (sign of -5)
        console.log(Math.trunc(4.9)); // 4 (truncates decimal part)
        console.log(Math.fround(1.5)); // 1.5 (single precision float representation of 1.5)
        console.log(Math.cbrt(27)); // 3 (cube root of 27)
        console.log(Math.expm1(1)); // 1.718281828459045 (exponential minus 1 of 1)
        console.log(Math.sinh(0)); // 0 (hyperbolic sine of 0)
        console.log(Math.cosh(0)); // 1 (hyperbolic cosine of 0)
        console.log(Math.tanh(0)); // 0 (hyperbolic tangent of 0)
        console.log(Math.round(Math.random() * 100)); // Random integer between 0 and 99

        // 19 ====================================
        // JavaScript Date and Time Functions
        const date = new Date();
        console.log(date); // Current date and time
        console.log(date.getFullYear()); // Current year
        console.log(date.getMonth() + 1); // Current month (0-11, so add 1)
        console.log(date.getDate()); // Current day of the month (1-31)
        console.log(date.getDay()); // Current day of the week (0-6, 0 is Sunday)
        console.log(date.getHours()); // Current hour (0-23)
        console.log(date.getMinutes()); // Current minutes (0-59)
        console.log(date.getSeconds()); // Current seconds (0-59)
        console.log(date.getMilliseconds()); // Current milliseconds (0-999)
        console.log(date.toISOString()); // ISO string representation of the date
        console.log(date.toLocaleDateString()); // Local date string
        console.log(date.toLocaleTimeString()); // Local time string
        console.log(date.toString()); // String representation of the date
        console.log(date.getTime()); // Time in milliseconds since January 1, 1970
        console.log(date.setFullYear(2025)); // Set year to 2025
        console.log(date.setMonth(11)); // Set month to December (0-11)
        console.log(date.setDate(25)); // Set day of the month to 25

        // 20 ====================================
        // JavaScript String Functions
        
        
