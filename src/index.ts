import {User} from "./models/user";

const user = new User({});

user.set({name: "Jim", age: 35});

console.log(user.get("name"));
console.log(user.get("age"));

user.set({age: 38});

console.log(user.get("name"));
console.log(user.get("age"));

user.on("click", () => {
    console.log("Clicked!");
})

console.log(user.events);
