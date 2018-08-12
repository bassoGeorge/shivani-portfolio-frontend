import { Component } from '@angular/core';
declare var Parallax: any

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

