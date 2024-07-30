import { Payslip } from "../types/Payslip";
import { generateUniqueId } from "../utils/generateUniqueId";

const createMockFile = (fileName: string, fileType: string): File => {
  const blob = new Blob(["Sample file content"], { type: fileType });
  return new File([blob], fileName, { type: fileType });
};

export const mockPayslips: Payslip[] = [
  {
    id: generateUniqueId(),
    fromDate: '2023-07-01',
    toDate: '2023-07-15',
    file: createMockFile('payslip1.pdf', 'application/pdf'),
  },
  {
    id: generateUniqueId(),
    fromDate: '2023-07-16',
    toDate: '2023-07-31',
    file: createMockFile('payslip2.pdf', 'application/pdf'),
  },
  {
    id: generateUniqueId(),
    fromDate: '2023-08-01',
    toDate: '2023-08-15',
    file: createMockFile('payslip3.jpg', 'image/jpeg'),
  },
];
