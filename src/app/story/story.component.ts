import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
	selector: 'app-story',
	templateUrl: './story.component.html',
	styleUrls: ['./story.component.css'],
	providers: [UserService]
})
export class StoryComponent implements OnInit {
	userKey: string;
	currentUser;
	constructor(private route: ActivatedRoute, private location: Location, private userService: UserService) { }

	ngOnInit() {
		this.route.params.forEach((urlParameters) => {
			this.userKey = urlParameters['id'];
		});
		this.userService.getUserByKey(this.userKey).subscribe(dataLastEmittedFromObserver => {
			this.currentUser = dataLastEmittedFromObserver;
		});
	}
	clickPoints(selection) {
		console.log(this.currentUser);
		this.userService.setPoints(selection, this.currentUser);
	}
}

// new User(dataLastEmittedFromObserver.name, dataLastEmittedFromObserver.focus, dataLastEmittedFromObserver.organized, dataLastEmittedFromObserver.communicationStyle)
// this.currentUser.points = dataLastEmittedFromObserver.points;
// this.currentUser.$key = dataLastEmittedFromObserver.$key;
// (click) = "points('story')"
// (click) = "points('bdd')"
// (click) = "points('management')"
// (click) = "points('spaghetti')"
