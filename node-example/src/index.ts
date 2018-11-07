import { IUser, users } from "./users";

/**
 * users is an array of user information from your database.
 * Create a new array called greetings that is the result
 * of mapping over users and returning a string with
 * the user's first name and the number of
 * unread messages if they have any.
 *
 * Ex. "Hey Jonathan! You have 3 unread messages."
 */

const makeGreeting = (user: IUser) => {
  if (user.messages && +user.messages.unread > 0) {
    return `Hey ${user.first_name}! You have ${
      user.messages.unread
    } unread message${+user.messages.unread === 1 ? "" : "s"}.`;
  } else {
    return `Hey ${user.first_name}!`;
  }
};

const greetings = users.map(makeGreeting);
