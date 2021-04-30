import { join } from 'path';
import { BrowserWindow } from "electron";
import * as url from "url";
import { MyWindow } from "./my-window";


export class UserAccountManagerWindow implements MyWindow {
    configure(): [BrowserWindow, string] {
        const win = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                preload: join(__dirname, "../preload.js")
            },
            frame: false,
        })

        const startUrl = (process.env.ELECTRON_START_URL || url.format({
            pathname: join(__dirname, '../k42un0k0passwordmanager/index.html'),
            protocol: 'file:',
            slashes: true
        })) + "#/user-account-manager";
        return [win, startUrl];
    }

}