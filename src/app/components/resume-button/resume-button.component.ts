import { Component, Input } from '@angular/core';

@Component({
    selector: 'resume-button',
    template: `<a target="_blank" [class.depth-2]="floating" class="basic-button" href="{{link}}">Download Resume</a>`
})
export class ResumeButtonComponent {
    link = require("docs/Shivani Arvikar_UI-UX Designer_Resume.pdf")
    @Input() floating: boolean;
}
