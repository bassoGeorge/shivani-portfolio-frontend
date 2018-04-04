import { SafeHtml } from '@angular/platform-browser';
export interface Project {
    id: number,
    title: string,
    subtitle: string,
    thumbnail: string,
    details: SafeHtml
}
