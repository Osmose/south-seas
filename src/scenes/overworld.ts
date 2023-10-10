import Phaser from 'phaser';

export default class OverworldScene extends Phaser.Scene {
  player!: OverworldPlayer;

  preload() {
    OverworldPlayer.preload(this);
  }

  create() {
    OverworldPlayer.create(this);

    this.player = new OverworldPlayer(this, 32, 32);
  }

  update() {}
}

class OverworldPlayer {
  sprite: Phaser.GameObjects.Sprite;

  static preload(scene: OverworldScene) {
    scene.load.spritesheet('overworldPlayer', 'img/overworld_player.png', { frameWidth: 16, frameHeight: 16 });
  }

  static create(scene: OverworldScene) {
    scene.anims.create({
      key: `overworldPlayerDown`,
      frameRate: 4,
      frames: scene.anims.generateFrameNumbers('overworldPlayer', { frames: [0, 1] }),
      repeat: -1,
    });
  }

  constructor(scene: OverworldScene, x: number, y: number) {
    this.sprite = scene.add.sprite(x, y, 'overworldPlayer', 0);
    this.sprite.play('overworldPlayerDown');
  }
}
