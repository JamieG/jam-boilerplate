import { AUTO, Game, Scale } from 'phaser';
import { MainScene } from './scenes/MainScene';

//  Find out more information about the Game Config at:
//  https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    backgroundColor: '#1d1d1d',
    scale: {
        mode: Scale.RESIZE,
        width: '100%',
        height: '100%'
    },
    scene: [
        MainScene
    ]
};

new Game(config);
