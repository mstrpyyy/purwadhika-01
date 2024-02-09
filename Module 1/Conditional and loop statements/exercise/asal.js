let a = 0;
let b = 1;
let position = 15
for (let i = 2; i <= position; i++) {
    const next = a + b;
    a = b;
    b = next;


//ulangan 1
next = 0 + 1
a = 1
b = 1

//ulangan 2
next = 1 + 1
a = 1
b = 2

//ulangan 3
next = 1 + 2
a = 2
b = 3

//ulangan 4
next = 2 + 3;
