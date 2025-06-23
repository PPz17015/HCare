import { User, Room, QueueStatus, Notification } from '../types';

// Mock User Data
export const mockUsers: User[] = [
  {
    id: '1',
    fullName: 'Nguyễn Văn An',
    phoneOrEmail: '0901234567',
    dateOfBirth: '1990-05-15',
    isVerified: true,
    createdAt: '2024-01-15T08:00:00Z'
  },
  {
    id: '2',
    fullName: 'Trần Thị Bình',
    phoneOrEmail: 'binh.tran@email.com',
    dateOfBirth: '1985-11-22',
    isVerified: true,
    createdAt: '2024-01-10T10:30:00Z'
  }
];

// Mock Room Data
export const mockRooms: Room[] = [
  {
    id: 'room-1',
    name: 'Phòng Tim Mạch A1',
    currentNumber: 15,
    yourNumber: 18,
    status: 'coming_soon',
    estimatedWaitTime: 25,
    totalPatients: 30,
    remainingPatients: 12,
    location: 'Tầng 2, Khoa Tim Mạch',
    doctorName: 'BS. Nguyễn Văn Thành',
    specialty: 'Tim Mạch'
  },
  {
    id: 'room-2', 
    name: 'Phòng Nhi Khoa B2',
    currentNumber: 8,
    yourNumber: 12,
    status: 'waiting',
    estimatedWaitTime: 45,
    totalPatients: 20,
    remainingPatients: 8,
    location: 'Tầng 3, Khoa Nhi',
    doctorName: 'BS. Lê Thị Mai',
    specialty: 'Nhi Khoa'
  },
  {
    id: 'room-3',
    name: 'Phòng Da Liễu C1',
    currentNumber: 22,
    yourNumber: 25,
    status: 'waiting',
    estimatedWaitTime: 30,
    totalPatients: 25,
    remainingPatients: 3,
    location: 'Tầng 1, Khoa Da Liễu',
    doctorName: 'BS. Phạm Minh Tuấn',
    specialty: 'Da Liễu'
  },
  {
    id: 'room-4',
    name: 'Phòng Nội Khoa D3',
    currentNumber: 5,
    status: 'delayed',
    estimatedWaitTime: 60,
    totalPatients: 15,
    remainingPatients: 10,
    location: 'Tầng 4, Khoa Nội',
    doctorName: 'BS. Hoàng Văn Long',
    specialty: 'Nội Khoa'
  },
  {
    id: 'room-5',
    name: 'Phòng Sản Phụ Khoa E1',
    currentNumber: 3,
    yourNumber: 3,
    status: 'calling',
    estimatedWaitTime: 0,
    totalPatients: 8,
    remainingPatients: 5,
    location: 'Tầng 5, Khoa Sản',
    doctorName: 'BS. Nguyễn Thị Hoa',
    specialty: 'Sản Phụ Khoa'
  }
];

// Mock Queue Status
export const mockQueueStatus: QueueStatus[] = [
  {
    roomId: 'room-1',
    patientId: '1',
    queueNumber: 18,
    estimatedTime: '14:30',
    status: 'coming_soon',
    checkedInAt: '2024-12-25T13:00:00Z'
  },
  {
    roomId: 'room-2',
    patientId: '1', 
    queueNumber: 12,
    estimatedTime: '15:15',
    status: 'waiting',
    checkedInAt: '2024-12-25T13:30:00Z'
  },
  {
    roomId: 'room-5',
    patientId: '2',
    queueNumber: 3,
    estimatedTime: '14:00',
    status: 'calling',
    checkedInAt: '2024-12-25T12:45:00Z'
  }
];

// Mock Notifications
export const mockNotifications: Notification[] = [
  {
    id: 'notif-1',
    title: 'Sắp đến lượt khám',
    message: 'Phòng Tim Mạch A1 - Còn 2-3 số nữa đến lượt bạn. Vui lòng chuẩn bị sẵn sàng.',
    type: 'warning',
    timestamp: '2024-12-25T14:15:00Z',
    isRead: false,
    roomId: 'room-1'
  },
  {
    id: 'notif-2',
    title: 'Lịch khám bị hoãn',
    message: 'Phòng Nội Khoa D3 - Lịch khám bị hoãn 30 phút do bác sĩ có cấp cứu.',
    type: 'error', 
    timestamp: '2024-12-25T13:45:00Z',
    isRead: false,
    roomId: 'room-4'
  },
  {
    id: 'notif-3',
    title: 'Đã xác nhận lịch khám',
    message: 'Bạn đã đăng ký thành công lịch khám tại Phòng Nhi Khoa B2.',
    type: 'success',
    timestamp: '2024-12-25T13:30:00Z',
    isRead: true,
    roomId: 'room-2'
  }
];

// Current authenticated user
export const currentUser: User = mockUsers[0];

// Helper functions
export const getRoomById = (roomId: string): Room | undefined => {
  return mockRooms.find(room => room.id === roomId);
};

export const getQueueStatusByUser = (userId: string): QueueStatus[] => {
  return mockQueueStatus.filter(queue => queue.patientId === userId);
};

export const getUnreadNotifications = (userId: string): Notification[] => {
  return mockNotifications.filter(notif => !notif.isRead);
};

// Status color mapping for UI
export const getStatusColor = (status: string) => {
  switch (status) {
    case 'coming_soon':
    case 'calling':
      return 'green';
    case 'waiting':
      return 'blue';
    case 'delayed':
      return 'red';
    case 'completed':
      return 'gray';
    default:
      return 'gray';
  }
};

// Status text mapping
export const getStatusText = (status: string) => {
  switch (status) {
    case 'coming_soon':
      return 'Còn 2-3 số nữa';
    case 'calling':
      return 'Đang gọi';
    case 'waiting':
      return 'Đang chờ';
    case 'delayed':
      return 'Đã hoãn';
    case 'completed':
      return 'Đã hoàn thành';
    default:
      return 'Không xác định';
  }
}; 