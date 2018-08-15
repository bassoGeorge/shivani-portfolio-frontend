import { Component } from '@angular/core';
// import * as Parallax from 'parallax-js/dist/parallax.js'
// declare var Parallax: any
const Parallax = require('parallax-js/dist/parallax.js')

@Component({
    selector: 'parallax-bg',
    templateUrl: './parallax-bg.component.html',
    styleUrls: ['./parallax-bg.component.styl']
})
export class ParallaxBgComponent {
    ngOnInit() {
        let par = new Parallax(document.getElementById('parallax-bg'))
    }
}

