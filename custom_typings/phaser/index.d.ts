module 'phaser' {
  interface Scene {
    preload(): void | undefined;
    create(): void | undefined;
    update(time: number, delta: number): void | undefined;
  }
}
