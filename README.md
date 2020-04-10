# 05 Third-Party APIs: Work Day Scheduler

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
> Used moment() to return the current date/time
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
> Used for loop to show the timeblocks with standard business hours 9AM through 5PM
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
> In the for loop, attr classes depend on time period
WHEN I click into a timeblock
THEN I can enter an event
> added input to get an user input
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
> setItem to localStorage and localStorage gets refreshed day after once you open the program
WHEN I refresh the page
THEN the saved events persist
> getItem from localStorage to pull user data into the timeblock
```

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
