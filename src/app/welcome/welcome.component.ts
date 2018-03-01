import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.css'],
	providers: [UserService]
})
export class WelcomeComponent implements OnInit {
	key: string;
	constructor(private router: Router, private userService: UserService) { }

	ngOnInit() {
	}

	submitForm(name: string, focus: string, organized: boolean, communicationStyle: string) {
		let newUser = new User(name, focus, organized, communicationStyle);
		this.key = this.userService.addUser(newUser);

	}

	startUrl() {
		setTimeout(this.router.navigate([this.key, "proposal"]), 500);
	}

}
