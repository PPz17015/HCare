import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';
import { bookingCareColors, containerSizes } from '../theme';

const AIAssistant: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const isMobile = useBreakpointValue({ base: true, md: false });

  const quickSuggestions = [
    'Khám tim mạch',
    'Bác sĩ nhi khoa',
    'Xét nghiệm tại nhà',
    'Khám từ xa',
    'Đặt lịch khám',
  ];

  return (
    <Box 
      w="100%" 
      minH={{ base: "500px", md: "600px" }}
      background={`linear-gradient(135deg, ${bookingCareColors.primary} 0%, ${bookingCareColors.primaryDark} 100%)`}
      position="relative"
      overflow="hidden"
    >
      {/* Background decorations */}
      <Box
        position="absolute"
        top="-100px"
        right="-100px"
        w="300px"
        h="300px"
        bg="rgba(255,255,255,0.1)"
        borderRadius="50%"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-150px"
        left="-150px"
        w="400px"
        h="400px"
        bg="rgba(255,255,255,0.05)"
        borderRadius="50%"
        pointerEvents="none"
      />
      
      <Box 
        maxW={containerSizes.xl} 
        mx="auto" 
        px={{ base: 6, md: 8 }}
        py={{ base: 12, md: 16 }}
        position="relative"
        zIndex={2}
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 8, lg: 12 }}
        >
          {/* Left Content */}
          <Box 
            flex="1" 
            textAlign={{ base: "center", lg: "left" }}
            maxW={{ base: "100%", lg: "50%" }}
          >
            {/* Robot Icon */}
            <Box
              w={{ base: "80px", md: "100px" }}
              h={{ base: "80px", md: "100px" }}
              bg="rgba(255,255,255,0.15)"
              borderRadius="20px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize={{ base: "40px", md: "50px" }}
              mb={6}
              mx={{ base: "auto", lg: "0" }}
              backdropFilter="blur(10px)"
              border="2px solid rgba(255,255,255,0.2)"
            >
              🤖
            </Box>

            {/* Main Heading */}
            <Text
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="800"
              color="white"
              mb={4}
              lineHeight="1.1"
              textShadow="0 2px 4px rgba(0,0,0,0.1)"
            >
              Trợ lý AI Chăm sóc{' '}
              <Text as="span" color={bookingCareColors.secondary}>
                Sức khỏe
              </Text>
            </Text>

            {/* Subtitle */}
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="rgba(255,255,255,0.9)"
              mb={8}
              lineHeight="1.6"
              fontWeight="400"
            >
              Tìm kiếm bác sĩ, đặt lịch khám và nhận tư vấn sức khỏe thông minh với 
              công nghệ AI tiên tiến
            </Text>

            {/* Trust Indicators */}
            <Flex 
              justify={{ base: "center", lg: "flex-start" }} 
              gap={6}
              mb={{ base: 8, lg: 0 }}
            >
              <Box textAlign="center">
                <Text fontSize="2xl" fontWeight="700" color="white">
                  24/7
                </Text>
                <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                  Hỗ trợ
                </Text>
              </Box>
              <Box textAlign="center">
                <Text fontSize="2xl" fontWeight="700" color="white">
                  1000+
                </Text>
                <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                  Bác sĩ
                </Text>
              </Box>
              <Box textAlign="center">
                <Text fontSize="2xl" fontWeight="700" color="white">
                  200+
                </Text>
                <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                  Bệnh viện
                </Text>
              </Box>
            </Flex>
          </Box>

          {/* Right Content - Search Section */}
          <Box 
            flex="1" 
            w={{ base: "100%", lg: "50%" }}
            maxW="500px"
          >
            <Box
              bg="rgba(255,255,255,0.95)"
              borderRadius="24px"
              p={{ base: 6, md: 8 }}
              backdropFilter="blur(20px)"
              border="1px solid rgba(255,255,255,0.2)"
              boxShadow="0 20px 40px rgba(0,0,0,0.1)"
            >
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="700"
                color={bookingCareColors.text.primary}
                mb={6}
                textAlign="center"
              >
                Bạn cần hỗ trợ gì?
              </Text>

              {/* Search Input */}
              <Flex 
                bg="white"
                border="3px solid"
                borderColor={bookingCareColors.border.light}
                borderRadius="16px"
                p={1}
                mb={4}
                _focusWithin={{
                  borderColor: bookingCareColors.primary,
                  boxShadow: `0 0 0 1px ${bookingCareColors.primary}`
                }}
              >
                <Input
                  placeholder="Ví dụ: Tôi muốn khám tim mạch..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  bg="transparent"
                  border="none"
                  fontSize="md"
                  py={4}
                  px={4}
                  flex={1}
                  _placeholder={{
                    color: bookingCareColors.text.muted
                  }}
                  _focus={{
                    outline: "none",
                    boxShadow: "none"
                  }}
                />
                <Button
                  bg={bookingCareColors.background.gradient}
                  color="white"
                  borderRadius="12px"
                  size="md"
                  px={4}
                  _hover={{
                    bg: bookingCareColors.primaryDark
                  }}
                >
                  🔍
                </Button>
              </Flex>

              {/* Quick Suggestions */}
              <Text
                fontSize="sm"
                color={bookingCareColors.text.muted}
                mb={3}
              >
                Gợi ý tìm kiếm:
              </Text>

              <Flex wrap="wrap" gap={2} mb={6}>
                {quickSuggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    size="sm"
                    variant="outline"
                    borderColor={bookingCareColors.border.medium}
                    color={bookingCareColors.text.secondary}
                    borderRadius="20px"
                    px={4}
                    fontSize="sm"
                    fontWeight="500"
                    transition="all 0.3s ease"
                    _hover={{
                      borderColor: bookingCareColors.primary,
                      color: bookingCareColors.primary,
                      bg: bookingCareColors.primaryLight
                    }}
                    onClick={() => setSearchQuery(suggestion)}
                  >
                    {suggestion}
                  </Button>
                ))}
              </Flex>

              {/* CTA Button */}
              <Button
                w="100%"
                size="lg"
                bg={bookingCareColors.background.gradient}
                color="white"
                borderRadius="16px"
                py={6}
                fontSize="lg"
                fontWeight="700"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(69, 195, 210, 0.3)"
                }}
              >
                Tìm kiếm với AI ✨
              </Button>

              {/* Feature Tags */}
              <Flex justify="center" mt={4} gap={4}>
                <Box textAlign="center">
                  <Text fontSize="xs" color={bookingCareColors.primary} fontWeight="600">
                    🎯 Tìm chính xác
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Text fontSize="xs" color={bookingCareColors.primary} fontWeight="600">
                    ⚡ Phản hồi nhanh
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Text fontSize="xs" color={bookingCareColors.primary} fontWeight="600">
                    🔒 Bảo mật cao
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default AIAssistant; 