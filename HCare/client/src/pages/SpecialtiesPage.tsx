import React from 'react';
import {
  Box,
  Container,
  Grid,
  Text,
  VStack,
  Flex,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { bookingCareColors } from '../theme';
import { 
  FaBone, 
  FaHeart, 
  FaBrain, 
  FaEye, 
  FaTooth, 
  FaChild, 
  FaFemale, 
  FaStethoscope,
  FaSyringe,
  FaXRay,
  FaCut,
  FaPills,
  FaUserMd,
  FaMicroscope,
  FaLungs,
  FaAllergies,
  FaHandHoldingHeart,
  FaHospital
} from 'react-icons/fa';

const specialties = [
  { id: 'xuong-khop', name: 'Cơ Xương Khớp', icon: FaBone, doctorCount: 15 },
  { id: 'tim-mach', name: 'Tim Mạch', icon: FaHeart, doctorCount: 23 },
  { id: 'than-kinh', name: 'Thần Kinh', icon: FaBrain, doctorCount: 18 },
  { id: 'mat', name: 'Mắt', icon: FaEye, doctorCount: 12 },
  { id: 'rang-ham-mat', name: 'Răng Hàm Mặt', icon: FaTooth, doctorCount: 20 },
  { id: 'nhi-khoa', name: 'Nhi Khoa', icon: FaChild, doctorCount: 25 },
  { id: 'phu-khoa', name: 'Phụ Khoa', icon: FaFemale, doctorCount: 16 },
  { id: 'tieu-hoa', name: 'Tiêu Hóa', icon: FaStethoscope, doctorCount: 14 },
  { id: 'tiem-chung', name: 'Tiêm Chủng', icon: FaSyringe, doctorCount: 8 },
  { id: 'chan-doan-hinh-anh', name: 'Chẩn Đoán Hình Ảnh', icon: FaXRay, doctorCount: 10 },
  { id: 'phau-thuat', name: 'Phẫu Thuật', icon: FaCut, doctorCount: 22 },
  { id: 'duoc', name: 'Dược', icon: FaPills, doctorCount: 6 },
  { id: 'noi-khoa', name: 'Nội Khoa', icon: FaUserMd, doctorCount: 30 },
  { id: 'xet-nghiem', name: 'Xét Nghiệm', icon: FaMicroscope, doctorCount: 9 },
  { id: 'ho-hap', name: 'Hô Hấp', icon: FaLungs, doctorCount: 11 },
  { id: 'than-tiet-nieu', name: 'Thận Tiết Niệu', icon: FaStethoscope, doctorCount: 13 },
  { id: 'di-ung-mien-dich', name: 'Dị Ứng Miễn Dịch', icon: FaAllergies, doctorCount: 7 },
  { id: 'tam-than', name: 'Tâm Thần', icon: FaBrain, doctorCount: 12 },
  { id: 'phuc-hoi-chuc-nang', name: 'Phục Hồi Chức Năng', icon: FaHandHoldingHeart, doctorCount: 9 },
  { id: 'y-hoc-co-truyen', name: 'Y Học Cổ Truyền', icon: FaHospital, doctorCount: 15 }
];

const SpecialtiesPage: React.FC = () => {
  return (
    <Box bg="gray.50" minH="100vh" py={8}>
      <Container maxW="1200px">
        {/* Header */}
        <VStack gap={6} mb={10} textAlign="center">
          <Text
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="bold"
            color={bookingCareColors.text.primary}
          >
            Khám Chuyên Khoa
          </Text>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color={bookingCareColors.text.secondary}
            maxW="600px"
          >
            Đặt lịch khám với các bác sĩ chuyên khoa hàng đầu Việt Nam
          </Text>
        </VStack>

        {/* Specialties Grid */}
        <Grid
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)'
          }}
          gap={6}
        >
          {specialties.map((specialty) => (
            <RouterLink
              key={specialty.id}
              to={`/chuyen-khoa/${specialty.id}`}
              style={{ textDecoration: 'none' }}
            >
              <Box
                bg="white"
                borderRadius="xl"
                p={6}
                shadow="sm"
                border="1px"
                borderColor="gray.200"
                transition="all 0.3s ease"
                _hover={{
                  bg: "gray.50",
                  shadow: 'lg',
                  transform: 'translateY(-4px)',
                  borderColor: bookingCareColors.primary
                }}
                cursor="pointer"
                _focus={{ boxShadow: 'outline' }}
              >
                <VStack gap={4} align="center">
                  <Flex
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    bg={bookingCareColors.primaryLight}
                    align="center"
                    justify="center"
                  >
                    <Box as="span" w={6} h={6} color={bookingCareColors.primary}>
                      {React.createElement(specialty.icon as any, { size: '24px' })}
                    </Box>
                  </Flex>
                  
                  <VStack gap={1} textAlign="center">
                    <Text
                      fontSize="md"
                      fontWeight="600"
                      color={bookingCareColors.text.primary}
                      lineHeight="1.3"
                    >
                      {specialty.name}
                    </Text>
                    <Text
                      fontSize="sm"
                      color={bookingCareColors.text.secondary}
                    >
                      {specialty.doctorCount} bác sĩ
                    </Text>
                  </VStack>
                </VStack>
              </Box>
            </RouterLink>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box
          mt={12}
          textAlign="center"
          bg="white"
          p={8}
          borderRadius="xl"
          shadow="sm"
          border="1px"
          borderColor="gray.200"
        >
          <Text
            fontSize="lg"
            fontWeight="600"
            color={bookingCareColors.text.primary}
            mb={2}
          >
            Không tìm thấy chuyên khoa phù hợp?
          </Text>
          <Text
            fontSize="md"
            color={bookingCareColors.text.secondary}
            mb={4}
          >
            Liên hệ với chúng tôi để được tư vấn chuyên khoa phù hợp
          </Text>
          <Box
            as="button"
            bg={bookingCareColors.primary}
            color="white"
            px={8}
            py={3}
            borderRadius="lg"
            fontWeight="600"
            transition="all 0.3s ease"
            _hover={{
              bg: bookingCareColors.primaryDark,
              transform: 'translateY(-2px)',
              shadow: 'lg'
            }}
          >
            Liên hệ tư vấn
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SpecialtiesPage; 