import { SafeHtml } from '@angular/platform-browser';

export interface ProjectDetails {
    id: number,
    title: string,
    subtitle: string,
    bannerImage: string,
    description: SafeHtml
}
