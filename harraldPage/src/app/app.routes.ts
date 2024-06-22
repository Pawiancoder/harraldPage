import { Routes } from '@angular/router';
import { ErsterHarraldComponent } from './genOne/erster-harrald/erster-harrald.component';
import { WrongPageComponent } from './wrong-page/wrong-page.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: "genOne/erster-harrald", component: ErsterHarraldComponent },
    { path: "wrong-page", component: WrongPageComponent },
    { path: "", component: HomeComponent },
];
