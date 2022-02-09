import { CourseOption } from "./Courses";

/**
 * Student model
 */
export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  department: string;
  email: string;
  mobile: number;
  gender: string;
  dob: Date;
  status: string;
  courses: CourseOption[];
}

/**
 * Student store state
 */
export interface StudentState {
  students: Student[] | null;
  loading: boolean;
  status: string;
  error: string | null;
}
export interface StudentDetailState {
  student: Student | null;
  loading: boolean;
  status: string;
  error: string | null;
}
