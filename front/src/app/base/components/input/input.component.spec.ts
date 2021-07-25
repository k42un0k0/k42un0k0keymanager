import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { InputComponent } from './input.component';
import { BaseModule } from 'src/app/base/base.module';
describe('InputComponent', () => {
  async function setup() {
    return render(InputComponent, {
      imports: [BaseModule],
      excludeComponentDeclaration: true,
    });
  }
  it('should create', async () => {
    const container = await setup();
    expect(container.fixture.componentInstance).toBeTruthy();
  });

  it('should focus input', async () => {
    const container = await setup();
    container.fixture.componentInstance.focus();
    const input = screen.getByRole('textbox');
    expect(document.activeElement).toBe(input);
  });

  it('accept ngModel', fakeAsync(async () => {
    const container = await render(`<app-input label="Name" [(ngModel)]="value"></app-input>`, {
      componentProperties: { value: 'hello' },
      imports: [BaseModule, FormsModule],
    });
    container.detectChanges();
    tick();

    const input = screen.getByLabelText('Name');
    expect((input as HTMLInputElement).value).toBe('hello');
    await userEvent.type(input, 'world');
    flush();

    expect(container.fixture.componentInstance.value).toBe('helloworld');
  }));

  it('refrect isDisable', fakeAsync(async () => {
    const value = new FormControl('');
    const container = await render(`<app-input label="Name" [formControl]="value"></app-input>`, {
      componentProperties: { value },
      imports: [BaseModule, FormsModule, ReactiveFormsModule],
    });

    const input = screen.getByLabelText('Name');
    expect(input).toBeEnabled();
    value.disable();
    container.detectChanges();
    flush();
    expect(input).toBeDisabled();
  }));
});
