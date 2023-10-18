export interface User {
  id?: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  region: string;
  status: boolean;
  role: string;
  dateOfBirth: Date;
  gender: string;
  job: string;
  post?: string;
  office: string;
  image?: any;
  password: string;
  universityOrCompany: string;
}
