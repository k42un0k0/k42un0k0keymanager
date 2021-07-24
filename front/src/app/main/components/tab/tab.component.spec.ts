import { By } from '@angular/platform-browser';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { TabComponent } from './tab.component';
import { ComponentsModule } from 'src/app/main/components/components.module';
import { Tab } from 'src/app/main/services/tab.service';
import { UserAccount } from 'src/models';

describe('main/components/TabComponent', () => {
  async function setup(componentProperties?: Partial<TabComponent>) {
    return render(TabComponent, {
      componentProperties,
      imports: [ComponentsModule],
      excludeComponentDeclaration: true,
    });
  }

  it('should create', async () => {
    const container = await setup({
      tab: new Tab(new UserAccount({ name: 'k42un0k0', OuterAccounts: [] })),
    });
    expect(container.fixture.componentInstance).toBeTruthy();
  });

  it('show title', async () => {
    await setup({
      tab: new Tab(new UserAccount({ name: 'k42un0k0', OuterAccounts: [] })),
    });
    expect(screen.findByText('k42un0k0')).toBeTruthy();
  });

  it('click close', async () => {
    const clickCloseSpy = jest.fn();
    await setup({
      tab: new Tab(new UserAccount({ name: 'k42un0k0', OuterAccounts: [] })),
      clickClose: { emit: clickCloseSpy } as any,
    });

    await userEvent.click(screen.getByRole('img', { name: 'close icon' }));
    expect(clickCloseSpy).toHaveBeenCalledTimes(1);
  });

  it('activate self', async () => {
    const deactiveTab = new Tab(new UserAccount({ name: 'k42un0k0', OuterAccounts: [] }));
    const activeTab = new Tab(new UserAccount({ name: 'k42un0k0', OuterAccounts: [] }));
    activeTab.activate();

    const container = await render(`<app-tab [tab]="tab"></app-tab>`, {
      componentProperties: { tab: deactiveTab },
      imports: [ComponentsModule],
    });

    expect(container.fixture.debugElement.query(By.css('app-tab.active'))).not.toBeTruthy();

    container.rerender({ tab: activeTab });

    expect(container.fixture.debugElement.query(By.css('app-tab.active'))).toBeTruthy();
  });
});
