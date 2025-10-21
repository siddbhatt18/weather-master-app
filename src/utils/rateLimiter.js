class RateLimiter {
  constructor(delay) {
    this.delay = delay;
    this.lastCallTime = 0;
  }

  async throttle() {
    const now = Date.now();
    const timeSinceLastCall = now - this.lastCallTime;

    if (timeSinceLastCall < this.delay) {
      const waitTime = this.delay - timeSinceLastCall;
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }

    this.lastCallTime = Date.now();
  }
}

export default RateLimiter;