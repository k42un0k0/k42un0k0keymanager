import { BrowserWindow } from "electron";

export interface MyWindow {
    configure(): [BrowserWindow, string]
}