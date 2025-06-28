import React from 'react';
import {
  Box,
  Grid,
  Flex,
  Text,
  useBreakpointValue,
  Button,
} from '@chakra-ui/react';
import { bookingCareColors, containerSizes } from '../theme';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  color: string;
  bgGradient?: string;
}

const ServicesGrid: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const services: ServiceItem[] = [
    {
      icon: '🩺',
      title: 'Khám chuyên khoa',
      description: 'Đặt khám nhanh với bác sĩ chuyên khoa uy tín',
      color: '#FFE4E6',
      bgGradient: 'linear-gradient(135deg, #FFE4E6 0%, #FFF0F1 100%)'
    },
    {
      icon: '⚕️',
      title: 'Khám tổng quát',
      description: 'Gói khám sức khỏe toàn diện và chi tiết',
      color: '#E6F7FF',
      bgGradient: 'linear-gradient(135deg, #E6F7FF 0%, #F0FAFF 100%)'
    },
    {
      icon: '🦷',
      title: 'Khám nha khoa',
      description: 'Chăm sóc răng miệng chuyên nghiệp',
      color: '#F6FFED',
      bgGradient: 'linear-gradient(135deg, #F6FFED 0%, #FAFFFA 100%)'
    },
    {
      icon: '💻',
      title: 'Khám từ xa',
      description: 'Gặp bác sĩ qua video call tiện lợi',
      color: '#FFF7E6',
      bgGradient: 'linear-gradient(135deg, #FFF7E6 0%, #FFFCF5 100%)'
    },
  ];

  return (
    <Box 
      w="100%" 
      py={{ base: 12, md: 16 }} 
      bg={bookingCareColors.background.primary}
      position="relative"
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundImage="radial-gradient(circle at 25% 25%, rgba(69, 195, 210, 0.03) 0%, transparent 50%)"
        pointerEvents="none"
      />
      
      <Box 
        maxW={containerSizes.xl} 
        mx="auto" 
        px={{ base: 6, md: 8 }}
        position="relative"
      >
        
        {/* Section Header */}
        <Box textAlign="center" mb={{ base: 10, md: 12 }}>
          <Text
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="700"
            color={bookingCareColors.text.primary}
            mb={4}
            position="relative"
          >
            Dịch vụ toàn diện
            {/* Decorative underline */}
            <Box
              position="absolute"
              bottom="-8px"
              left="50%"
              transform="translateX(-50%)"
              w="80px"
              h="4px"
              bg={bookingCareColors.primary}
              borderRadius="2px"
            />
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color={bookingCareColors.text.muted}
            maxW="700px"
            mx="auto"
            lineHeight="1.6"
          >
            Chúng tôi cung cấp đa dạng dịch vụ chăm sóc sức khỏe chất lượng cao, 
            đáp ứng mọi nhu cầu của bạn và gia đình
          </Text>
        </Box>

        {/* Services Grid - 2x2 Layout */}
        <Grid
          templateColumns={{ 
            base: "1fr", 
            md: "repeat(2, 1fr)" 
          }}
          gap={{ base: 6, md: 8 }}
          mb={{ base: 10, md: 12 }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              bg="white"
              border="3px solid"
              borderColor={bookingCareColors.border.light}
              borderRadius="24px"
              p={{ base: 6, md: 8 }}
              h={{ base: "200px", md: "220px" }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              cursor="pointer"
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              transform="translateY(0)"
              boxShadow={bookingCareColors.card.shadow}
              position="relative"
              overflow="hidden"
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: bookingCareColors.card.shadowHover,
                borderColor: bookingCareColors.primary,
                bg: bookingCareColors.background.accent,
                _before: {
                  opacity: 1
                }
              }}
              _before={{
                content: '""',
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                height: "4px",
                background: bookingCareColors.background.gradient,
                opacity: 0,
                transition: "opacity 0.3s ease"
              }}
            >
              {/* Icon */}
              <Box
                w={{ base: "70px", md: "80px" }}
                h={{ base: "70px", md: "80px" }}
                background={service.bgGradient || service.color}
                borderRadius="20px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: "32px", md: "36px" }}
                mb={4}
                border="2px solid"
                borderColor="white"
                boxShadow="0 4px 12px rgba(0,0,0,0.1)"
                transition="all 0.3s ease"
                _groupHover={{
                  transform: "scale(1.1)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)"
                }}
              >
                {service.icon}
              </Box>

              {/* Title */}
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="700"
                color={bookingCareColors.text.primary}
                mb={2}
                lineHeight="1.2"
              >
                {service.title}
              </Text>

              {/* Description */}
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color={bookingCareColors.text.muted}
                lineHeight="1.5"
                px={2}
              >
                {service.description}
              </Text>
            </Box>
          ))}
        </Grid>

        {/* Call to Action Section */}
        <Box
          bg="white"
          borderRadius="24px"
          p={{ base: 8, md: 10 }}
          textAlign="center"
          border="3px solid"
          borderColor={bookingCareColors.border.light}
          boxShadow={bookingCareColors.card.shadow}
          position="relative"
          overflow="hidden"
        >
          {/* Background decoration */}
          <Box
            position="absolute"
            top="-50px"
            right="-50px"
            w="150px"
            h="150px"
            bg={bookingCareColors.primaryLight}
            borderRadius="50%"
            opacity="0.5"
            pointerEvents="none"
          />
          
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={6}
            position="relative"
          >
            <Box flex="1" textAlign={{ base: "center", md: "left" }}>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="700"
                color={bookingCareColors.text.primary}
                mb={2}
              >
                🎯 Đặt lịch khám ngay hôm nay
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={bookingCareColors.text.muted}
                mb={4}
              >
                Hơn 200+ cơ sở y tế • 1000+ bác sĩ chuyên khoa • Phục vụ 24/7
              </Text>
              <Flex justify={{ base: "center", md: "flex-start" }} gap={2}>
                <Box bg={bookingCareColors.success} px={3} py={1} borderRadius="full">
                  <Text fontSize="sm" color="white" fontWeight="600">
                    ⭐ 4.8/5 đánh giá
                  </Text>
                </Box>
                <Box bg={bookingCareColors.warning} px={3} py={1} borderRadius="full">
                  <Text fontSize="sm" color={bookingCareColors.text.primary} fontWeight="600">
                    🏆 Tin cậy #1
                  </Text>
                </Box>
              </Flex>
            </Box>
            
            <Box>
              <Button
                size="lg"
                bg={bookingCareColors.background.gradient}
                color="white"
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="700"
                borderRadius="16px"
                border="none"
                boxShadow="0 4px 15px rgba(69, 195, 210, 0.3)"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 25px rgba(69, 195, 210, 0.4)",
                  bg: bookingCareColors.primaryDark
                }}
                _active={{
                  transform: "translateY(0)"
                }}
              >
                Đặt lịch ngay
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesGrid; 