import React from 'react';
import {
  Box,
  Stack,
  Text,
  Button,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import AIAssistant from '../components/AIAssistant';
import ServicesGrid from '../components/ServicesGrid';
import MedicalSpecialties from '../components/MedicalSpecialties';
import MedicalFacilities from '../components/MedicalFacilities';
import FeaturedDoctors from '../components/FeaturedDoctors';
import { bookingCareColors } from '../theme';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Box w="100%" minH="100vh">
      {/* AI Assistant Hero Section */}
      <AIAssistant />
      
      {/* Services Grid Section */}
      <ServicesGrid />
      
      {/* Medical Specialties Section */}
      <MedicalSpecialties />
      
      {/* Medical Facilities Section */}
      <MedicalFacilities />
      
      {/* Featured Doctors Section */}
      <FeaturedDoctors />
      
      {/* Call to Action Section */}
      <Box
        w="100%"
        bg={bookingCareColors.background.primary}
        py={{ base: 8, md: 12 }}
      >
        <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }} textAlign="center">
          <Stack gap={6} align="center">
            <Text
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              fontWeight="700"
              color={bookingCareColors.text.primary}
            >
              Bắt đầu chăm sóc sức khỏe của bạn ngay hôm nay
            </Text>
            
            <Text
              fontSize={{ base: "sm", md: "md" }}
              color={bookingCareColors.text.muted}
              maxW="600px"
            >
              Tham gia cùng hàng lẻ người dùng đã tin tượng HCare để quản lý sức khỏe
            </Text>
            
            <Flex
              gap={4}
              direction={{ base: 'column', sm: 'row' }}
              w={{ base: "100%", sm: "auto" }}
            >
              <Button
                bg={bookingCareColors.primary}
                color="white"
                size="lg"
                borderRadius="full"
                px={8}
                fontWeight="600"
                _hover={{ bg: bookingCareColors.primary + "DD" }}
                _active={{ bg: bookingCareColors.primary + "BB" }}
                onClick={() => navigate('/register')}
              >
                Đăng ký miễn phí
              </Button>
              <Button
                variant="outline"
                borderColor={bookingCareColors.primary}
                color={bookingCareColors.primary}
                size="lg"
                borderRadius="full"
                px={8}
                fontWeight="600"
                _hover={{ bg: bookingCareColors.primary + "11" }}
                onClick={() => navigate('/login')}
              >
                Đăng nhập
              </Button>
            </Flex>
            
            {/* Trust Indicators */}
            <Flex
              gap={{ base: 4, md: 8 }}
              justify="center"
              wrap="wrap"
              pt={6}
              borderTopWidth="1px"
              borderColor={bookingCareColors.border.light}
            >
              <Flex align="center" gap={2}>
                <Text fontSize="2xl">🏆</Text>
                <Text fontSize="sm" color={bookingCareColors.text.muted}>
                  Top -1 ứng dụng y tế
                </Text>
              </Flex>
              <Flex align="center" gap={2}>
                <Text fontSize="2xl">⭐</Text>
                <Text fontSize="sm" color={bookingCareColors.text.muted}>
                  0/5 đánh giá
                </Text>
              </Flex>
              <Flex align="center" gap={2}>
                <Text fontSize="2xl">👥</Text>
                <Text fontSize="sm" color={bookingCareColors.text.muted}>
                  0+ người dùng
                </Text>
              </Flex>
            </Flex>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage; 