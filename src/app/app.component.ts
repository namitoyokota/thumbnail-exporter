import { Component } from '@angular/core';
import { fadeOutLeftBigOnLeaveAnimation } from 'angular-animations';
import { ExportAsConfig, ExportAsService } from 'ngx-export-as';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [fadeOutLeftBigOnLeaveAnimation()],
})
export class AppComponent {
    /** Thumbnail title to set preview */
    title = '';

    /** Whether UI should lock */
    isLoading = false;

    /** Configurations for exported image */
    private readonly exportAsConfig = {
        type: 'png',
        elementIdOrContent: 'thumbnail',
    } as ExportAsConfig;

    constructor(private exportAsService: ExportAsService) {}

    /**
     * Exports title as blog thumbnail
     */
    export(): void {
        this.isLoading = true;
        this.exportAsService.save(this.exportAsConfig, 'Thumbnail').subscribe(() => {
            this.isLoading = false;
        });
    }
}
