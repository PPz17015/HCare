import React from 'react';
import {
  Box,
  Grid,
  Flex,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import { bookingCareColors, containerSizes } from '../theme';

interface SpecialtyItem {
  id: number;
  name: string;
  icon: string;
  description: string;
  color: string;
}

const MedicalSpecialties: React.FC = () => {
  const specialties: SpecialtyItem[] = [
    {
      id: 1,
      name: 'Cơ xương khớp',
      icon: '🦴',
      description: 'Điều trị các vấn đề về xương, khớp và cơ',
      color: '#FFE4E6'
    },
    {
      id: 2,
      name: 'Thần kinh',
      icon: '🧠',
      description: 'Chăm sóc hệ thần kinh và não bộ',
      color: '#E6F7FF'
    },
    {
      id: 3,
      name: 'Tim mạch',
      icon: '❤️',
      description: 'Khám và điều trị bệnh về tim mạch',
      color: '#F6FFED'
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
              Chuyên khoa
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={bookingCareColors.text.muted}
            >
              Tìm bác sĩ chuyên khoa phù hợp với nhu cầu của bạn
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
            Xem tất cả chuyên khoa
          </Button>
        </Flex>

        {/* Specialties Grid */}
        <Grid
          templateColumns={{ 
            base: "1fr", 
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)" 
          }}
          gap={{ base: 6, md: 8 }}
        >
          {specialties.map((specialty) => (
            <Box
              key={specialty.id}
              bg="white"
              border="3px solid"
              borderColor={bookingCareColors.border.light}
              borderRadius="20px"
              p={{ base: 6, md: 8 }}
              textAlign="center"
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
                w={{ base: "80px", md: "90px" }}
                h={{ base: "80px", md: "90px" }}
                bg={specialty.color}
                borderRadius="20px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: "36px", md: "40px" }}
                mb={4}
                mx="auto"
                border="3px solid"
                borderColor="white"
                boxShadow="0 4px 15px rgba(0,0,0,0.1)"
                transition="all 0.3s ease"
                _groupHover={{
                  transform: "scale(1.1)"
                }}
              >
                {specialty.icon}
              </Box>

              {/* Name */}
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="700"
                color={bookingCareColors.text.primary}
                mb={2}
                lineHeight="1.2"
              >
                {specialty.name}
              </Text>

              {/* Description */}
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color={bookingCareColors.text.muted}
                lineHeight="1.5"
              >
                {specialty.description}
              </Text>

              {/* Stats */}
              <Box mt={4}>
                <Text
                  fontSize="sm"
                  color={bookingCareColors.primary}
                  fontWeight="600"
                >
                  50+ bác sĩ chuyên khoa
                </Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MedicalSpecialties; 