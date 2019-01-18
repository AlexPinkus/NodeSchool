const userArray = process.argv.slice(2);
const data = { username: "", email: ""};
[, data.username, data.email] = userArray;
console.log(data); // {username: "jdoe", email: "john@doe.com"}