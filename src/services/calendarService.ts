import { UserAvailability } from "../types/CalendarData";

export const fetchClassroomsData = async (): Promise<string[]> => {
  const API_URL =
    "https://classroomview-func.azurewebsites.net/api/getClassrooms?code=EHMKiWVC0m_G_mZsU0wdadDL7bu9_D-73n0ha8X1zlTBAzFuM-HO3g%3D%3D";
  const response = await fetch(API_URL);
  return response.json();
};

export const fetchCalendarData = async (): Promise<{
  success: boolean;
  data: UserAvailability[];
}> => {
  const API_URL =
    "https://classroomview-func.azurewebsites.net/api/getCalendarData?code=uqs8Zf76n5EcLAQ4qosrD2WJ5NOPxEMf-WGZo2U3LPoCAzFuEbIsVQ%3D%3D";
  const response = await fetch(API_URL);
  return response.json();
};
