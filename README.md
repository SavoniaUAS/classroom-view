# React Calendar Grid for Classroom Availability

This project is a React-based calendar grid that displays classroom or user availability based on fetched calendar data. It dynamically updates availability status (e.g., "Busy" or "Free") using provided APIs and supports automatic refresh and pagination.

---

## Features

- **Dynamic Calendar Grid**: Displays classroom or user availability in a grid format, with times as rows and users as columns.
- **Custom Time Windows**: Option to display only upcoming hours or the full day's schedule.
- **Pagination**: Handles large datasets by paginating user columns.
- **Auto-Refresh**: Automatically fetches new data and rotates through paginated columns every 30 seconds.
- **GitHub Action for Azure Deployment**: Automatically deploys the application to Azure whenever new changes are pushed to the `main` branch.

---

## Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine.
- **Azure Account**: Set up an Azure Static Web App to host the project.
- **APIs**: Access to the required endpoints:
  - **Classroom List Endpoint**: Fetches the list of classrooms (`fetchClassroomsData`).
  - **Calendar Data Endpoint**: Fetches availability data for classrooms or users (`fetchCalendarData`).

---

## Installation

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the necessary API base URLs:

   ```
   REACT_APP_CLASSROOMS_API=<classrooms-endpoint>
   REACT_APP_CALENDAR_API=<calendar-data-endpoint>
   ```

4. **Run the Application**:
   ```bash
   npm start
   ```

---

## Local Environment Configuration

To run the application locally, you need to create a `.env.local` file in the root directory of the project. Add the following environment variables to the file:

```env
REACT_APP_COLUMNS_PER_PAGE=10          # Number of user columns displayed per page
REACT_APP_DAY_START_HOUR=7             # Start hour for the calendar grid (24-hour format)
REACT_APP_DAY_END_HOUR=18              # End hour for the calendar grid (24-hour format)
REACT_APP_REFRESH_INTERVAL_MINUTES=5   # Auto-refresh interval in minutes
REACT_APP_CLASSROOMS_API_URL=<url>     # Url of Azure-function getClassrooms
REACT_APP_AVAILABILITY_API_URL=<url>   # Url of Azure-function getCalendarData
```

---

## Deployment

### Automatic Deployment with GitHub Actions

This project includes a GitHub Action workflow configured to deploy the application to Azure Static Web Apps whenever new changes are pushed to the `main` branch.

#### Workflow File: `.github/workflows/azure-static-web-apps.yml`

The workflow performs the following:

- Installs dependencies.
- Builds the project.
- Deploys to Azure Static Web Apps.

#### Steps to Set Up Azure Deployment:

1. **Create an Azure Static Web App**:

   - Follow the [Azure documentation](https://learn.microsoft.com/en-us/azure/static-web-apps/) to create a Static Web App.
   - Note the **deployment token** for use in GitHub Secrets.

2. **Set Up GitHub Secrets**:

   - Go to your GitHub repository settings.
   - Under **Secrets and variables > Actions**, add a secret named `AZURE_STATIC_WEB_APPS_API_TOKEN`.
   - Paste the deployment token obtained from Azure.

3. **Push Changes to `main`**:
   - Once changes are pushed to the `main` branch, the GitHub Action will automatically build and deploy the project to Azure.

---

## Project Structure

### Key Files

- **`CalendarGrid.tsx`**: Main React component rendering the calendar grid.
- **`services/calendarService.ts`**: Contains functions for API calls to fetch classrooms and calendar data.
- **`types/CalendarData.ts`**: Defines TypeScript types for `CalendarEvent` and `UserAvailability`.
- **`WeeklyGrid.css`**: Styles for the calendar grid and pagination.
- **`.github/workflows/azure-static-web-apps.yml`**: GitHub Action workflow for Azure deployment.

---

## Usage

### API Integration

The application requires two APIs to function:

1. **Classroom List API** (`fetchClassroomsData`): Returns an array of classroom email addresses.
   Example Response:

   ```json
   ["room1@example.com", "room2@example.com"]
   ```

2. **Calendar Data API** (`fetchCalendarData`): Returns availability data for classrooms or users.
   Example Response:
   ```json
   {
     "success": true,
     "data": [
       {
         "userEmail": "room1@example.com",
         "userEvent": [
           {
             "StartTime": "2025-01-01T10:00:00",
             "EndTime": "2025-01-01T11:00:00",
             "BusyType": "Busy"
           }
         ]
       }
     ]
   }
   ```

### User Interaction

- **Auto-Refresh**: Enable or disable automatic data refresh using the checkbox.
- **Time Window**: Toggle between "upcoming hours only" and "full day" views.
- **Pagination**: Navigate between pages of user columns using the pagination controls.

---

## Customization

### Adjust Time Range

Modify `DAY_START_HOUR` and `DAY_END_HOUR` constants in `CalendarGrid.tsx` to change the default time range.

### Columns Per Page

Update `COLUMNS_PER_PAGE` to adjust the number of user columns displayed per page.

### Auto-Refresh Interval

Change the refresh interval by modifying the `setInterval` duration in the `useEffect` hooks.

---

## Error Handling

- Displays an error message if data fetching fails.
- Logs errors for debugging purposes.

---

## Limitations

- The application assumes consistent API responses. Unexpected changes in API structure may break functionality.
- Currently supports only 30-minute time slots. Custom intervals require modifying the `generateTimeSlots` function.

---

## Future Improvements

- Add search functionality for filtering classrooms or users.
- Support for multiple calendar views (daily, weekly, monthly).
- Enhance mobile responsiveness.
