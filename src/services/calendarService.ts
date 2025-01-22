import { UserAvailability } from "../types/CalendarData";

export const fetchClassroomsData = async (): Promise<string[]> => {
  const apiUrl = process.env.REACT_APP_CLASSROOMS_API_URL;
  if (apiUrl) {
    const response = await fetch(apiUrl);
    return response.json();
  } else return [];
};

export const fetchCalendarData = async (): Promise<{
  success: boolean;
  data: UserAvailability[];
}> => {
  const apiUrl = process.env.REACT_APP_AVAILABILITY_API_URL;
  if (apiUrl) {
    const response = await fetch(apiUrl);
    return response.json();
  } else return { success: false, data: [] };
};
