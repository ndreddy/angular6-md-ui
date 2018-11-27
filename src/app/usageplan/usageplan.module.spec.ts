import { UsageplanModule } from './usageplan.module';

describe('UsageplanModule', () => {
  let usageplanModule: UsageplanModule;

  beforeEach(() => {
    usageplanModule = new UsageplanModule();
  });

  it('should create an instance', () => {
    expect(usageplanModule).toBeTruthy();
  });
});
