## University Student Admin Panel

## Scope

We are building a small University Student Panel where student's course can be updated.
This is Mobile friendly Application

## APP Structure

    - src
      - app
        - common
          - components
            - button
            - fallback-view (loader)
          - helpers
            - Utils.ts
          - models
            - Auth.ts
            - common.ts
            - Courses.ts
            - Student.ts
          - services
        - containers
          - auth
            - AuthPage.tsx
          - courses
            - createCourse
              - CreateCourse.tsx
          - dashboard
            - student-list
              - StudentList.tsx
            - student-detail
              - StudentDetail.tsx
            - table
              - TableList.tsx
            - Dashboard.tsx
        - routing
          - Routing.tsx
          - PrivateRouting.tsx
          - PublicRouting.tsx
        - store
          - auth
            - authSlice.ts
            - constants.ts
            - thunks.ts
          - courseSlice
            - constants.ts
            - coursesSlice
            - createCourseSlice.ts
            - thunks.ts
          - StudentSlice
            - constants.ts
            - studentDetailSlice.ts
            - studentSlice.ts
            - thunks.ts
          - appConstants.ts
          - RootReducer.ts
          - Store.ts
      - layout
      - styles
        - components
          - aside
          - content
          - header
        - MasterLayout.tsx
      - App.tsx
      - index.tsx
    - package.josn




## Improvements
    - UI could have been improved and make it more mobile friendly
    - Since we don't have proper authentication flow I have to rely on API call to fail to check whether user is authenticated or not
    - removing all the course at a time could have been improved
    - Validation for input field
    - Error message for API call fail

## known issues
    - Clicking on number of the pagination won't work
    - Refresh from student detail page  redirect to dashboard



### Thank you!