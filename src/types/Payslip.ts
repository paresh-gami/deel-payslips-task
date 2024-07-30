interface File {
    path: string;
    mimeType: string
}
export interface Payslip {
    id: string;
    fromDate: string;
    toDate: string;
    file: File;
}
