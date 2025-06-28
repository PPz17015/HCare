import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Badge,
  Grid,
  Button,
  Link,
  Separator,
  Container,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaStar, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { bookingCareColors } from '../theme';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface Clinic {
  name: string;
  address: string;
  price: string;
  phone: string;
}

interface DoctorProps {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  rating: number;
  reviewCount: number;
  avatar: string;
  education: string;
  clinic: Clinic;
  morningSlots: TimeSlot[];
  afternoonSlots: TimeSlot[];
}

const DoctorAppointmentCard: React.FC<{ doctor: DoctorProps }> = ({ doctor }) => {
  const [selectedDate, setSelectedDate] = useState('2024-01-08');
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    if (selectedSlot) {
      // Store selected appointment info in sessionStorage to pass to booking form
      sessionStorage.setItem('selectedAppointment', JSON.stringify({
        doctor: doctor,
        selectedDate: selectedDate,
        selectedSlot: selectedSlot
      }));
      navigate('/booking-form');
    }
  };

  // Generate dates from today for the next 7 days
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    const dayNames = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const dayName = i === 0 ? 'Hôm nay' : dayNames[date.getDay()];
      const dateStr = `${date.getDate()}/${date.getMonth() + 1}`;
      
      dates.push({
        date: date.toISOString().split('T')[0],
        display: i === 0 ? `${dayName} - ${dateStr}` : `${dayName} - ${dateStr}`
      });
    }
    return dates;
  };

  const availableDates = generateAvailableDates();

  return (
    <Box maxW="95%" mx="auto" py={4} px={{ base: 4, md: 6 }}>
      <Box
        bg="white"
        borderRadius="xl"
        shadow="lg"
        border="1px"
        borderColor="gray.200"
        overflow="hidden"
      >
        <Flex direction={{ base: 'column', lg: 'row' }} gap={0}>
          {/* Doctor Info - Left Side */}
          <Box flex="1" p={6} borderRight={{ lg: '1px solid' }} borderColor="gray.200">
            <VStack align="start" gap={4}>
              {/* Doctor Header */}
              <Flex gap={4} align="start" w="full">
                <Box
                  w="70px"
                  h="70px"
                  borderRadius="full"
                  overflow="hidden"
                  bg={bookingCareColors.primaryLight}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color={bookingCareColors.primary}
                  fontSize="20px"
                  fontWeight="bold"
                >
                  {doctor.avatar ? (
                    <img 
                      src={doctor.avatar} 
                      alt={doctor.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    doctor.name.split(' ').map(n => n[0]).join('')
                  )}
                </Box>
                <VStack align="start" flex="1" gap={2}>
                  <Text fontSize="xl" fontWeight="bold" color={bookingCareColors.text.primary}>
                    {doctor.title} {doctor.name}
                  </Text>
                  <Badge
                    colorScheme="blue"
                    variant="subtle"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="md"
                  >
                    {doctor.specialty}
                  </Badge>
                  <HStack>
                    <HStack gap={1}>
                      {[...Array(5)].map((_, i) => (
                        <Box key={i} as="span">
                          {React.createElement(FaStar as any, {
                            color: i < Math.floor(doctor.rating) ? '#FFD700' : '#E2E8F0',
                            size: '16px'
                          })}
                        </Box>
                      ))}
                    </HStack>
                    <Text fontSize="md" color={bookingCareColors.text.secondary}>
                      {doctor.rating}/5 ({doctor.reviewCount} đánh giá)
                    </Text>
                  </HStack>
                </VStack>
              </Flex>

              {/* Doctor Details */}
              <VStack align="start" gap={3} w="full">
                <Box>
                  <Text fontSize="md" fontWeight="600" color={bookingCareColors.text.primary} mb={1}>
                    Kinh nghiệm
                  </Text>
                  <Text fontSize="md" color={bookingCareColors.text.secondary}>
                    {doctor.experience}
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="md" fontWeight="600" color={bookingCareColors.text.primary} mb={1}>
                    Học vấn
                  </Text>
                  <Text fontSize="md" color={bookingCareColors.text.secondary}>
                    {doctor.education}
                  </Text>
                </Box>

                <Separator />

                {/* Quick Contact */}
                <VStack align="start" gap={2} w="full">
                  <Text fontSize="sm" fontWeight="600" color={bookingCareColors.text.primary}>
                    Liên hệ nhanh
                  </Text>
                  <HStack gap={4}>
                    <Button
                      size="sm"
                      variant="outline"
                      colorScheme="blue"
                      borderRadius="full"
                    >
                      <Flex align="center" gap={2}>
                        <Box as="span">
                          {React.createElement(FaPhoneAlt as any)}
                        </Box>
                        <Text>Gọi ngay</Text>
                      </Flex>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      colorScheme="blue"
                      borderRadius="full"
                    >
                      Xem CV
                    </Button>
                  </HStack>
                </VStack>
              </VStack>
            </VStack>
          </Box>

          {/* Appointment Booking - Right Side */}
          <Box flex="1" p={6}>
            <VStack align="start" gap={4}>
              <Text fontSize="xl" fontWeight="bold" color={bookingCareColors.text.primary}>
                Đặt lịch khám
              </Text>

              {/* Date Selection */}
              <Box w="full">
                <Text fontSize="md" fontWeight="600" color={bookingCareColors.text.primary} mb={2}>
                  Chọn ngày khám
                </Text>
                <Grid templateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap={2}>
                  {availableDates.map((dateOption) => (
                    <Button
                      key={dateOption.date}
                      size="sm"
                      variant={selectedDate === dateOption.date ? 'solid' : 'outline'}
                      colorScheme="blue"
                      onClick={() => setSelectedDate(dateOption.date)}
                      fontSize="xs"
                      py={2}
                    >
                      {dateOption.display}
                    </Button>
                  ))}
                </Grid>
              </Box>

              {/* Time Slots */}
              <Box w="full">
                {/* Morning Slots */}
                <Text fontSize="md" fontWeight="600" color={bookingCareColors.text.primary} mb={2}>
                  Buổi sáng
                </Text>
                <Grid templateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap={2} mb={3}>
                  {doctor.morningSlots.map((slot) => (
                    <Button
                      key={slot.time}
                      size="sm"
                      variant={selectedSlot === slot.time ? 'solid' : 'outline'}
                      colorScheme={selectedSlot === slot.time ? 'blue' : 'gray'}
                      onClick={() => slot.available && setSelectedSlot(slot.time)}
                      disabled={!slot.available}
                      fontSize="sm"
                      py={2}
                    >
                      {slot.time}
                    </Button>
                  ))}
                </Grid>

                {/* Afternoon Slots */}
                <Text fontSize="md" fontWeight="600" color={bookingCareColors.text.primary} mb={2}>
                  Buổi chiều
                </Text>
                <Grid templateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap={2}>
                  {doctor.afternoonSlots.map((slot) => (
                    <Button
                      key={slot.time}
                      size="sm"
                      variant={selectedSlot === slot.time ? 'solid' : 'outline'}
                      colorScheme={selectedSlot === slot.time ? 'blue' : 'gray'}
                      onClick={() => slot.available && setSelectedSlot(slot.time)}
                      disabled={!slot.available}
                      fontSize="sm"
                      py={2}
                    >
                      {slot.time}
                    </Button>
                  ))}
                </Grid>
                
                <Text fontSize="sm" color={bookingCareColors.text.secondary} mt={2} textAlign="center">
                  Chọn và đặt
                </Text>
              </Box>

              <Separator />

              {/* Clinic Info */}
              <VStack align="start" gap={3} w="full">
                <Text fontSize="md" fontWeight="600" color={bookingCareColors.text.primary}>
                  Thông tin phòng khám
                </Text>
                
                <VStack align="start" gap={2} w="full">
                  <Link
                    fontSize="md"
                    fontWeight="600"
                    color={bookingCareColors.primary}
                    _hover={{ textDecoration: 'underline' }}
                  >
                    {doctor.clinic.name}
                  </Link>
                  
                  <HStack align="start" gap={2}>
                    <Box as="span">
                      {React.createElement(FaMapMarkerAlt as any, { 
                        color: bookingCareColors.text.secondary, 
                        size: '14px' 
                      })}
                    </Box>
                    <Text fontSize="md" color={bookingCareColors.text.secondary} lineHeight="1.4">
                      {doctor.clinic.address}
                    </Text>
                  </HStack>

                  <HStack justify="space-between" w="full">
                    <Text fontSize="md" color={bookingCareColors.text.secondary}>
                      Giá khám:
                    </Text>
                    <HStack>
                      <Text fontSize="md" fontWeight="600" color={bookingCareColors.primary}>
                        {doctor.clinic.price}
                      </Text>
                      <Link
                        fontSize="sm"
                        color={bookingCareColors.primary}
                        _hover={{ textDecoration: 'underline' }}
                      >
                        Xem chi tiết
                      </Link>
                    </HStack>
                  </HStack>

                  <HStack justify="space-between" w="full">
                    <Text fontSize="md" color={bookingCareColors.text.secondary}>
                      Bảo hiểm:
                    </Text>
                    <Link
                      fontSize="sm"
                      color={bookingCareColors.primary}
                      _hover={{ textDecoration: 'underline' }}
                    >
                      Xem chi tiết
                    </Link>
                  </HStack>
                </VStack>
              </VStack>

              {/* Book Button */}
              <Button
                w="full"
                bg={bookingCareColors.primary}
                color="white"
                size="lg"
                borderRadius="lg"
                disabled={!selectedSlot}
                onClick={handleBookAppointment}
                _hover={{
                  bg: bookingCareColors.primaryDark,
                  transform: 'translateY(-2px)',
                  shadow: 'lg'
                }}
                _disabled={{
                  bg: 'gray.300',
                  cursor: 'not-allowed',
                  transform: 'none',
                  _hover: { transform: 'none' }
                }}
              >
                {selectedSlot ? `Đặt lịch ${selectedSlot}` : 'Chọn giờ khám'}
              </Button>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default DoctorAppointmentCard; 