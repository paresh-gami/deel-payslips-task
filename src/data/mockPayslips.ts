import { Payslip } from "../types/Payslip";
import { generateUniqueId } from "../utils/generateUniqueId";

export const mockPayslips: Payslip[] = [
  {
    id: generateUniqueId(),
    fromDate: '2023-07-01',
    toDate: '2023-07-15',
    file: {
      path: 'https://pdfobject.com/pdf/sample.pdf',
      mimeType: 'application/pdf'
    }
  },
  {
    id: generateUniqueId(),
    fromDate: '2023-07-16',
    toDate: '2023-07-31',
    file: {
      path: 'https://pdfobject.com/pdf/sample.pdf',
      mimeType: 'application/pdf'
    }
  },
  {
    id: generateUniqueId(),
    fromDate: '2023-08-01',
    toDate: '2023-08-15',
    file: {
      path: 'https://pdfobject.com/pdf/sample.pdf',
      mimeType: 'application/pdf'
    }
  },
];
