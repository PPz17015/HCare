import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  useBreakpointValue,
  IconButton,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { bookingCareColors, containerSizes } from '../theme';

const BookingCareHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const menuItems = [
    { label: 'Chuyên khoa', path: '/chuyen-khoa' },
    { label: 'Cơ sở y tế', path: '#' },
    { label: 'Bác sĩ', path: '#' },
    { label: 'Gói khám', path: '#' },
    { label: 'Hỏi đáp', path: '#' },
  ];

  return (
    <Box 
      w="100%" 
      bg="white"
      borderBottom="3px solid"
      borderColor={bookingCareColors.primary}
      position="sticky"
      top="0"
      zIndex="1000"
      boxShadow="0 2px 10px rgba(69, 195, 210, 0.1)"
    >
      <Box 
        maxW={containerSizes.xl} 
        mx="auto" 
        px={{ base: 6, md: 8 }}
      >
        <Flex justify="space-between" align="center" h="70px">
          
          {/* Logo */}
          <RouterLink to="/" style={{ textDecoration: 'none' }}>
            <Flex align="center" gap={3}>
              <Box
                w="50px"
                h="50px"
                bg={bookingCareColors.background.gradient}
                borderRadius="12px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                fontSize="24px"
                fontWeight="700"
                boxShadow="0 4px 12px rgba(69, 195, 210, 0.3)"
              >
                H+
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="800"
                  color={bookingCareColors.primary}
                  lineHeight="1"
                >
                  HCare
                </Text>
                <Text
                  fontSize="xs"
                  color={bookingCareColors.text.muted}
                  lineHeight="1"
                >
                  Chăm sóc sức khỏe thông minh
                </Text>
              </Box>
            </Flex>
          </RouterLink>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Flex gap={8} align="center">
              {menuItems.map((item, index) => 
                item.path !== '#' ? (
                  <RouterLink
                    key={index}
                    to={item.path}
                    style={{ textDecoration: 'none' }}
                  >
                    <Text
                      fontSize="md"
                      fontWeight="600"
                      color={bookingCareColors.text.secondary}
                      cursor="pointer"
                      position="relative"
                      transition="all 0.3s ease"
                      _hover={{
                        color: bookingCareColors.primary,
                        transform: "translateY(-1px)",
                        _after: {
                          width: "100%"
                        }
                      }}
                      _after={{
                        content: '""',
                        position: "absolute",
                        bottom: "-8px",
                        left: "0",
                        width: "0",
                        height: "3px",
                        bg: bookingCareColors.primary,
                        transition: "width 0.3s ease"
                      }}
                    >
                      {item.label}
                    </Text>
                  </RouterLink>
                ) : (
                  <Text
                    key={index}
                    fontSize="md"
                    fontWeight="600"
                    color={bookingCareColors.text.secondary}
                    cursor="pointer"
                    position="relative"
                    transition="all 0.3s ease"
                    _hover={{
                      color: bookingCareColors.primary,
                      transform: "translateY(-1px)",
                      _after: {
                        width: "100%"
                      }
                    }}
                    _after={{
                      content: '""',
                      position: "absolute",
                      bottom: "-8px",
                      left: "0",
                      width: "0",
                      height: "3px",
                      bg: bookingCareColors.primary,
                      transition: "width 0.3s ease"
                    }}
                  >
                    {item.label}
                  </Text>
                )
              )}
            </Flex>
          )}

          {/* Action Buttons */}
          <Flex gap={3} align="center">
            {!isMobile && (
              <>
                <Button
                  variant="ghost"
                  color={bookingCareColors.text.secondary}
                  fontWeight="600"
                  borderRadius="10px"
                  _hover={{
                    bg: bookingCareColors.primaryLight,
                    color: bookingCareColors.primary
                  }}
                >
                  Đăng nhập
                </Button>
                <Button
                  bg={bookingCareColors.background.gradient}
                  color="white"
                  fontWeight="700"
                  borderRadius="12px"
                  px={6}
                  boxShadow="0 4px 12px rgba(69, 195, 210, 0.3)"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(69, 195, 210, 0.4)"
                  }}
                >
                  Đăng ký
                </Button>
              </>
            )}

            {/* Mobile Menu Toggle */}
            {isMobile && (
              <IconButton
                aria-label="Menu"
                bg="transparent"
                color={bookingCareColors.primary}
                fontSize="24px"
                _hover={{
                  bg: bookingCareColors.primaryLight
                }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? '✕' : '☰'}
              </IconButton>
            )}
          </Flex>
        </Flex>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <Box
            bg="white"
            borderTop="1px solid"
            borderColor={bookingCareColors.border.light}
            py={4}
            mt={0}
          >
            <Flex direction="column" gap={4}>
              {menuItems.map((item, index) => 
                item.path !== '#' ? (
                  <RouterLink
                    key={index}
                    to={item.path}
                    style={{ textDecoration: 'none' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Text
                      fontSize="md"
                      fontWeight="600"
                      color={bookingCareColors.text.secondary}
                      cursor="pointer"
                      p={2}
                      borderRadius="8px"
                      transition="all 0.3s ease"
                      _hover={{
                        bg: bookingCareColors.primaryLight,
                        color: bookingCareColors.primary,
                      }}
                    >
                      {item.label}
                    </Text>
                  </RouterLink>
                ) : (
                  <Text
                    key={index}
                    fontSize="md"
                    fontWeight="600"
                    color={bookingCareColors.text.secondary}
                    cursor="pointer"
                    p={2}
                    borderRadius="8px"
                    transition="all 0.3s ease"
                    _hover={{
                      bg: bookingCareColors.primaryLight,
                      color: bookingCareColors.primary,
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Text>
                )
              )}
              
              <Flex direction="column" gap={2} mt={4}>
                <Button
                  variant="outline"
                  borderColor={bookingCareColors.primary}
                  color={bookingCareColors.primary}
                  fontWeight="600"
                  borderRadius="10px"
                >
                  Đăng nhập
                </Button>
                <Button
                  bg={bookingCareColors.background.gradient}
                  color="white"
                  fontWeight="700"
                  borderRadius="10px"
                >
                  Đăng ký
                </Button>
              </Flex>
            </Flex>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default BookingCareHeader; 