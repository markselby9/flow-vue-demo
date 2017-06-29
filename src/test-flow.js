/* @flow */

// const doSomethingStupid = (stringArg: string): number =>
//     // Flow should show an error here, "The operand of an arithmetic operation must be a number."
//      stringArg * 3109;
//
// doSomethingStupid('I\'m stringy');

// example1
const foobar = (str: string): number => {
    const foo = str * 2;
    return '233';
};
foobar('I am a string!');

// example2
function aaa(x: ?number): string {
    // ?number would mean number, null, or undefined.
    if (x) {
        return x;
    }
    return "default string";
}

