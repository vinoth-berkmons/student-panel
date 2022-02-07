export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: number;
  gender: string;
  dob: Date;
  status: string;
  courses: [];
}

export interface StudentState {
  studentsList: Student[] | null;
  loading: boolean;
  status: string;
  error: string | null;
}
