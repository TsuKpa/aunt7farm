import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Utils from '@app/common/utils/utils';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
    source = {
        shell: '../../../../assets/shell.svg',
        flower: '../../../../assets/pot-flower.svg',
        fruit: '../../../../assets/fruits.svg'
    };
    color = {
        shell: '#9f5f80',
        flower: '#ff8e71',
        fruit: '#ffba93'
    };
    pathColor = this.color.fruit;
    imageSource = this.source.fruit;

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
}
