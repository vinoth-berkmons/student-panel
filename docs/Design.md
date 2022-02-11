## University Student Admin Panel

## Scope

We are building a small University Student Panel where student's course can be updated.
This is Mobile friendly Application

## APP Structure

    - src
      - app
        - common
          - components
            - All the common components placed it here
          - helpers
            - All the common functions placed it here
          - models
            - All the models placed it here
          - services
            - Services can be placed it here
        - containers
          - Auth module holds all the authentication related components
          - courses
            - Courses module holds all the course related components
          - dashboard
            - Dashboard module holds all the students related components
        - routing
          - Routing handled here
        - store
          - Auth
            - Authentication related redux handled here
          - courseSlice
            - Course related redux handled here
          - StudentSlice
            - Student related redux handled here
        - Store
        - RootReducer
          - Main store and root handled here
      - layout
        - layout of the App handled here
      - App.tsx
      - index.tsx
    - package.josn




## Improvements
    - UI could have been improved and make it more mobile friendly
    - Since we don't have proper authentication flow I have to rely on API call to fail to check whether user is authenticated or not
    - removing all the course at a time could have been improved
    - Validation for input field
    - Error message for API call fail
    - Clicking on the number of the pagination won't work
    - Refresh from student detail page  redirect to dashboard

    



### Thank you!