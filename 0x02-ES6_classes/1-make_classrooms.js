import ClassRoom from './0-classroom';

/*export default function initializeRooms() {
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);
  return `[
    ClassRoom { _maxStudentsSize: ${room1._maxStudentsSize} },
    ClassRoom { _maxStudentsSize: ${room2._maxStudentsSize} },
    ClassRoom { _maxStudentsSize: ${room3._maxStudentsSize} }
]`;
}*/
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
