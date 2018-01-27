/// first step of refactoring
// export enum DeviceStatus {
//     AllFine = 0,
//     NotOperational = 1,
//     VisibilityDamage = 2,
//     CircuitryFaild = 3
// }

export enum StatusrepResentation {
    AllFine = 0,
    NotOperational = 1,
    VisibilityDamage = 2,
    CircuitryFaild = 3
}

export class DeviceStatus {
    private status: StatusrepResentation;

    constructor(status: StatusrepResentation) {
        this.status = status;
    }

    static allFine(): DeviceStatus {
        return new DeviceStatus(StatusrepResentation.AllFine);
    }


    withVisibleDamage(): DeviceStatus {
        return new DeviceStatus(this.status | StatusrepResentation.VisibilityDamage);
    }

    notOperational(): DeviceStatus {
        return new DeviceStatus(this.status | StatusrepResentation.NotOperational);
    }

    required(): DeviceStatus {
        return new DeviceStatus(this.status & ~StatusrepResentation.NotOperational);
    }

    circuitryFaild(): DeviceStatus {
        return new DeviceStatus(this.status | StatusrepResentation.CircuitryFaild);
    }

    circuitryReplaced(): DeviceStatus {
        return new DeviceStatus(this.status & ~StatusrepResentation.CircuitryFaild);
    }
}


