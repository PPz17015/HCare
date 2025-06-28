import React from 'react';
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Center,
  useBreakpointValue
} from '@chakra-ui/react';

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box 
      minH="100vh" 
      bg="linear-gradient(135deg, #7777bb 0%, #6666aa 50%, #5555aa 100%)"
      position="relative"
    >
      {/* Background pattern similar to HTTrack */}
      <Box
        position="absolute"
        top={0}
        right={0}
        w="200px"
        h="200px"
        bgImage="url(data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E)"
        opacity={0.3}
      />

      {/* Header - HTTrack style */}
      <Box bg="black" color="white" py={4}>
        <Container maxW="6xl">
          <Center>
            <Text fontWeight="bold" fontSize="lg">
              HCare Platform - Hệ thống y tế số toàn diện
            </Text>
          </Center>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxW="6xl" py={8}>
        <Box
          bg="#ccccdd"
          borderRadius="md"
          border="1px solid"
          borderColor="gray.300"
          minH="70vh"
          position="relative"
        >
          {/* Content Border - HTTrack table style */}
          <Box
            bg="black"
            h="1px"
            w="full"
            position="absolute"
            top={0}
          />
          
          <Box p={isMobile ? 6 : 10}>
            {children}
          </Box>

          {/* Bottom border */}
          <Box
            bg="black"
            h="6px"
            w="full"
            position="absolute"
            bottom={0}
          />
        </Box>
      </Container>

      {/* Footer - HTTrack style */}
      <Box 
        bg="transparent"
        py={4}
        mt="auto"
      >
        <Container maxW="6xl">
          <Center>
            <VStack gap={1}>
              <Text fontSize="xs" color="white" textAlign="center" opacity={0.8}>
                © 2024 HCare Platform & Contributors - Thiết kế: Inspired by HTTrack simplicity
              </Text>
              <Text fontSize="xs" color="white" opacity={0.6}>
                Hotline: 1900-1234 | Email: support@hcare.vn
              </Text>
            </VStack>
          </Center>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingLayout; 