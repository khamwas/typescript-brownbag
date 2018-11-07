"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("./users");
/**
 * users is an array of user information from your database.
 * Create a new array called greetings that is the result
 * of mapping over users and returning a string with
 * the user's first name and the number of
 * unread messages they have.
 *
 * Ex. ["Hi Jonathan! You have 3 unread messages."]
 */
var greetings = users_1.users.map(function (user) {
    return "Hi " + user.first_name + "! You have " + user.message_count + " unread message" + (user.message_count === 1 ? "" : "s") + ".";
});
console.log(greetings[34]);
