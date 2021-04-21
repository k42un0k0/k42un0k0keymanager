import { Component, OnInit } from '@angular/core';
import { OuterAccount } from 'src/models';
import { SidebarItem } from './components/sidebar/sidebar.component';
import { TabItem } from './components/tab/tab.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  open: boolean = false;
  onClickHome() {
    console.log("clicked")
    this.open = !this.open;
  }
  tabItems: TabItem[] = [
    { title: "Jobs", link: "/auth/login" },
    { title: "Hobby", link: "/auth/login" },
  ]
  sidebarItems: SidebarItem[] = [
    { title: 'Jobs', link: "/auth/login" },
    { title: "Hobby", link: "/auth/login" },
  ]
  account: OuterAccount = {
    id: "",
    providerName: "Twitter",
    iconPath: "",
    userId: "k42un0k0",
    link: "",
    password: "",
  }
}
