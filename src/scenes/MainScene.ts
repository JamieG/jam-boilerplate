import { Scene } from 'phaser';

export class MainScene extends Scene {

    constructor() {
        super('MainScene');
    }

    create() {
        this.add.text(
            this.scale.width / 2,
            this.scale.height / 2,
            'Hello World',
            { fontSize: '48px', color: '#ffffff' }
        ).setOrigin(0.5);
    }
}
