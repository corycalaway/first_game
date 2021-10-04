import Phaser from "Phaser";

export default class TitleScreen extends Phaser.Scene
{
    preload()
    {

    }

    create()
    {
        const text = this.add.text(400, 250, 'Hey You!');

        // Scale of 0 to 1
        text.setOrigin(0.5, 0.5)
    }
}