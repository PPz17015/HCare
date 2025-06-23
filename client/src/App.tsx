import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  VStack,
  HStack,
  Card,
  Input,
  Button,
  Text,
  Badge,
  Avatar,
  SimpleGrid,
  useBreakpointValue,
  Icon,
  Separator,
  Textarea,
  Group,
} from '@chakra-ui/react';

// Mock data
const hospitals = [
  { id: 1, name: 'Bệnh viện Đại học Y Hà Nội' },
  { id: 2, name: 'Bệnh viện Bạch Mai' },
  { id: 3, name: 'Bệnh viện Việt Đức' },
  { id: 4, name: 'Bệnh viện K' },
];

const departments = [
  { id: 1, name: 'Tim mạch', icon: '❤️' },
  { id: 2, name: 'Nhi khoa', icon: '👶' },
  { id: 3, name: 'Da liễu', icon: '🧴' },
  { id: 4, name: 'Nội khoa', icon: '🩺' },
  { id: 5, name: 'Ngoại khoa', icon: '⚕️' },
  { id: 6, name: 'Sản phụ khoa', icon: '👩‍⚕️' },
];

const doctors = [
  {
    id: 1,
    name: 'BS. Nguyễn Văn An',
    specialty: 'Tim mạch',
    avatar: 'https://bit.ly/dan-abramov',
    rating: 4.8,
    experience: '15 năm',
    isOnDuty: true,
    shiftTime: '8:00 - 16:00',
  },
  {
    id: 2,
    name: 'BS. Trần Thị Bình',
    specialty: 'Nhi khoa',
    avatar: 'https://bit.ly/sage-adebayo',
    rating: 4.9,
    experience: '12 năm',
    isOnDuty: false,
    shiftTime: '14:00 - 22:00',
  },
  {
    id: 3,
    name: 'BS. Lê Hoàng Cường',
    specialty: 'Da liễu',
    avatar: 'https://bit.ly/prosper-baba',
    rating: 4.7,
    experience: '8 năm',
    isOnDuty: true,
    shiftTime: '6:00 - 14:00',
  },
];

const timeSlots = [
  { time: '08:00', available: true, period: 'morning' },
  { time: '09:00', available: true, period: 'morning' },
  { time: '10:00', available: false, period: 'morning' },
  { time: '11:00', available: true, period: 'morning' },
  { time: '14:00', available: true, period: 'afternoon' },
  { time: '15:00', available: true, period: 'afternoon' },
  { time: '16:00', available: false, period: 'afternoon' },
  { time: '17:00', available: true, period: 'afternoon' },
  { time: '19:00', available: true, period: 'evening' },
  { time: '20:00', available: true, period: 'evening' },
];

const bookedAppointments = [
  {
    id: 1,
    doctor: 'BS. Nguyễn Văn An',
    date: '2024-12-25',
    time: '09:00',
    status: 'Đã xác nhận',
    specialty: 'Tim mạch',
  },
  {
    id: 2,
    doctor: 'BS. Trần Thị Bình',
    date: '2024-12-28',
    time: '14:00',
    status: 'Đang chờ',
    specialty: 'Nhi khoa',
  },
];

function App() {
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const isMobile = useBreakpointValue({ base: true, lg: false });

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onDutyDoctors = doctors.filter(doctor => doctor.isOnDuty);

  const handleConfirmAppointment = () => {
    if (selectedDoctor && selectedDate && selectedTime) {
      alert(`Đặt lịch thành công!\nBác sĩ: ${selectedDoctor.name}\nNgày: ${selectedDate}\nGiờ: ${selectedTime}`);
    }
  };

  return (
    <Box minH="100vh" bg="gray.50">
      {/* Header */}
      <Box bg="white" boxShadow="sm" py={4}>
        <Container maxW="7xl">
          <HStack justify="space-between">
            <Heading size="lg" color="blue.600">
              🏥 HCare - Đặt lịch khám bệnh
            </Heading>
            <HStack gap={4}>
              <Text fontSize="lg">📞</Text>
              <Text fontSize="sm">Hotline: 1900-1234</Text>
            </HStack>
          </HStack>
        </Container>
      </Box>

      <Container maxW="7xl" py={8}>
        <Grid
          templateColumns={isMobile ? '1fr' : '1fr 350px'}
          gap={8}
          alignItems="start"
        >
          {/* Main Booking Section */}
          <GridItem>
            <VStack gap={6} align="stretch">
              {/* Search Section */}
              <Card.Root>
                <Card.Header>
                  <Heading size="md" color="blue.600">
                    🔍 Tìm kiếm bác sĩ
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <Group>
                    <Text fontSize="lg" color="gray.400">🔍</Text>
                    <Input
                      placeholder="Tìm theo tên bác sĩ hoặc chuyên khoa..."
                      value={searchTerm}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                      borderRadius="xl"
                      flex="1"
                    />
                  </Group>
                </Card.Body>
              </Card.Root>

              {/* Hospital and Department Selection */}
              <SimpleGrid columns={isMobile ? 1 : 2} gap={6}>
                <Card.Root>
                  <Card.Header>
                    <Heading size="md" color="blue.600">
                      🏥 Chọn bệnh viện
                    </Heading>
                  </Card.Header>
                  <Card.Body>
                    <select
                      value={selectedHospital}
                      onChange={(e) => setSelectedHospital(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '12px',
                        border: '1px solid #E2E8F0',
                        fontSize: '1rem',
                        backgroundColor: 'white'
                      }}
                    >
                      <option value="">Chọn bệnh viện</option>
                      {hospitals.map((hospital) => (
                        <option key={hospital.id} value={hospital.id}>
                          {hospital.name}
                        </option>
                      ))}
                    </select>
                  </Card.Body>
                </Card.Root>

                <Card.Root>
                  <Card.Header>
                    <Heading size="md" color="blue.600">
                      🩺 Chọn chuyên khoa
                    </Heading>
                  </Card.Header>
                  <Card.Body>
                    <SimpleGrid columns={2} gap={2}>
                      {departments.map((dept) => (
                        <Button
                          key={dept.id}
                          variant={selectedDepartment === dept.id.toString() ? 'solid' : 'outline'}
                          size="sm"
                          onClick={() => setSelectedDepartment(dept.id.toString())}
                          borderRadius="xl"
                          colorScheme="blue"
                        >
                          <Text mr={1}>{dept.icon}</Text>
                          {dept.name}
                        </Button>
                      ))}
                    </SimpleGrid>
                  </Card.Body>
                </Card.Root>
              </SimpleGrid>

              {/* Doctor Selection */}
              <Card.Root>
                <Card.Header>
                  <Heading size="md" color="blue.600">
                    👨‍⚕️ Chọn bác sĩ
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <SimpleGrid columns={isMobile ? 1 : 2} gap={4}>
                    {filteredDoctors.map((doctor) => (
                      <Card.Root
                        key={doctor.id}
                        cursor="pointer"
                        border={selectedDoctor?.id === doctor.id ? '2px solid' : '1px solid'}
                        borderColor={selectedDoctor?.id === doctor.id ? 'blue.500' : 'gray.200'}
                        onClick={() => setSelectedDoctor(doctor)}
                        _hover={{ boxShadow: 'lg' }}
                        transition="all 0.2s"
                      >
                        <Card.Body>
                          <HStack gap={4}>
                            <Avatar.Root size="md">
                              <Avatar.Fallback name={doctor.name} />
                              <Avatar.Image {...{ src: doctor.avatar }} />
                            </Avatar.Root>
                            <VStack align="start" gap={1}>
                              <Text fontWeight="bold">{doctor.name}</Text>
                              <Text fontSize="sm" color="gray.600">
                                {doctor.specialty}
                              </Text>
                              <HStack>
                                <Text color="yellow.400">⭐</Text>
                                <Text fontSize="xs">{doctor.rating}</Text>
                                <Text fontSize="xs" color="gray.500">
                                  ({doctor.experience})
                                </Text>
                              </HStack>
                              {doctor.isOnDuty && (
                                <Badge colorScheme="green" fontSize="xs">
                                  Đang trực
                                </Badge>
                              )}
                            </VStack>
                          </HStack>
                        </Card.Body>
                      </Card.Root>
                    ))}
                  </SimpleGrid>
                </Card.Body>
              </Card.Root>

              {/* Date and Time Selection */}
              {selectedDoctor && (
                <SimpleGrid columns={isMobile ? 1 : 2} gap={6}>
                  <Card.Root>
                    <Card.Header>
                      <Heading size="md" color="blue.600">
                        📅 Chọn ngày
                      </Heading>
                    </Card.Header>
                    <Card.Body>
                      <Input
                        type="date"
                        value={selectedDate}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        borderRadius="xl"
                      />
                    </Card.Body>
                  </Card.Root>

                  <Card.Root>
                    <Card.Header>
                      <Heading size="md" color="blue.600">
                        ⏰ Chọn giờ
                      </Heading>
                    </Card.Header>
                    <Card.Body>
                      <VStack gap={3} align="stretch">
                        {['morning', 'afternoon', 'evening'].map((period) => (
                          <Box key={period}>
                            <Text fontSize="sm" fontWeight="bold" mb={2} color="gray.600">
                              {period === 'morning' ? '🌅 Sáng' : 
                               period === 'afternoon' ? '☀️ Chiều' : '🌙 Tối'}
                            </Text>
                            <SimpleGrid columns={3} gap={2}>
                              {timeSlots
                                .filter((slot) => slot.period === period)
                                .map((slot) => (
                                  <Button
                                    key={slot.time}
                                    size="sm"
                                    variant={selectedTime === slot.time ? 'solid' : 'outline'}
                                    disabled={!slot.available}
                                    onClick={() => setSelectedTime(slot.time)}
                                    borderRadius="xl"
                                    colorScheme="blue"
                                  >
                                    {slot.time}
                                  </Button>
                                ))}
                            </SimpleGrid>
                          </Box>
                        ))}
                      </VStack>
                    </Card.Body>
                  </Card.Root>
                </SimpleGrid>
              )}

              {/* Appointment Summary */}
              {selectedDoctor && selectedDate && selectedTime && (
                <Card.Root bg="blue.50" borderLeft="4px solid" borderLeftColor="blue.500">
                  <Card.Header>
                    <Heading size="md" color="blue.600">
                      📋 Xác nhận thông tin đặt lịch
                    </Heading>
                  </Card.Header>
                  <Card.Body>
                    <VStack gap={3} align="stretch">
                      <HStack justify="space-between">
                        <Text fontWeight="bold">Bác sĩ:</Text>
                        <Text>{selectedDoctor.name}</Text>
                      </HStack>
                      <HStack justify="space-between">
                        <Text fontWeight="bold">Chuyên khoa:</Text>
                        <Text>{selectedDoctor.specialty}</Text>
                      </HStack>
                      <HStack justify="space-between">
                        <Text fontWeight="bold">Ngày:</Text>
                        <Text>{new Date(selectedDate).toLocaleDateString('vi-VN')}</Text>
                      </HStack>
                      <HStack justify="space-between">
                        <Text fontWeight="bold">Giờ:</Text>
                        <Text>{selectedTime}</Text>
                      </HStack>
                      <Separator />
                      <Textarea
                        placeholder="Ghi chú triệu chứng hoặc lý do khám (tùy chọn)..."
                        borderRadius="xl"
                        rows={3}
                      />
                      <Button
                        colorScheme="blue"
                        size="lg"
                        onClick={handleConfirmAppointment}
                        borderRadius="xl"
                      >
                        📅 Xác nhận đặt lịch
                      </Button>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              )}
            </VStack>
          </GridItem>

          {/* Sidebar */}
          <GridItem>
            <VStack gap={6} align="stretch">
              {/* On-Duty Doctors */}
              <Card.Root>
                <Card.Header>
                  <Heading size="md" color="blue.600">
                    👨‍⚕️ Bác sĩ đang trực
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <VStack gap={3}>
                    {onDutyDoctors.map((doctor) => (
                      <Box
                        key={doctor.id}
                        p={3}
                        bg="white"
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="gray.200"
                        w="full"
                      >
                        <HStack gap={3}>
                          <Avatar.Root size="sm">
                            <Avatar.Fallback name={doctor.name} />
                            <Avatar.Image {...{ src: doctor.avatar }} />
                          </Avatar.Root>
                          <VStack align="start" gap={0} flex={1}>
                            <Text fontSize="sm" fontWeight="bold">
                              {doctor.name}
                            </Text>
                            <Text fontSize="xs" color="gray.600">
                              {doctor.specialty}
                            </Text>
                            <HStack>
                              <Text color="green.500">🕐</Text>
                              <Text fontSize="xs" color="green.600">
                                {doctor.shiftTime}
                              </Text>
                            </HStack>
                          </VStack>
                        </HStack>
                      </Box>
                    ))}
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Booked Appointments */}
              <Card.Root>
                <Card.Header>
                  <Heading size="md" color="blue.600">
                    📅 Lịch hẹn của bạnaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <VStack gap={3}>
                    {bookedAppointments.map((appointment) => (
                      <Box
                        key={appointment.id}
                        p={4}
                        bg="white"
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="gray.200"
                        w="full"
                      >
                        <VStack align="start" gap={2}>
                          <HStack justify="space-between" w="full">
                            <Text fontSize="sm" fontWeight="bold">
                              {appointment.doctor}
                            </Text>
                            <Badge
                              colorScheme={
                                appointment.status === 'Đã xác nhận'
                                  ? 'green'
                                  : 'yellow'
                              }
                              fontSize="xs"
                            >
                              {appointment.status}
                            </Badge>
                          </HStack>
                          <Text fontSize="xs" color="gray.600">
                            {appointment.specialty}
                          </Text>
                          <HStack gap={4}>
                            <HStack>
                              <Text color="gray.500">📅</Text>
                              <Text fontSize="xs">
                                {new Date(appointment.date).toLocaleDateString('vi-VN')}
                              </Text>
                            </HStack>
                            <HStack>
                              <Text color="gray.500">🕐</Text>
                              <Text fontSize="xs">{appointment.time}</Text>
                            </HStack>
                          </HStack>
                        </VStack>
                      </Box>
                    ))}
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Emergency Contact */}
              <Card.Root bg="red.50" borderLeft="4px solid" borderLeftColor="red.500">
                <Card.Header>
                  <Heading size="sm" color="red.600">
                    🚨 Cấp cứu 24/7
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <VStack gap={2}>
                    <HStack>
                      <Text color="red.500" fontSize="lg">📞</Text>
                      <Text fontSize="sm" fontWeight="bold">
                        115
                      </Text>
                    </HStack>
                    <Text fontSize="xs" textAlign="center" color="gray.600">
                      Gọi ngay khi có tình huống khẩn cấp
                    </Text>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
