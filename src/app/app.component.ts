import { Component, ElementRef, ViewChild } from '@angular/core';
import { fadeOutLeftBigOnLeaveAnimation } from 'angular-animations';
import { ExportAsConfig, ExportAsService } from 'ngx-export-as';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [fadeOutLeftBigOnLeaveAnimation()],
})
export class AppComponent {
    /** Reference to the thumbnail element */
    @ViewChild('thumbnailRef') thumbnailRef: ElementRef;

    /** HTML input to create thumbnail with */
    htmlInput = '';

    /** Whether UI should lock */
    isLoading = false;

    /** Configurations for exported image */
    private readonly exportAsConfig = {
        type: 'png',
        elementIdOrContent: 'thumbnail',
    } as ExportAsConfig;

    constructor(private exportAsService: ExportAsService) {}

    /**
     * Exports HTML as blog thumbnail
     */
    export(): void {
        this.isLoading = true;
        this.prepareThumbnail();
        this.exportAsService.save(this.exportAsConfig, 'Thumbnail').subscribe(() => {});
        this.resetThumbnail();
        this.isLoading = false;
    }

    /**
     * Update styling to prepare thumbnail
     */
    private prepareThumbnail(): void {
        this.thumbnailRef.nativeElement.style.height = '1260px';
        this.thumbnailRef.nativeElement.style.width = '2400px';
        this.thumbnailRef.nativeElement.style.fontSize = '250px';
    }

    /**
     * Reset styling to prepare thumbnail
     */
    private resetThumbnail(): void {
        this.thumbnailRef.nativeElement.style.height = '';
        this.thumbnailRef.nativeElement.style.width = '';
        this.thumbnailRef.nativeElement.style.fontSize = '30px';
    }
}
