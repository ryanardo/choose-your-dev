import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';

@Component({
	selector: 'user-display',
	templateUrl: './user-display.component.html',
	styleUrls: ['./user-display.component.css'],
	providers: [UserService]
})
export class UserDisplayComponent implements OnInit {
	userKey: string;
	userToDisplay;


	constructor(private route: ActivatedRoute, private location: Location, private userService: UserService) { }

	ngOnInit() {
		this.route.params.forEach((urlParameters) => {
			this.userKey = urlParameters['id'];
		});
		this.userToDisplay = this.userService.getUserByKey(this.userKey);
	}

}
