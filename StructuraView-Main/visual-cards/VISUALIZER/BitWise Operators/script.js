const num1Input = document.getElementById('num1');
        const num2Input = document.getElementById('num2');
        const resultDiv = document.getElementById('result');

        const orBtn = document.getElementById('or-btn');
        const andBtn = document.getElementById('and-btn');
        const notBtn = document.getElementById('not-btn');
        const xorBtn = document.getElementById('xor-btn');
        const leftShiftBtn = document.getElementById('left-shift-btn');
        const rightShiftBtn = document.getElementById('right-shift-btn');

        function performOperation(operator) {
            const num1 = parseInt(num1Input.value);
            const num2 = parseInt(num2Input.value);

            let result;
            switch (operator) {
                case 'OR':
                    result = num1 | num2;
                    break;
                case 'AND':
                    result = num1 & num2;
                    break;
                case 'NOT':
                    result = ~num1; 
                    break;
                case 'XOR':
                    result = num1 ^ num2;
                    break;
                case 'LEFT_SHIFT':
                    result = num1 << num2;
                    break;
                case 'RIGHT_SHIFT':
                    result = num1 >> num2;
                    break;
                default:
                    result = "Invalid operator";
            }
            resultDiv.textContent = `Result: ${result}`;
        }

        orBtn.addEventListener('click', () => performOperation('OR'));
        andBtn.addEventListener('click', () => performOperation('AND'));
        notBtn.addEventListener('click', () => performOperation('NOT'));
        xorBtn.addEventListener('click', () => performOperation('XOR'));
        leftShiftBtn.addEventListener('click', () => performOperation('LEFT_SHIFT'));
        rightShiftBtn.addEventListener('click', () => performOperation('RIGHT_SHIFT'));

        let truth = document.getElementById("truth") ; 

        let heading = document.getElementById("heading") ; 

        let para = document.getElementById("para") ; 


        orBtn.addEventListener('click', () => {

            truth.src = "image/OR.png" ; 
            heading.innerText = "What is OR Operator" ; 

            para.innerText  =`
            The bitwise OR | operator returns 1 if at least one of the operands is 1. Otherwise, it returns 0.
The following truth table demonstrates the working of the bitwise OR operator. Let a and b be two operands that can only take binary values i.e. 1 or 0.
            ` ;

        }) ; 

        andBtn.addEventListener('click', () => {

            truth.src = "image/AND.png" ; 
            heading.innerText = "What is AND Operator" ; 

            para.innerText =`
            The bitwise AND & operator returns 1 if and only if both the operands are 1. Otherwise, it returns 0. The following table demonstrates the working of the bitwise AND operator. Let a and b be two operands that can only take binary values i.e. 1 and 0.
            ` ; 
            
        }) ; 

        notBtn.addEventListener('click', () => {

            truth.src = "image/Not.png" ; 
            heading.innerText = "What is NOT Operator" ; 

            para.innerText = `
            The C++ logical NOT operator ( ! ) is a unary operator that is used to negate the value of a condition. It returns true if the condition is false, and false if the condition is true. Here’s the truth table for the NOT operator:
            ` ; 

        }) ; 

        xorBtn.addEventListener('click', () => {

            truth.src = "image/XOR.png" ; 
            heading.innerText = "What is XOR Operator" ; 

            para.innerText = `
            The bitwise XOR ^ operator returns 1 if and only if one of the operands is 1. However, if both the operands are 0, or if both are 1, then the result is 0.

The following truth table demonstrates the working of the bitwise XOR operator. Let a and b be two operands that can only take binary values i.e. 1 or 0.
            ` ; 

        }) ; 

        leftShiftBtn.addEventListener('click', () => {

            truth.src = "image/left.png" ; 
            heading.innerText = "What is Left_Shift Operator" ; 

            para.innerText = `
            The left shift operator shifts all bits towards the left by a certain number of specified bits. It is denoted by <<.As we can see from the image , we have a 4-bit number. When we perform a 1 bit left shift operation on it, each individual bit is shifted to the left by 1 bit.
            `; 

        }) ; 

        rightShiftBtn.addEventListener('click', () => {

            truth.src = "image/Right.png" ; 
            heading.innerText = "What is Right_Shift Operator" ; 

            para.innerText = `
            The right shift operator shifts all bits towards the right by a certain number of specified bits. It is denoted by >>.
When we shift any number to the right, the least significant bits are discarded, while the most significant bits are replaced by zeroes. As we can see from the image , we have a 4-bit number. When we perform a one-bit right shift operation on it, each individual bit is shifted to the right by 1 bit.
            ` ; 

        }) ; 