import Phaser from 'phaser'

// importing game scenes
import TitleScreen from './scenes/TitleScreen';
import Game from './scenes/Game';

// creates game window
const config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0},
            debug: true

        }
    }
}

const game = new Phaser.Game(config)

//adding different game scenes
game.scene.add('titlescreen', TitleScreen)
game.scene.add('game', Game)

// Starts scenes
game.scene.start('game')