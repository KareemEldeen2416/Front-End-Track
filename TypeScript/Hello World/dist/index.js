"use strict";
//Type Annotation
Object.defineProperty(exports, "__esModule", { value: true });
class collection {
    data = [];
    addItem(item) {
        this.data.push(item);
    }
}
let books = new collection();
books.addItem({ title: "What's behind the nature", author: "Ahmed Tawfeek" });
books.addItem({ title: "Jotupia", author: "Ahmed Tawfeek" });
books.addItem({ title: "Triple of Granada", author: "Radwa Ashour" });
console.log(books);
//# sourceMappingURL=index.js.map