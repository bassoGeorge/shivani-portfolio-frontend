import { Component } from '@angular/core';

@Component({
    selector: 'resume-button',
    template: `<a target="_blank" href="{{link}}">Download Resume</a>`,
    styleUrls: ['./resume-button.component.styl']
})
export class ResumeButtonComponent {
    link = require("docs/Shivani Arvikar_UI-UX Designer_Resume.pdf")
}
