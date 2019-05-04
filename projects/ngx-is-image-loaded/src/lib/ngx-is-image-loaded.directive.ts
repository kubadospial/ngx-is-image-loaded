import { Directive, Input, AfterViewInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
    selector: '[ngxIsImageLoaded]'
})
export class NgxIsImageLoadedDirective implements AfterViewInit, OnDestroy {
    @Input() url: string | Array<string>;
    @Output() isImageLoaded = new EventEmitter<boolean>();

    private _destory$ = new Subject<void>();
    private _indexOfLoadedImages = 0;
    private _indexForApproval = 0;

    constructor() { }

    ngAfterViewInit() {
        if (typeof this.url === 'string') {
            this._indexForApproval = 1;
            this._loadChecker(this.url);
        } else {
            this._indexForApproval = this.url.length;
            for (const url of this.url) {
                this._loadChecker(url);
            }
        }
    }

    ngOnDestroy() {
        this._destory$.next();
        this._destory$.complete();
    }

    private _loadChecker(url: string) {
        const img = new Image();
        img.src = url;
        fromEvent(img, 'load').pipe(
            takeUntil(this._destory$)
        ).subscribe(_ => this._isLoaded());
    }

    private _isLoaded() {
        this._indexOfLoadedImages++;
        if (this._indexOfLoadedImages === this._indexForApproval) {
            this.isImageLoaded.emit(true);
        }
    }
}
