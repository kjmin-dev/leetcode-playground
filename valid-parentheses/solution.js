/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const map = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    const keys = Object.keys(map);
    const values = Object.values(map);
    const len = s.length;
    const stack = [];
    for (let i = 0; i < len; ++i) {
        const char = s[i];
        if (keys.includes(char)) {
            stack.push(char);
        } else if (values.includes(char)) {
            const key = keys.find((k) => map[k] === char);
            const last = stack.pop();
            if (last !== key) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
