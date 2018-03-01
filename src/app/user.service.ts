import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
	users: FirebaseListObservable<any[]>;

	constructor(private database: AngularFireDatabase) {
		this.users = database.list('users');
	}

	getUsers() {
		return this.users;
	}

	addUser(newUser: User) {
		var user = this.users.push(newUser);
		return user.key;
	}

	getUserByKey(userId: string) {
		return this.database.object('/users/' + userId);
	}

	updateUserPoints(localUpdatedUser) {
		var userEntryInFirebase = this.getUserByKey(localUpdatedUser.$key);
		userEntryInFirebase.update({
			communicationStyle: localUpdatedUser.communicationStyle,
			focus: localUpdatedUser.focus,
			name: localUpdatedUser.name,
			organized: localUpdatedUser.organized,
			points: localUpdatedUser.points
		});
	}

	setPoints(selection, currentUser) {
		// var currentUser = this.getUserByKey(userKey);
		if (selection === 'story') {
			// 	debugger;
			currentUser.points += 10;
			this.updateUserPoints(currentUser);
		} else if (selection === 'bdd') {
			currentUser.points += 10;
			this.updateUserPoints(currentUser);
		} else if (selection === 'management') {
			currentUser.points += 10;
			this.updateUserPoints(currentUser);
		} else if (selection === 'spaghetti') {
			currentUser.points -= 1000000;
			this.updateUserPoints(currentUser);
		}
	}

}
