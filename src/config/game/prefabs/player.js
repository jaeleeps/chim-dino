const PLAYER = {
  FRAMES: {
    INITIAL: 'chim-idle-1',
    IDLING: ['chim-idle-1', ' chim-idle-2'],
    RUNNING: ['chim-run-1', 'chim-run-2'],
    DUCKING: ['dino-duck-1', 'dino-duck-2'],
    JUMPING: 'chim-idle-1',
    DEAD: 'dino-dead',
  },
  POS: {
    INITIAL_X: 0,
    X: 50,
    Y: 325,
  },
  GRAVITY: {
    Y: 2500,
  },
  JUMP: {
    VELOCITY: {
      MAX: 1500,
      START: 1500 * 0.9 * -1,
      SPEED_FALL: 1500 * 0.75,
      INCREASE_INCREMENT: 75 * -1,
      INCREASE_THRESHOLD: 200 * -1,
    },
    ACCELERATION: 3200,
  },
  BLINK: {
    DURATION: 100,
    DELAY: 7000,
  },
  STATES: {
    IDLING: 'IDLING',
    RUNNING: 'RUNNING',
    DUCKING: 'DUCKING',
    JUMPING: 'JUMPING',
    DEAD: 'DEAD',
  },
};

export default PLAYER;
