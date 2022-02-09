/**
 * Course
 */

type Batch = "Sophomore" | "Junior" | "Senior";

export interface Course {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  batch: Batch;
  department: string;
  startDate: string;
  endDate: string;
}

export interface CourseOption {
  id: string;
  name: string;
}
