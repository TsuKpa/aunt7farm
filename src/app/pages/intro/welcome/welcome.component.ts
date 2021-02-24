import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import Utils from '@app/common/utils/utils';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
    source = {
        shell: '../../../../assets/info1/shell.svg',
        flower: '../../../../assets/info1/pot-flower.svg',
        fruit: '../../../../assets/info1/fruits.svg'
    };
    color = {
        shell: '#9f5f80',
        flower: '#ff8e71',
        fruit: '#ffba93'
    };
    pathColor = this.color.fruit;
    imageSource = this.source.fruit;
    isHideScrollButton = true;

    constructor(private router: Router) {}

    changeImage(type: 'shell' | 'flower' | 'fruit'): void {
        this.imageSource = this.source[type];
        this.pathColor = this.color[type];
    }

    learnMore(): void {
        Utils.scrollToElement('nextInformation');
    }

    gotoStore(): void {
        void this.router.navigate(['store']);
    }

    scrollToTop(): void {
        Utils.scrollToElement('top');
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event: Event): void {
        const value = (<HTMLDocument>event.target).body.scrollTop || 1;
        if (value > 250) {
            this.isHideScrollButton = false;
        } else if (value < 50) {
            this.isHideScrollButton = true;
        }
    }
}
