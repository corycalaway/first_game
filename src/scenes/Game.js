import Phaser from 'phaser';

export default class extends Phaser.Scene
{
    preload()
    {

    }

    create()
    {
        // Ball Start
        const ball = this.add.circle(400, 350, 25, 0Xfff, 1 )
        this.physics.add.existing(ball)
        ball.body.setBounce(1, 1)
        ball.body.setCollideWorldBounds(true, 1, 1)

        ball.body.setVelocity(200, 200)


        // Paddle Start
        const paddleLeft = this.add.rectangle(50, 250, 20, 200, 0xffffff, 1)
        // true makes paddle static
        this.physics.add.existing(paddleLeft, true)

        // Player Start
        this.player = this.add.triangle(300, 200, 0, 64, 32, 0, 64, 64, 0xff0000)
        this.physics.add.existing(this.player)
 
        
     
        
        // Collider for paddle and ball
        this.physics.add.collider(paddleLeft, ball)

        // Collider for paddle and player
        this.physics.add.collider(paddleLeft, this.player)

        this.cursors = this.input.keyboard.createCursorKeys()
    }

    update() 
    {
        if (this.cursors.up.isDown)
        {
            this.player.body.setVelocityY(-100)
            console.log('up')
        }
        else if (this.cursors.down.isDown)
        {
            this.player.body.setVelocityY(100)
            console.log('down')
        }
        else if (this.cursors.left.isDown)
        {
            this.player.body.setVelocityX(-100)
            console.log('left')
        }
        else if (this.cursors.right.isDown)
        {
            this.player.body.setVelocityX(100)
            console.log('right')
        }
    }
}