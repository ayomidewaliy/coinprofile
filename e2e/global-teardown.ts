import detox from 'detox';

async function globalTeardown() {
  await detox.cleanup();
}

module.exports = globalTeardown;
