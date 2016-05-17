import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'contact',
    template: `<div class="container">
               <div class="jumbotron">
              <h1>Contact</h1>
              <li><p><a class="email">Vivekgn@gmail.com</a></p></li>
              <li><p>(732)420-7060</p></li>
              </div>
              </div>`
})

export class ContactComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}