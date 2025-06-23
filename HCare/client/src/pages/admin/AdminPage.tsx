import React, { useState } from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  HStack,
  Button,
  Card,
  CardBody,
  CardHeader,
  SimpleGrid,
  Badge,
} from '@chakra-ui/react';
import { mockRooms, getStatusColor, getStatusText } from '../../utils/mockData';

const AdminPage: React.FC = () => {
  const [rooms, setRooms] = useState(mockRooms);

  const handleNextPatient = (roomId: string) => {
    setRooms(prev => prev.map(room => 
      room.id === roomId 
        ? { 
            ...room, 
            currentNumber: room.currentNumber + 1,
            remainingPatients: Math.max(0, room.remainingPatients - 1)
          }
        : room
    ));
  };

  const handleDelayRoom = (roomId: string) => {
    setRooms(prev => prev.map(room => 
      room.id === roomId 
        ? { 
            ...room, 
            status: 'delayed' as const,
            estimatedWaitTime: room.estimatedWaitTime + 30
          }
        : room
    ));
  };

  const handleTransferPatient = (roomId: string) => {
    // Mock transfer logic
    alert(`Chuyển bệnh nhân từ phòng ${roomId}`);
  };

  return (
    <VStack gap={6} align="stretch">
      {/* Header */}
      <Box>
        <Heading size="xl" color="blue.600" mb={2}>
          ⚙️ Admin Panel
        </Heading>
        <Text color="gray.600" fontSize="lg">
          Quản lý hàng đợi phòng khám
        </Text>
      </Box>

      {/* Stats Overview */}
      <SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
        <Card.Root variant="outline">
          <CardBody textAlign="center">
            <Text fontSize="2xl" fontWeight="bold" color="blue.600">
              {rooms.length}
            </Text>
            <Text fontSize="sm" color="gray.600">Tổng phòng</Text>
          </CardBody>
        </Card.Root>
        
        <Card.Root variant="outline">
          <CardBody textAlign="center">
            <Text fontSize="2xl" fontWeight="bold" color="green.600">
              {rooms.filter(r => r.status === 'waiting' || r.status === 'coming_soon').length}
            </Text>
            <Text fontSize="sm" color="gray.600">Đang hoạt động</Text>
          </CardBody>
        </Card.Root>
        
        <Card.Root variant="outline">
          <CardBody textAlign="center">
            <Text fontSize="2xl" fontWeight="bold" color="orange.600">
              {rooms.reduce((sum, r) => sum + r.remainingPatients, 0)}
            </Text>
            <Text fontSize="sm" color="gray.600">Tổng bệnh nhân chờ</Text>
          </CardBody>
        </Card.Root>
        
        <Card.Root variant="outline">
          <CardBody textAlign="center">
            <Text fontSize="2xl" fontWeight="bold" color="red.600">
              {rooms.filter(r => r.status === 'delayed').length}
            </Text>
            <Text fontSize="sm" color="gray.600">Phòng bị hoãn</Text>
          </CardBody>
        </Card.Root>
      </SimpleGrid>

      {/* Room Management */}
      <Card.Root variant="outline">
        <CardHeader>
          <Heading size="lg" color="gray.800">
            📊 Quản lý phòng khám
          </Heading>
        </CardHeader>
        
        <CardBody>
          <VStack gap={4} align="stretch">
            {rooms.map((room) => (
              <Box
                key={room.id}
                p={4}
                border="1px"
                borderColor="gray.200"
                rounded="lg"
                bg="white"
              >
                <VStack gap={3} align="stretch">
                  {/* Room Header */}
                  <HStack justify="space-between" align="start">
                    <VStack gap={1} align="start">
                      <HStack gap={3}>
                        <Heading size="md" color="blue.600">
                          {room.name}
                        </Heading>
                        <Badge
                          colorScheme={getStatusColor(room.status)}
                          variant="solid"
                          rounded="full"
                        >
                          {getStatusText(room.status)}
                        </Badge>
                      </HStack>
                      <Text fontSize="sm" color="gray.600">
                        {room.doctorName} - {room.specialty}
                      </Text>
                      <Text fontSize="sm" color="gray.500">
                        📍 {room.location}
                      </Text>
                    </VStack>
                  </HStack>

                  {/* Room Stats */}
                  <SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
                    <Box textAlign="center">
                      <Text fontSize="lg" fontWeight="bold" color="blue.600">
                        #{room.currentNumber}
                      </Text>
                      <Text fontSize="xs" color="gray.600">Đang khám</Text>
                    </Box>
                    
                    <Box textAlign="center">
                      <Text fontSize="lg" fontWeight="bold" color="orange.600">
                        {room.remainingPatients}
                      </Text>
                      <Text fontSize="xs" color="gray.600">Chờ khám</Text>
                    </Box>
                    
                    <Box textAlign="center">
                      <Text fontSize="lg" fontWeight="bold" color="green.600">
                        {room.totalPatients - room.remainingPatients}
                      </Text>
                      <Text fontSize="xs" color="gray.600">Đã xong</Text>
                    </Box>
                    
                    <Box textAlign="center">
                      <Text fontSize="lg" fontWeight="bold" color="gray.600">
                        ~{room.estimatedWaitTime}p
                      </Text>
                      <Text fontSize="xs" color="gray.600">Chờ đợi</Text>
                    </Box>
                  </SimpleGrid>

                  {/* Action Buttons */}
                  <HStack gap={2} justify="flex-end">
                    <Button
                      colorScheme="green"
                      size="sm"
                      onClick={() => handleNextPatient(room.id)}
                      disabled={room.remainingPatients === 0}
                    >
                      ➡️ Next
                    </Button>
                    
                    <Button
                      colorScheme="orange"
                      size="sm"
                      onClick={() => handleDelayRoom(room.id)}
                      disabled={room.status === 'delayed'}
                    >
                      ⏸️ Delay
                    </Button>
                    
                    <Button
                      colorScheme="blue"
                      size="sm"
                      onClick={() => handleTransferPatient(room.id)}
                      disabled={room.remainingPatients === 0}
                    >
                      🔄 Transfer
                    </Button>
                  </HStack>
                </VStack>
              </Box>
            ))}
          </VStack>
        </CardBody>
      </Card.Root>
    </VStack>
  );
};

export default AdminPage; 