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

export interface StudentCourse {
  id: string;
  name: string;
}

export interface CourseOption {
  value: string;
  label: string;
}

/**
 * Course store state
 */
export interface CoursesState {
  courses: CourseOption[];
  loading: boolean;
  status: string;
  error: string | null;
}

export interface CreateCourseState {
  course: Course | null;
  loading: boolean;
  status: string;
  error: string | null;
}

export interface AddCourse {
  studentId: string;
  courseId: string;
}
