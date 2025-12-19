export interface Runner {
  name: string;
  image: string; // URL to avatar image
  message: string; // Profile comment or enthusiasm
  instagramId?: string; // e.g. "runner_taro"
  targetTime?: string; // e.g. "45:00"
  hobby?: string; // e.g. "Sauna, Coffee"
}

export interface RelaySection {
  id: number;
  section: string; // e.g., "1区"
  label: string; // e.g., "芦ノ湖 〜 小涌谷"
  runners: Runner[]; // Changed from simple string to structured array
  distance: string; // e.g., "10.2km"
  description: string; // Course notes
  mapImage: string; // Path to local image
  coordinates: string; // Lat,Lng string for Google Maps
  logistics: string; // Parking/Car info
  timeEstimation?: string; // e.g., "7:30 - 8:40"
}