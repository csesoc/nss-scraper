
export type UngroupedRoomBooking = {
  name: string;
  day: string;
  start: string;
  weekPattern: number;
}

export type RawRoomBooking = {
  name: string;
  roomId: string;
  day: string;
  start: string;
  end: string;
  weekPattern: number;
}

export type RoomBooking = {
  bookingType: string;
  name: string;
  roomId: string;
  start: Date;
  end: Date;
}

export type Room = {
  abbr: string;
  name: string;
  id: string;
  usage: string;
  capacity: number;
  school: string;
}

export type ParsedName = {
  bookingType: string;
  name: string;
}

export type NameParser = {
  pattern: RegExp;
  parser: (matchGroups: Record<string, string>) => ParsedName;
}

export type Building = {
  name: string;
  id: string;
  lat: number;
  long: number;
}

export type LocationData = {
  buildings: Array<{
    name: string;
    id: string;
    lat: number;
    long: number;
  }>;
}

export type BuildingDatabase = {
  [buildingId: string]: BuildingData;
};

export type BuildingData = {
  name: string;
  id: string;
  lat: number;
  long: number;
  rooms: {
    [roomNumber: string]: RoomData;
  };
};

export type RoomData = {
  name: string;
  id: string;
  capacity: number;
  usage: RoomUsage;
};

export type RoomUsage = "LEC" | "TUT";