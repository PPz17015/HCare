import React from 'react';
import {
  Box,
  Grid,
  Flex,
  Text,
  Button,
  Badge,
  Avatar,
} from '@chakra-ui/react';
import { bookingCareColors, containerSizes } from '../theme';

interface DoctorItem {
  id: number;
  name: string;
  title: string;
  specialty: string;
  hospital: string;
  experience: number;
  rating: number;
  consultationFee: string;
  avatar: string;
  verified: boolean;
}

const FeaturedDoctors: React.FC = () => {
  const doctors: DoctorItem[] = [
    {
      id: 1,
      name: 'BS. CKI. Nguyễn Văn An',
      title: 'Tiến sĩ, Bác sĩ CKI',
      specialty: 'Tim mạch',
      hospital: 'Bệnh viện Bạch Mai',
      experience: 15,
      rating: 4.9,
      consultationFee: '300.000đ',
      avatar: '👨‍⚕️',
      verified: true
    },
    {
      id: 2,
      name: 'BS. CKII. Trần Thị Bình',
      title: 'Phó Giáo sư, Tiến sĩ',
      specialty: 'Thần kinh',
      hospital: 'Bệnh viện Việt Đức',
      experience: 20,
      rating: 4.8,
      consultationFee: '350.000đ',
      avatar: '👩‍⚕️',
      verified: true
    },
    {
      id: 3,
      name: 'BS. Lê Minh Cường',
      title: 'Thạc sĩ, Bác sĩ',
      specialty: 'Cơ xương khớp',
      hospital: 'Bệnh viện 108',
      experience: 10,
      rating: 4.7,
      consultationFee: '250.000đ',
      avatar: '👨‍⚕️',
      verified: true
    }
  ];

  return (
    <Box 
      w="100%" 
      py={{ base: 12, md: 16 }} 
      bg="white"
      position="relative"
    >
      <Box 
        maxW={containerSizes.xl} 
        mx="auto" 
        px={{ base: 6, md: 8 }}
      >
        
        {/* Section Header */}
        <Flex 
          justify="space-between" 
          align="center" 
          mb={{ base: 8, md: 10 }}
          direction={{ base: "column", md: "row" }}
          gap={4}
        >
          <Box textAlign={{ base: "center", md: "left" }}>
            <Text
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="700"
              color={bookingCareColors.text.primary}
              mb={2}
            >
              Bác sĩ nổi bật
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={bookingCareColors.text.muted}
            >
              Đội ngũ bác sĩ uy tín, giàu kinh nghiệm tại các bệnh viện hàng đầu
            </Text>
          </Box>
          
          <Button
            variant="outline"
            borderColor={bookingCareColors.primary}
            color={bookingCareColors.primary}
            px={6}
            py={3}
            fontSize="md"
            fontWeight="600"
            borderRadius="12px"
            border="2px solid"
            transition="all 0.3s ease"
            _hover={{
              bg: bookingCareColors.primary,
              color: "white",
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(69, 195, 210, 0.3)"
            }}
          >
            Xem tất cả bác sĩ
          </Button>
        </Flex>

        {/* Doctors Grid */}
        <Grid
          templateColumns={{ 
            base: "1fr", 
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)" 
          }}
          gap={{ base: 6, md: 8 }}
        >
          {doctors.map((doctor) => (
            <Box
              key={doctor.id}
              bg="white"
              border="3px solid"
              borderColor={bookingCareColors.border.light}
              borderRadius="20px"
              p={{ base: 6, md: 8 }}
              cursor="pointer"
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              transform="translateY(0)"
              boxShadow={bookingCareColors.card.shadow}
              position="relative"
              overflow="hidden"
              _hover={{
                transform: "translateY(-6px)",
                boxShadow: bookingCareColors.card.shadowHover,
                borderColor: bookingCareColors.primary,
              }}
            >
              {/* Verified Badge */}
              {doctor.verified && (
                <Badge
                  position="absolute"
                  top={4}
                  right={4}
                  bg={bookingCareColors.success}
                  color="white"
                  px={2}
                  py={1}
                  borderRadius="8px"
                  fontSize="xs"
                  fontWeight="600"
                >
                  ✓ Xác thực
                </Badge>
              )}

              {/* Doctor Info */}
              <Flex direction="column" align="center" textAlign="center">
                {/* Avatar */}
                <Box
                  w="100px"
                  h="100px"
                  bg={bookingCareColors.primaryLight}
                  borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="40px"
                  mb={4}
                  border="4px solid"
                  borderColor="white"
                  boxShadow="0 4px 15px rgba(0,0,0,0.1)"
                  position="relative"
                >
                  {doctor.avatar}
                  {/* Online indicator */}
                  <Box
                    position="absolute"
                    bottom={2}
                    right={2}
                    w="16px"
                    h="16px"
                    bg={bookingCareColors.success}
                    borderRadius="50%"
                    border="2px solid white"
                  />
                </Box>

                {/* Name & Title */}
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="700"
                  color={bookingCareColors.text.primary}
                  mb={1}
                  lineHeight="1.2"
                >
                  {doctor.name}
                </Text>

                <Text
                  fontSize="sm"
                  color={bookingCareColors.text.muted}
                  mb={2}
                >
                  {doctor.title}
                </Text>

                {/* Specialty Badge */}
                <Badge
                  bg={bookingCareColors.primaryLight}
                  color={bookingCareColors.primary}
                  px={3}
                  py={1}
                  borderRadius="12px"
                  fontSize="sm"
                  fontWeight="600"
                  mb={3}
                >
                  {doctor.specialty}
                </Badge>

                {/* Hospital */}
                <Text
                  fontSize="sm"
                  color={bookingCareColors.text.muted}
                  mb={3}
                >
                  🏥 {doctor.hospital}
                </Text>

                {/* Stats */}
                <Flex justify="space-between" w="100%" mb={4}>
                  <Box textAlign="center">
                    <Text fontSize="xs" color={bookingCareColors.text.muted}>
                      Kinh nghiệm
                    </Text>
                    <Text fontSize="sm" fontWeight="600" color={bookingCareColors.text.primary}>
                      {doctor.experience} năm
                    </Text>
                  </Box>
                  <Box textAlign="center">
                    <Text fontSize="xs" color={bookingCareColors.text.muted}>
                      Đánh giá
                    </Text>
                    <Flex align="center" justify="center">
                      <Text fontSize="sm" color={bookingCareColors.warning} mr={1}>
                        ⭐
                      </Text>
                      <Text fontSize="sm" fontWeight="600" color={bookingCareColors.text.primary}>
                        {doctor.rating}
                      </Text>
                    </Flex>
                  </Box>
                  <Box textAlign="center">
                    <Text fontSize="xs" color={bookingCareColors.text.muted}>
                      Phí khám
                    </Text>
                    <Text fontSize="sm" fontWeight="600" color={bookingCareColors.primary}>
                      {doctor.consultationFee}
                    </Text>
                  </Box>
                </Flex>

                {/* Action Buttons */}
                <Flex gap={2} w="100%">
                  <Button
                    flex="1"
                    size="sm"
                    bg={bookingCareColors.primaryLight}
                    color={bookingCareColors.primary}
                    borderRadius="10px"
                    fontWeight="600"
                    transition="all 0.3s ease"
                    _hover={{
                      bg: bookingCareColors.primary,
                      color: "white"
                    }}
                  >
                    Đặt khám
                  </Button>
                  <Button
                    flex="1"
                    size="sm"
                    variant="outline"
                    borderColor={bookingCareColors.border.medium}
                    color={bookingCareColors.text.muted}
                    borderRadius="10px"
                    fontWeight="600"
                    transition="all 0.3s ease"
                    _hover={{
                      borderColor: bookingCareColors.primary,
                      color: bookingCareColors.primary
                    }}
                  >
                    Xem CV
                  </Button>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FeaturedDoctors; 