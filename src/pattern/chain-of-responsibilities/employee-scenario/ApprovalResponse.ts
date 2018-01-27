export enum ResponseStatus {
    Denied,
    Approved,
    Limited
}
export class ApprovalResponse {
    private state: ResponseStatus;

    constructor(status: ResponseStatus) {
        this.state = status;
    }

    static denied(): ApprovalResponse {
        return new ApprovalResponse(ResponseStatus.Denied);
    }
    static approved(): ApprovalResponse {
        return new ApprovalResponse(ResponseStatus.Approved);
    }
    static limited(): ApprovalResponse {
        return new ApprovalResponse(ResponseStatus.Limited);
    }

    isDenied(): boolean {
        return this.state === ResponseStatus.Denied;
    }
    isApproved(): boolean {
        return this.state === ResponseStatus.Approved;
    }
    isLimited(): boolean {
        return this.state === ResponseStatus.Limited;
    }
}