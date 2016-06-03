import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TestProjAppComponent } from '../app/test-proj.component';

beforeEachProviders(() => [TestProjAppComponent]);

describe('App: TestProj', () => {
  it('should create the app',
      inject([TestProjAppComponent], (app: TestProjAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'test-proj works!\'',
      inject([TestProjAppComponent], (app: TestProjAppComponent) => {
    expect(app.title).toEqual('test-proj works!');
  }));
});
