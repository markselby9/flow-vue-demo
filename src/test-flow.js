/* @flow */

// const doSomethingStupid = (stringArg: string): number =>
//     // Flow should show an error here, "The operand of an arithmetic operation must be a number."
//      stringArg * 3109;
//
// doSomethingStupid('I\'m stringy');

const isAString: string = 'I am a string!';
const foobar = (str: string): number => {
    const foo = str * 2;
    return '233';
};
foobar(isAString);
