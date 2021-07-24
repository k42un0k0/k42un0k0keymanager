import { render, screen } from '@testing-library/angular';
import { AutoFocusDirective } from './auto-focus.directive';

describe('AutoFocusDirective', () => {
  async function setup() {
    return render(`<input appAutoFocus />`, {
      declarations: [AutoFocusDirective],
    });
  }

  it('should create an instance', async () => {
    const container = await setup();
    expect(container.fixture.componentInstance).toBeTruthy();
  });

  it('focus a input', async () => {
    await setup();
    expect(document.activeElement).toBe(screen.getByRole('textbox'));
  });
});
