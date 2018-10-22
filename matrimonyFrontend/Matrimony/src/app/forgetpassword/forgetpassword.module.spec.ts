import { ForgetpasswordModule } from './forgetpassword.module';

describe('ForgetpasswordModule', () => {
  let forgetpasswordModule: ForgetpasswordModule;

  beforeEach(() => {
    forgetpasswordModule = new ForgetpasswordModule();
  });

  it('should create an instance', () => {
    expect(forgetpasswordModule).toBeTruthy();
  });
});
