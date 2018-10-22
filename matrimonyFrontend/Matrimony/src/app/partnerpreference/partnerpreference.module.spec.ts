import { PartnerpreferenceModule } from './partnerpreference.module';

describe('PartnerpreferenceModule', () => {
  let partnerpreferenceModule: PartnerpreferenceModule;

  beforeEach(() => {
    partnerpreferenceModule = new PartnerpreferenceModule();
  });

  it('should create an instance', () => {
    expect(partnerpreferenceModule).toBeTruthy();
  });
});
