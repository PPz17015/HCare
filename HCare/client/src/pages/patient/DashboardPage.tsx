import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Badge,

  Button,
  Center,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { mockRooms, currentUser, getStatusColor, getStatusText } from '../../utils/mockData';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  const userRooms = mockRooms.filter(room => room.yourNumber);

  return (
    <VStack gap={8} align="stretch">
      {/* Header */}
      <Box>
        <Heading size="xl" color="blue.600" mb={2}>
          Chào mừng, {currentUser.fullName}! 👋
        </Heading>
        <Text color="gray.600" fontSize="lg">
          Theo dõi lượt khám bệnh của bạn
        </Text>
      </Box>

      {/* User's Queue Status */}
      {userRooms.length > 0 && (
        <Box>
          <Heading size="lg" mb={4} color="gray.800">
            🏥 Lượt khám của bạn
          </Heading>
          <SimpleGrid columns={columns} gap={6}>
            {userRooms.map((room) => (
              <Card.Root
                key={room.id}
                variant="elevated"
                cursor="pointer"
                onClick={() => navigate(`/room/${room.id}`)}
                _hover={{ shadow: 'lg', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
              >
                <CardHeader pb={2}>
                  <VStack gap={1} align="start">
                    <HStack justify="space-between" w="full">
                      <Heading size="md" color="blue.600">
                        {room.name}
                      </Heading>
                      <Badge
                        colorScheme={getStatusColor(room.status)}
                        variant="solid"
                        rounded="full"
                        px={3}
                      >
                        {getStatusText(room.status)}
                      </Badge>
                    </HStack>
                    <Text fontSize="sm" color="gray.600">
                      {room.doctorName} - {room.specialty}
                    </Text>
                  </VStack>
                </CardHeader>

                <CardBody pt={0}>
                  <VStack gap={3} align="stretch">
                    {/* Queue Info */}
                    <Box>
                      <HStack justify="space-between" mb={2}>
                        <Text fontWeight="medium">
                          Đang khám: #{room.currentNumber}
                        </Text>
                        <Text fontWeight="bold" color="blue.600">
                          Số của bạn: #{room.yourNumber}
                        </Text>
                      </HStack>

                      {/* Progress Bar */}
                      <Box>
                        <Box
                          w="full"
                          h="2"
                          bg="gray.200"
                          rounded="full"
                          overflow="hidden"
                        >
                          <Box
                            h="full"
                            bg={`${getStatusColor(room.status)}.500`}
                            w={`${(room.currentNumber / (room.yourNumber || 1)) * 100}%`}
                            transition="width 0.3s"
                          />
                        </Box>
                        <HStack justify="space-between" mt={1}>
                          <Text fontSize="xs" color="gray.500">
                            Còn {((room.yourNumber || 0) - room.currentNumber)} người
                          </Text>
                          <Text fontSize="xs" color="gray.500">
                            ~{room.estimatedWaitTime} phút
                          </Text>
                        </HStack>
                      </Box>
                    </Box>

                    {/* Location */}
                    <Text fontSize="sm" color="gray.600">
                      📍 {room.location}
                    </Text>

                    {/* Action Button */}
                    <Button
                      colorScheme="blue"
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/room/${room.id}`);
                      }}
                    >
                      Xem chi tiết
                    </Button>
                  </VStack>
                </CardBody>
              </Card.Root>
            ))}
          </SimpleGrid>
        </Box>
      )}

      {/* All Rooms */}
      <Box>
        <Heading size="lg" mb={4} color="gray.800">
          🏥 Tất cả phòng khám
        </Heading>
        <SimpleGrid columns={columns} gap={6}>
          {mockRooms.map((room) => (
            <Card.Root
              key={room.id}
              variant={room.yourNumber ? 'elevated' : 'outline'}
              cursor="pointer"
              onClick={() => navigate(`/room/${room.id}`)}
              _hover={{ shadow: 'lg', transform: 'translateY(-2px)' }}
              transition="all 0.2s"
              opacity={room.yourNumber ? 1 : 0.8}
            >
              <CardHeader pb={2}>
                <VStack gap={1} align="start">
                  <HStack justify="space-between" w="full">
                    <Heading size="md" color="blue.600">
                      {room.name}
                    </Heading>
                    <Badge
                      colorScheme={getStatusColor(room.status)}
                      variant="solid"
                      rounded="full"
                      px={3}
                    >
                      {getStatusText(room.status)}
                    </Badge>
                  </HStack>
                  <Text fontSize="sm" color="gray.600">
                    {room.doctorName} - {room.specialty}
                  </Text>
                </VStack>
              </CardHeader>

              <CardBody pt={0}>
                <VStack gap={3} align="stretch">
                  {/* Current Status */}
                  <HStack justify="space-between">
                    <Text fontWeight="medium">
                      Đang khám: #{room.currentNumber}
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {room.remainingPatients} người chờ
                    </Text>
                  </HStack>

                  {/* Progress */}
                  <Box>
                    <Box
                      w="full"
                      h="1.5"
                      bg="gray.200"
                      rounded="full"
                      overflow="hidden"
                    >
                      <Box
                        h="full"
                        bg={`${getStatusColor(room.status)}.500`}
                        w={`${((room.totalPatients - room.remainingPatients) / room.totalPatients) * 100}%`}
                        transition="width 0.3s"
                      />
                    </Box>
                    <Text fontSize="xs" color="gray.500" mt={1}>
                      {room.totalPatients - room.remainingPatients}/{room.totalPatients} đã hoàn thành
                    </Text>
                  </Box>

                  {/* Location */}
                  <Text fontSize="sm" color="gray.600">
                    📍 {room.location}
                  </Text>
                </VStack>
              </CardBody>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Box>

      {/* Map Placeholder */}
      <Box>
        <Heading size="lg" mb={4} color="gray.800">
          🗺️ Bản đồ bệnh viện
        </Heading>
        <Card.Root variant="outline">
          <CardBody>
            <Center minH="300px" bg="gray.100" rounded="lg">
              <VStack gap={4}>
                <Text fontSize="6xl">🗺️</Text>
                <VStack gap={1} textAlign="center">
                  <Heading size="md" color="gray.600">
                    Bản đồ vị trí phòng khám
                  </Heading>
                  <Text color="gray.500" fontSize="sm">
                    (Mapbox Integration - Coming Soon)
                  </Text>
                </VStack>
              </VStack>
            </Center>
          </CardBody>
        </Card.Root>
      </Box>
    </VStack>
  );
};

export default DashboardPage; 