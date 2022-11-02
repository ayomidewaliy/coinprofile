import {} from 'detox';

describe('Coinprofile App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have welcome screen', async () => {
    // @ts-ignore
    await expect(element(by.id('WelcomeScreenView'))).toBeVisible();
  });

  it('should show home screen after button tap', async () => {
    await element(by.id('HowItWorksButton')).tap();
  });

  it('should wait for list of coins to be fetched', async () => {
    await waitFor(element(by.id('CoinsListView')))
      .toBeVisible()
      .withTimeout(5000);
  });

  it('should be able to search for a coin', async () => {
    await element(by.id('SearchInput')).typeText('BTC');
  });

  it('should be able to view coin detail', async () => {
    await element(by.id('CoinItemCard')).atIndex(0).tap();
  });
});
