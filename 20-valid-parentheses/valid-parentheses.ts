function isValid(s: string): boolean {
    const stack: string[] = [];
    const map: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char); 
        } else {
            if (stack.pop() !== map[char]) {
                return false; 
            }
        }
    }

    return stack.length === 0; 
}

// remember when it comes to chars just go for an array or object and make ur loop :)