import React, { useState } from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Input,
  Button,
  HStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOtp = async () => {
    if (!phoneOrEmail.trim()) return;
    
    setIsLoading(true);
    // Mock API call
    setTimeout(() => {
      setShowOtpInput(true);
      setIsLoading(false);
    }, 1000);
  };

  const handleLogin = async () => {
    if (!otp.trim()) return;
    
    setIsLoading(true);
    // Mock login
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <VStack gap={6} align="stretch">
      {/* Header */}
      <VStack gap={2} textAlign="center">
        <Heading size="lg" color="blue.600">
          Đăng nhập
        </Heading>
        <Text color="gray.600" fontSize="sm">
          Nhập số điện thoại hoặc email để tiếp tục
        </Text>
      </VStack>

      {/* Form */}
      <VStack gap={4} align="stretch">
        <Box>
          <Text mb={2} fontWeight="medium">Số điện thoại hoặc Email</Text>
          <Input
            type="text"
            placeholder="0901234567 hoặc email@example.com"
            value={phoneOrEmail}
            onChange={(e) => setPhoneOrEmail(e.target.value)}
            disabled={showOtpInput}
          />
        </Box>

        {!showOtpInput ? (
          <Button
            colorScheme="blue"
            size="lg"
            onClick={handleSendOtp}
            loading={isLoading}
            disabled={!phoneOrEmail.trim()}
          >
            {isLoading ? 'Đang gửi OTP...' : 'Gửi mã OTP'}
          </Button>
        ) : (
          <VStack gap={4} align="stretch">
            <Box>
              <Text mb={2} fontWeight="medium">Mã xác thực (OTP)</Text>
              <Input
                type="text"
                placeholder="Nhập mã 6 số"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
              />
              <Text fontSize="xs" color="gray.500" mt={1}>
                Mã OTP đã được gửi đến {phoneOrEmail}
              </Text>
            </Box>

            <VStack gap={2} align="stretch">
              <Button
                colorScheme="blue"
                size="lg"
                onClick={handleLogin}
                loading={isLoading}
                disabled={!otp.trim()}
              >
                {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowOtpInput(false)}
                disabled={isLoading}
              >
                Gửi lại mã OTP
              </Button>
            </VStack>
          </VStack>
        )}
      </VStack>

      {/* Footer */}
      <Box textAlign="center" pt={4} borderTop="1px" borderColor="gray.200">
        <HStack justify="center" gap={1}>
          <Text fontSize="sm" color="gray.600">
            Chưa có tài khoản?
          </Text>
          <Button
            variant="ghost"
            color="blue.600"
            fontSize="sm"
            fontWeight="medium"
            onClick={() => navigate('/register')}
          >
            Đăng ký ngay
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default LoginPage; 