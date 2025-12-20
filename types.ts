export interface Runner {
  name: string;
  image: string; // URL to avatar image
  message: string; // Profile comment or enthusiasm
  instagramId?: string; // e.g. "runner_taro"
  targetTime?: string; // e.g. "45:00"
  hobby?: string; // e.g. "Sauna, Coffee"
}

export interface SpotLink {
  label: string; // e.g., "給水所", "応援スポット", "写真スポット"
  url: string; // External URL
}

export interface RelaySection {
  id: number;
  section: string; // e.g., "1区"
  label: string; // e.g., "芦ノ湖 〜 小涌谷"
  runners: Runner[]; // Changed from simple string to structured array
  distance: string; // e.g., "10.2km"
  description: string; // Course notes
  mapImage: string; // Path to local image (たすき受け渡し場所)
  routeImages?: string[]; // Route guide images (ルート案内画像)
  coordinates: string; // 出発場所 (Start point for Google Maps)
  handoverCoordinates?: string; // たすき受け渡し場所 (Handover point for Google Maps)
  logistics: string; // Parking/Car info
  timeEstimation?: string; // e.g., "7:30 - 8:40"
  spotLinks?: SpotLink[]; // Links to water stations, cheer spots, photo spots
}