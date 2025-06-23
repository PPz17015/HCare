import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  HStack,
  Badge,
  Progress,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,

} from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRoomById, getStatusColor, getStatusText } from '../../utils/mockData';

const RoomDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  // Toast functionality will be added later
  
  const room = id ? getRoomById(id) : null;

  if (!room) {
    return (
      <Center minH="50vh">
        <VStack gap={4}>
          <Text fontSize="2xl">🏥</Text>
          <Heading size="md" color="gray.600">
            Không tìm thấy phòng khám
          </Heading>
          <Button colorScheme="blue" onClick={() => navigate('/dashboard')}>
            Quay về Dashboard
          </Button>
        </VStack>
      </Center>
    );
  }

  const handleCompleteAppointment = () => {
    // Show success message (will implement toast later)
    alert(`Đã hoàn thành khám bệnh tại ${room?.name}`);
    navigate('/dashboard');
  };

  const progressValue = room.yourNumber 
    ? (room.currentNumber / room.yourNumber) * 100 
    : ((room.totalPatients - room.remainingPatients) / room.totalPatients) * 100;

  return (
    <VStack gap={6} align="stretch">
      {/* Back Button */}
      <HStack>
        <Button
          variant="ghost"
          onClick={() => navigate('/dashboard')}

        >
          ← Quay về Dashboard
        </Button>
      </HStack>

      {/* Room Header */}
      <Card.Root variant="elevated">
        <CardHeader>
          <VStack gap={2} align="start">
            <HStack justify="space-between" w="full">
              <Heading size="xl" color="blue.600">
                {room.name}
              </Heading>
              <Badge
                colorScheme={getStatusColor(room.status)}
                variant="solid"
                rounded="full"
                px={4}
                py={1}
                fontSize="sm"
              >
                {getStatusText(room.status)}
              </Badge>
            </HStack>
            
            <HStack gap={4}>
              <Text fontSize="lg" fontWeight="medium">
                👨‍⚕️ {room.doctorName}
              </Text>
              <Text fontSize="md" color="gray.600">
                {room.specialty}
              </Text>
            </HStack>
            
            <Text fontSize="md" color="gray.600">
              📍 {room.location}
            </Text>
          </VStack>
        </CardHeader>
      </Card.Root>

      {/* Queue Status */}
      <Card.Root variant="outline">
        <CardHeader>
          <Heading size="lg" color="gray.800">
            📊 Trạng thái hàng đợi
          </Heading>
        </CardHeader>
        
        <CardBody>
          <VStack gap={6} align="stretch">
            {/* Current vs Your Number */}
            <HStack justify="space-between" align="center">
              <VStack gap={1} align="center">
                <Text fontSize="sm" color="gray.600">Đang khám</Text>
                <Text fontSize="3xl" fontWeight="bold" color="blue.600">
                  #{room.currentNumber}
                </Text>
              </VStack>
              
              {room.yourNumber && (
                <>
                  <Center>
                    <Text fontSize="2xl" color="gray.400">→</Text>
                  </Center>
                  
                  <VStack gap={1} align="center">
                    <Text fontSize="sm" color="gray.600">Số của bạn</Text>
                    <Text fontSize="3xl" fontWeight="bold" color="green.600">
                      #{room.yourNumber}
                    </Text>
                  </VStack>
                </>
              )}
            </HStack>

            {/* Progress Bar */}
            <Box>
              <HStack justify="space-between" mb={2}>
                <Text fontWeight="medium">Tiến độ khám bệnh</Text>
                <Text fontSize="sm" color="gray.600">
                  {Math.round(progressValue)}%
                </Text>
              </HStack>
              
              <Box
                w="full"
                h="3"
                bg="gray.200"
                rounded="full"
                overflow="hidden"
              >
                <Box
                  h="full"
                  bg={`${getStatusColor(room.status)}.500`}
                  w={`${progressValue}%`}
                  transition="width 0.3s"
                />
              </Box>
              
              {room.yourNumber ? (
                <HStack justify="space-between" mt={2}>
                  <Text fontSize="sm" color="gray.500">
                    Còn {Math.max(0, room.yourNumber - room.currentNumber)} người
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Ước tính: ~{room.estimatedWaitTime} phút
                  </Text>
                </HStack>
              ) : (
                <Text fontSize="sm" color="gray.500" mt={2}>
                  {room.totalPatients - room.remainingPatients}/{room.totalPatients} đã hoàn thành
                </Text>
              )}
            </Box>

            {/* Status Info */}
            <Box p={4} bg="gray.50" rounded="lg">
              <VStack gap={2} align="start">
                <Text fontWeight="medium" color="gray.800">
                  Thông tin chi tiết:
                </Text>
                <HStack justify="space-between" w="full">
                  <Text fontSize="sm">Tổng số bệnh nhân:</Text>
                  <Text fontSize="sm" fontWeight="medium">{room.totalPatients}</Text>
                </HStack>
                <HStack justify="space-between" w="full">
                  <Text fontSize="sm">Đang chờ:</Text>
                  <Text fontSize="sm" fontWeight="medium">{room.remainingPatients}</Text>
                </HStack>
                <HStack justify="space-between" w="full">
                  <Text fontSize="sm">Thời gian chờ ước tính:</Text>
                  <Text fontSize="sm" fontWeight="medium">{room.estimatedWaitTime} phút</Text>
                </HStack>
              </VStack>
            </Box>

            {/* Action Buttons */}
            {room.yourNumber && (
              <VStack gap={3} align="stretch">
                {room.status === 'calling' && (
                  <Button
                    colorScheme="green"
                    size="lg"
                    onClick={handleCompleteAppointment}
                  >
                    ✅ Hoàn thành khám bệnh
                  </Button>
                )}
                
                {room.status === 'coming_soon' && (
                  <Button
                    colorScheme="orange"
                    size="lg"
                    disabled
                  >
                    ⏰ Chuẩn bị sẵn sàng (còn 2-3 số)
                  </Button>
                )}
                
                {room.status === 'waiting' && (
                  <Button
                    colorScheme="blue"
                    variant="outline"
                    size="lg"
                    disabled
                  >
                    ⏳ Vui lòng chờ đợi
                  </Button>
                )}
                
                {room.status === 'delayed' && (
                  <Button
                    colorScheme="red"
                    variant="outline"
                    size="lg"
                    disabled
                  >
                    ⚠️ Lịch khám bị hoãn
                  </Button>
                )}
              </VStack>
            )}
          </VStack>
        </CardBody>
      </Card.Root>

      {/* Additional Info */}
      <Card.Root variant="outline">
        <CardHeader>
          <Heading size="md" color="gray.800">
            📝 Lưu ý quan trọng
          </Heading>
        </CardHeader>
        
        <CardBody>
          <VStack gap={3} align="start">
            <Text fontSize="sm" color="gray.600">
              • Vui lòng có mặt tại phòng khám trước 15 phút khi đến lượt
            </Text>
            <Text fontSize="sm" color="gray.600">
              • Mang theo giấy tờ tùy thân và thẻ bảo hiểm y tế (nếu có)
            </Text>
            <Text fontSize="sm" color="gray.600">
              • Liên hệ hotline 1900-1234 nếu cần hỗ trợ
            </Text>
            <Text fontSize="sm" color="gray.600">
              • Nếu không thể đến đúng giờ, vui lòng thông báo trước
            </Text>
          </VStack>
        </CardBody>
      </Card.Root>
    </VStack>
  );
};

export default RoomDetailPage; 