import React from 'react';
import {
  Box,
  Flex,
  Text,
  Stack,
} from '@chakra-ui/react';
import BookingCareHeader from '../BookingCareHeader';
import { bookingCareColors } from '../../theme';

interface BookingCareLayoutProps {
  children: React.ReactNode;
}

const BookingCareLayout: React.FC<BookingCareLayoutProps> = ({ children }) => {
  return (
    <Box minH="100vh" bg="white">
      {/* Header */}
      <BookingCareHeader />
      
      {/* Main Content */}
      <Box as="main">
        {children}
      </Box>
      
      {/* Footer */}
      <Box
        as="footer"
        bg={bookingCareColors.text.primary}
        color="white"
        py={{ base: 8, md: 12 }}
        mt={{ base: 8, md: 12 }}
      >
        <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>
          <Stack gap={{ base: 6, md: 8 }}>
            
            {/* Footer Header */}
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align={{ base: "start", md: "center" }}
              gap={4}
            >
              <Box>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="600"
                  color={bookingCareColors.primary}
                  mb={2}
                >
                  HCare
                </Text>
                <Text
                  fontSize="sm"
                  color="gray.300"
                  maxW="400px"
                >
                  Nền tảng y tế số hàng cuối Việt Nam - Kết nối bạn với các bác sĩ uy tín
                </Text>
              </Box>
              
              <Flex gap={4} wrap="wrap">
                <Text
                  fontSize="sm"
                  color="gray.300"
                  _hover={{ color: bookingCareColors.primary }}
                  cursor="pointer"
                >
                  Liên hệ
                </Text>
                <Text
                  fontSize="sm"
                  color="gray.300"
                  _hover={{ color: bookingCareColors.primary }}
                  cursor="pointer"
                >
                  Hỗ trợ
                </Text>
                <Text
                  fontSize="sm"
                  color="gray.300"
                  _hover={{ color: bookingCareColors.primary }}
                  cursor="pointer"
                >
                  Quyền riêng tư
                </Text>
              </Flex>
            </Flex>

            {/* Footer Info Grid */}
            <Flex
              direction={{ base: "column", lg: "row" }}
              gap={{ base: 6, md: 8 }}
              justify="space-between"
            >
              {/* Company Info */}
              <Stack gap={3} maxW="300px">
                <Text fontWeight="600" color="white">
                  Nhóm HealthCare
                </Text>
                <Stack gap={1} fontSize="sm" color="gray.300">
                  <Text>📍 Lầu 4, Tòa nhà Gamma, Đại Học FPT, Q.Ngũ Hành Sơn, T.P Đà Nẵng</Text>
                  <Text>☎️ Hotline: 024-7301-2468</Text>
                  <Text>✉️ Email: support@bookingcare.vn</Text>
                </Stack>
              </Stack>

              {/* Services */}
              <Stack gap={3}>
                <Text fontWeight="600" color="white">
                  Dịch vụ
                </Text>
                <Stack gap={1} fontSize="sm" color="gray.300">
                  <Text _hover={{ color: bookingCareColors.primary }} cursor="pointer">
                    Đặt khám theo bác sĩ
                  </Text>
                  <Text _hover={{ color: bookingCareColors.primary }} cursor="pointer">
                    Đặt khám theo chuyên khoa
                  </Text>
                  <Text _hover={{ color: bookingCareColors.primary }} cursor="pointer">
                    Đặt khám theo cơ sở y tế
                  </Text>
                  <Text _hover={{ color: bookingCareColors.primary }} cursor="pointer">
                    Gói khám sức khỏe
                  </Text>
                </Stack>
              </Stack>

              {/* Support */}
              <Stack gap={3}>
                <Text fontWeight="600" color="white">
                  Hỗ trợ
                </Text>
                <Stack gap={1} fontSize="sm" color="gray.300">
                  <Text _hover={{ color: bookingCareColors.primary }} cursor="pointer">
                    Câu hỏi thường gặp
                  </Text>
                  <Text _hover={{ color: bookingCareColors.primary }} cursor="pointer">
                    Hướng dẫn đặt khám
                  </Text>
                  <Text _hover={{ color: bookingCareColors.primary }} cursor="pointer">
                    Chính sách bảo mật
                  </Text>
                  <Text _hover={{ color: bookingCareColors.primary }} cursor="pointer">
                    Điều khoản sử dụng
                  </Text>
                </Stack>
              </Stack>
            </Flex>

            {/* Copyright */}
            <Box
              pt={6}
              borderTopWidth="1px"
              borderColor="gray.600"
            >
              <Flex
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                align="center"
                gap={4}
              >
                <Text fontSize="sm" color="gray.400">
                  © 2025 HCare. Bản quyền thuộc về nhóm HealthCare

                </Text>
                <Flex gap={4} fontSize="sm" color="gray.400">
                  <Text>📱 App Store</Text>
                  <Text>🤖 Google Play</Text>
                </Flex>
              </Flex>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default BookingCareLayout; 