import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';

@Component({
	selector: 'app-proposal',
	templateUrl: './proposal.component.html',
	styleUrls: ['./proposal.component.css'],
	providers: [UserService]
})

export class ProposalComponent implements OnInit {
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
}
