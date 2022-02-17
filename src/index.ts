import {User} from "./models/user";

const user = new User({});

user.set({name: "Jim", age: 35});

user.on("change", () => {
    console.log("Changed!");
});
user.on("change", () => {
    console.log("Do something when changed!");
});
user.on("click", () => {
    console.log("Clicked!");
});

console.log(user);

user.trigger("change");
