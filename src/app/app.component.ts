import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Choose Your Own Dev Adventure';
	greeting = 'A text based adventure where you try to create your own app and become a successfull developer. Please create your character below and then press BEGIN'
}
