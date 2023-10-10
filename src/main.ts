import './style.css';

import Phaser from 'phaser';

import OverworldScene from 'south-seas/scenes/overworld';

declare global {
  interface Window {
    game: Phaser.Game;
  }
}

window.addEventListener('load', () => {
  window.game = new Phaser.Game({
    type: Phaser.AUTO,
    height: 240,
    width: 380,
    zoom: 3,
    backgroundColor: '#000',
    parent: 'game',
    render: {
      pixelArt: true,
    },
    scene: [new OverworldScene()],
  });
});
