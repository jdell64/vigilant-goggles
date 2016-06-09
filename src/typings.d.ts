/// <reference path="../typings/browser.d.ts" />

declare var module: { id: string };
declare module 'filesaver' {
    var saveAs: any;
    export = saveAs;
}
