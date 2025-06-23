import React from 'react';
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Image,
  Center,
  useBreakpointValue
} from '@chakra-ui/react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box minH="100vh" bg="gray.50">
      {/* Header */}
      <Box bg="white" borderBottom="1px" borderColor="gray.200" py={4}>
        <Container maxW="7xl">
          <Center>
            <VStack gap={0}>
              <Heading 
                size="lg" 
                color="blue.600"
                fontWeight="bold"
                textAlign="center"
              >
                🏥 HCare
              </Heading>
              <Text 
                fontSize="sm" 
                color="gray.600"
                textAlign="center"
              >
                Hệ thống theo dõi lượt khám bệnh
              </Text>
            </VStack>
          </Center>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="lg" py={8}>
        <Center minH="calc(100vh - 200px)">
          <Box
            w="full"
            maxW="md"
            bg="white"
            rounded="xl"
            shadow="lg"
            p={isMobile ? 6 : 8}
            border="1px"
            borderColor="gray.200"
          >
            {children}
          </Box>
        </Center>
      </Container>

      {/* Footer */}
      <Box 
        bg="white" 
        borderTop="1px" 
        borderColor="gray.200"
        py={4}
        mt="auto"
      >
        <Container maxW="7xl">
          <Center>
            <VStack gap={1}>
              <Text fontSize="sm" color="gray.500">
                © 2024 HCare. Tất cả quyền được bảo lưu.
              </Text>
              <Text fontSize="xs" color="gray.400">
                Hotline hỗ trợ: 1900-1234
              </Text>
            </VStack>
          </Center>
        </Container>
      </Box>
    </Box>
  );
};

export default AuthLayout; 