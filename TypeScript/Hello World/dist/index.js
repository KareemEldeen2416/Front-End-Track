"use strict";
//Type Annotation
Object.defineProperty(exports, "__esModule", { value: true });
function printMessage(props) {
    console.log(`Hello ${props.one}`);
    console.log(`Hello ${props.two}`);
    console.log(`Hello ${props.three}`);
}
function printMsg(props) {
    console.log(`Hello ${props.one}`);
    console.log(`Hello ${props.two}`);
    console.log(`Hello ${props.four}`);
}
printMessage({ one: 'KareemEldeen', two: 12, three: true });
printMsg({ one: 'Mostafa', two: 20, four: false });
//# sourceMappingURL=index.js.map