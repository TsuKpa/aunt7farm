import { Component } from '@angular/core';

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

    changeImage(type: 'shell' | 'flower' | 'fruit'): void {
        this.imageSource = this.source[type];
        this.pathColor = this.color[type];
    }
}
