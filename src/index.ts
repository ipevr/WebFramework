import {User} from "./models/user";

const user = new User({name: "Ingo", age: 53});

console.log(user.get("name"));
