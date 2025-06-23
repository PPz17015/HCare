// Types for HCare - Healthcare Queue Management System

export interface User {
  id: string;
  fullName: string;
  phoneOrEmail: string;
  dateOfBirth: string;
  isVerified: boolean;
  createdAt: string;
}

export interface Room {
  id: string;
  name: string;
  currentNumber: number;
  yourNumber?: number;
  status: 'waiting' | 'coming_soon' | 'delayed' | 'completed' | 'calling';
  estimatedWaitTime: number; // in minutes
  totalPatients: number;
  remainingPatients: number;
  location: string;
  doctorName: string;
  specialty: string;
}

export interface QueueStatus {
  roomId: string;
  patientId: string;
  queueNumber: number;
  estimatedTime: string;
  status: 'waiting' | 'coming_soon' | 'calling' | 'completed' | 'missed';
  checkedInAt: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  timestamp: string;
  isRead: boolean;
  roomId?: string;
}

export interface AdminAction {
  type: 'next' | 'delay' | 'transfer';
  roomId: string;
  targetRoomId?: string; // for transfer
  delayMinutes?: number; // for delay
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface OTPRequest {
  phoneOrEmail: string;
  type: 'register' | 'login';
}

export interface OTPVerification {
  phoneOrEmail: string;
  otp: string;
  type: 'register' | 'login';
}

export interface RegisterRequest {
  fullName: string;
  phoneOrEmail: string;
  dateOfBirth: string;
  otp: string;
}

// Enums
export enum RoomStatus {
  WAITING = 'waiting',
  COMING_SOON = 'coming_soon', 
  DELAYED = 'delayed',
  COMPLETED = 'completed'
}

export enum QueueStatusEnum {
  WAITING = 'waiting',
  COMING_SOON = 'coming_soon',
  CALLING = 'calling',
  COMPLETED = 'completed',
  MISSED = 'missed'
}

export enum NotificationType {
  INFO = 'info',
  WARNING = 'warning', 
  SUCCESS = 'success',
  ERROR = 'error'
} 