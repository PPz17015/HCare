import React from 'react';
import {
  Box,
  Grid,
  Flex,
  Text,
  Button,
  Badge,
} from '@chakra-ui/react';
import { bookingCareColors, containerSizes } from '../theme';

interface FacilityItem {
  id: number;
  name: string;
  type: string;
  location: string;
  rating: number;
  specialties: string[];
  logo: string;
  featured: boolean;
}

const MedicalFacilities: React.FC = () => {
  const facilities: FacilityItem[] = [
    {
      id: 1,
      name: 'Bệnh viện Đại học Y Hà Nội',
      type: 'Bệnh viện công lập',
      location: 'Hà Nội',
      rating: 4.8,
      specialties: ['Tim mạch', 'Thần kinh', 'Ung bướu'],
      logo: '🏥',
      featured: true
    },
    {
      id: 2,
      name: 'Bệnh viện Chợ Rẫy',
      type: 'Bệnh viện công lập',
      location: 'TP. Hồ Chí Minh',
      rating: 4.7,
      specialties: ['Cấp cứu', 'Ngoại khoa', 'Nội khoa'],
      logo: '🏨',
      featured: true
    },
    {
      id: 3,
      name: 'Phòng khám Đa khoa Medlatec',
      type: 'Phòng khám tư nhân',
      location: 'Hà Nội',
      rating: 4.6,
      specialties: ['Khám tổng quát', 'Xét nghiệm', 'Chẩn đoán hình ảnh'],
      logo: '🩺',
      featured: false
    }
  ];

  return (
    <Box 
      w="100%" 
      py={{ base: 12, md: 16 }} 
      bg={bookingCareColors.background.primary}
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
              Cơ sở y tế
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={bookingCareColors.text.muted}
            >
              Hệ thống bệnh viện và phòng khám uy tín trên toàn quốc
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
            Xem tất cả cơ sở
          </Button>
        </Flex>

        {/* Facilities Grid */}
        <Grid
          templateColumns={{ 
            base: "1fr", 
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)" 
          }}
          gap={{ base: 6, md: 8 }}
        >
          {facilities.map((facility) => (
            <Box
              key={facility.id}
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
              {/* Featured Badge */}
              {facility.featured && (
                <Badge
                  position="absolute"
                  top={4}
                  right={4}
                  bg={bookingCareColors.warning}
                  color={bookingCareColors.text.primary}
                  px={2}
                  py={1}
                  borderRadius="8px"
                  fontSize="xs"
                  fontWeight="600"
                >
                  Nổi bật
                </Badge>
              )}

              {/* Logo */}
              <Box
                w="80px"
                h="80px"
                bg={bookingCareColors.primaryLight}
                borderRadius="15px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="32px"
                mb={4}
                border="2px solid"
                borderColor="white"
                boxShadow="0 4px 12px rgba(0,0,0,0.1)"
              >
                {facility.logo}
              </Box>

              {/* Name & Type */}
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="700"
                color={bookingCareColors.text.primary}
                mb={1}
                lineHeight="1.2"
              >
                {facility.name}
              </Text>

              <Text
                fontSize="sm"
                color={bookingCareColors.text.muted}
                mb={2}
              >
                {facility.type}
              </Text>

              {/* Location & Rating */}
              <Flex justify="space-between" align="center" mb={3}>
                <Text fontSize="sm" color={bookingCareColors.text.muted}>
                  📍 {facility.location}
                </Text>
                <Flex align="center">
                  <Text fontSize="sm" color={bookingCareColors.warning} mr={1}>
                    ⭐
                  </Text>
                  <Text fontSize="sm" fontWeight="600" color={bookingCareColors.text.primary}>
                    {facility.rating}
                  </Text>
                </Flex>
              </Flex>

              {/* Specialties */}
              <Box>
                <Text fontSize="xs" color={bookingCareColors.text.muted} mb={2}>
                  Chuyên khoa:
                </Text>
                <Flex wrap="wrap" gap={1}>
                  {facility.specialties.slice(0, 2).map((specialty, index) => (
                    <Badge
                      key={index}
                      bg={bookingCareColors.primaryLight}
                      color={bookingCareColors.primary}
                      px={2}
                      py={1}
                      borderRadius="6px"
                      fontSize="xs"
                    >
                      {specialty}
                    </Badge>
                  ))}
                  {facility.specialties.length > 2 && (
                    <Badge
                      bg={bookingCareColors.border.light}
                      color={bookingCareColors.text.muted}
                      px={2}
                      py={1}
                      borderRadius="6px"
                      fontSize="xs"
                    >
                      +{facility.specialties.length - 2}
                    </Badge>
                  )}
                </Flex>
              </Box>

              {/* Action Button */}
              <Button
                mt={4}
                w="100%"
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
                Xem chi tiết
              </Button>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MedicalFacilities; 