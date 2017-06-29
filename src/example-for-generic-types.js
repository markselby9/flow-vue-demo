// @flow

/**
 * Created by markfeng on 2017/6/29.
 */

// === generic type in flow
class SelectableItem<T:Object> {
    obj: T;

    constructor(obj: T) {
        this.obj = obj
    }

    get<U>(key: $Enum<T>): U {  // support enum
        return this.obj[key]
    }
}

const objectFromBackend = { value: 1, label: 2 };
const oneObject = new SelectableItem(objectFromBackend);

console.log(oneObject.get('value'));  // No errors!
oneObject.get('label');  // No errors!
// Error: string literal 'baz' not found in object literal
oneObject.get('number');


// === another example for generic type
function identity<T>(value: T): T {
    return value;
}

let one: 1 = identity(1);
let two: 2 = identity(2);
// $ExpectError
let three: 3 = identity(42);
