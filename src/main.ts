import { AUTO, Game, Scale } from 'phaser';
import { MainScene } from './scenes/MainScene';

//  Find out more information about the Game Config at:
//  https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    backgroundColor: '#1d1d1d',
    scale: {
        mode: Scale.FIT,
        autoCenter: Scale.CENTER_BOTH,
        width: 1280,
        height: 720
    },
    scene: [
        MainScene
    ]
};

new Game(config);
