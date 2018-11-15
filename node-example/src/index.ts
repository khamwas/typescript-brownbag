import { users, IUser } from './users';

/**
 * users is an array of user information from your database.
 * Create a new array called greetings that is the result
 * of mapping over users and returning a string with
 * the user's first name and the number of
 * unread messages they have.
 *
 * Ex. ["Hi Jonathan! You have 3 unread messages."]
 */

let greetings = users.map((user: IUser) => {
	if (!user.messages || +user.messages.unread === 0) {
		return `hello ${user.first_name}!`;
	} else if (+user.messages.unread === 1) {
		return `hello ${user.first_name}! you have 1 unread message`;
	} else {
		return `hello ${user.first_name}! you have ${
			user.messages.unread
		} unread messages`;
	}
});
