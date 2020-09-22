export function largeGroupPositions1(s: string): number[][] {
    // 1. Find "large" groups - consecutive letters > 3 in a row
    // 2. Return their starting and ending index

    let letter = s[0], startIndex = 0;
    const groupings: number[][] = [];
    for (let i = 1; i < s.length; i++) {
        if (s[i] !== letter || i === s.length - 1) {
            if (i - startIndex >= 2) {
                groupings.push([startIndex, i - 1]);
            }

            letter = s[i - 1];
            startIndex = i - 1;
        }
    }

    return groupings;
};

export function largeGroupPositions(s: string): number[][] {
    // 1. Find "large" groups - consecutive letters > 3 in a row
    // 2. Return their starting and ending index

    let letter = '', startIndex = -1;
    const groupings: number[][] = [];

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (letter !== ch || i === s.length  - 1) {
            if (i - (startIndex || -1) >= 3) {
                groupings.push([startIndex, i - 1]);
            }

            startIndex = i;
            letter = ch;
        }
    }

    return groupings;
};