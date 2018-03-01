import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { ProposalComponent } from './proposal/proposal.component';
import { StoryComponent } from './story/story.component';
import { BddComponent } from './bdd/bdd.component';
import { ManagementComponent } from './management/management.component';
import { SpaghettiComponent } from './spaghetti/spaghetti.component';
const appRoutes: Routes = [
	{
		path: '',
		component: WelcomeComponent
	},
	{
		path: ':id/proposal',
		component: ProposalComponent
	},
	{
		path: ':id/story',
		component: StoryComponent
	},
	{
		path: ':id/bdd',
		component: BddComponent
	},
	{
		path: ':id/management',
		component: ManagementComponent
	},
	{
		path: ':id/spaghetti',
		component: SpaghettiComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
