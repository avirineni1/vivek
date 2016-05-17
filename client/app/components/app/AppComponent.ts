import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {HomeComponent} from '../home/HomeComponent'
import {AboutComponent} from '../about/AboutComponent'
import {ContactComponent} from '../contact/ContactComponent'

@RouteConfig([
    {path: '/', component: HomeComponent, as: 'Home'},
    {path: '/about', component: AboutComponent, as: 'About'},
    {path: '/contact', component: ContactComponent, as: 'Contact'},
])
@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { 
    
    constructor(){
        console.log("We are up and running!");
    }
    
}