import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'about',
    template: `<div class="container">
               <div class="jumbotron">
              <h1>About</h1>
              <p>Here goes simple About.</p>
              </div>
              </div>`
})

export class AboutComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}