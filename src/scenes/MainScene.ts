import { Scene } from 'phaser';
import { rippleFragmentSource } from '../shaders/ripple';

const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

//  Oscillation parameters for the "Hello World" text.
const OSCILLATION_X = 40;
const OSCILLATION_Y = 25;
const OSCILLATION_SPEED_X = 0.8;
const OSCILLATION_SPEED_Y = 1.2;

export class MainScene extends Scene {

    private text!: Phaser.GameObjects.Text;

    constructor() {
        super('MainScene');
    }

    create() {
        this.add.shader(
            {
                name: 'RippleBackground',
                fragmentSource: rippleFragmentSource,
                setupUniforms: (setUniform: (name: string, value: unknown) => void) => {
                    setUniform('uTime', this.time.now / 1000);
                }
            },
            GAME_WIDTH / 2,
            GAME_HEIGHT / 2,
            GAME_WIDTH,
            GAME_HEIGHT
        );

        this.text = this.add.text(
            GAME_WIDTH / 2,
            GAME_HEIGHT / 2,
            'Hello World',
            { fontSize: '48px', color: '#ffffff' }
        ).setOrigin(0.5);
    }

    update(time: number) {
        const t = time / 1000;

        //  Slow Lissajous drift around the centre point.
        this.text.x = GAME_WIDTH / 2 + Math.sin(t * OSCILLATION_SPEED_X) * OSCILLATION_X;
        this.text.y = GAME_HEIGHT / 2 + Math.cos(t * OSCILLATION_SPEED_Y) * OSCILLATION_Y;
    }
}
