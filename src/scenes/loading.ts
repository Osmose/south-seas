import Phaser from 'phaser';

import { asyncLoad } from 'south-seas/util';

export default class LoadingScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'loading',
    });
  }

  create({ nextSceneKey = 'title' } = {}) {
    const loadingPromises = [];

    const nextScene = this.scene.get(nextSceneKey);
    if (nextScene.preload) {
      loadingPromises.push(
        asyncLoad(nextScene, () => {
          nextScene.preload();
        })
      );
    }

    Promise.all(loadingPromises).then(() => {
      this.scene.start(nextSceneKey);
    });
  }

  update() {}
}
