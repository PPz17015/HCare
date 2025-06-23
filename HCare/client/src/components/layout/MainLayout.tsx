import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  VStack,
  Text,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { currentUser } from '../../utils/mockData';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useBreakpointValue({ base: true, lg: false });

  // Navigation items
  const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: '🏠' },
    { label: 'Admin Panel', path: '/admin', icon: '⚙️' },
  ];

  const handleLogout = () => {
    // Mock logout - sẽ implement thật sau
    navigate('/login');
  };

  return (
    <Box minH="100vh" bg="gray.50">
      {/* Header */}
      <Box bg="white" borderBottom="1px" borderColor="gray.200" position="sticky" top={0} zIndex={1000}>
        <Container maxW="7xl" py={4}>
          <Flex justify="space-between" align="center">
            {/* Logo */}
            <VStack gap={0} align="start">
              <Heading size="md" color="blue.600">
                🏥 HCare
              </Heading>
              <Text fontSize="xs" color="gray.500">
                Chào {currentUser.fullName}
              </Text>
            </VStack>

            {/* Navigation */}
            <HStack gap={4}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  variant={location.pathname === item.path ? 'solid' : 'ghost'}
                  colorScheme={location.pathname === item.path ? 'blue' : 'gray'}
                  onClick={() => navigate(item.path)}
                  size={isMobile ? 'sm' : 'md'}
                >
                  <Text mr={2}>{item.icon}</Text>
                  {!isMobile && item.label}
                </Button>
              ))}
              
              <Button
                variant="ghost"
                colorScheme="red"
                onClick={handleLogout}
                size={isMobile ? 'sm' : 'md'}
              >
                Đăng xuất
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="7xl" py={6}>
        {children}
      </Container>
    </Box>
  );
};

export default MainLayout; 