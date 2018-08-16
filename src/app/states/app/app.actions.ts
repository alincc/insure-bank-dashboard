

export class SetNavigationTitle {
    static readonly type = '[App] Set Navigation Title';
    constructor (public title: string) {};
}


export class SetNotifications {
    static readonly type = '[App] Set Novigations';
    constructor (public count: number) {}
}


export class ToggleSideContents {
    static readonly type = '[App] Toggle SideContents';
    constructor () {}
}