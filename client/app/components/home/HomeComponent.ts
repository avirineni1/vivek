import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'home',
    template: `<div class="container">
               <div class="jumbotron">
              <h1>Introduction</h1>
              <p>Here goes simple introduction.</p>
              </div>
              </div>`
})

export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}