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

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneOrEmail: '',
    dateOfBirth: '',
    otp: ''
  });
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOtp = async () => {
    if (!formData.fullName.trim() || !formData.phoneOrEmail.trim() || !formData.dateOfBirth) return;
    
    setIsLoading(true);
    // Mock API call
    setTimeout(() => {
      setShowOtpInput(true);
      setIsLoading(false);
    }, 1000);
  };

  const handleRegister = async () => {
    if (!formData.otp.trim()) return;
    
    setIsLoading(true);
    // Mock registration
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <VStack gap={6} align="stretch">
      {/* Header */}
      <VStack gap={2} textAlign="center">
        <Heading size="lg" color="blue.600">
          Đăng ký tài khoản
        </Heading>
        <Text color="gray.600" fontSize="sm">
          Tạo tài khoản mới để theo dõi lượt khám bệnh
        </Text>
      </VStack>

      {/* Form */}
      <VStack gap={4} align="stretch">
        <Box>
          <Text mb={2} fontWeight="medium">Họ và tên</Text>
          <Input
            type="text"
            placeholder="Nguyễn Văn An"
            value={formData.fullName}
            onChange={(e) => updateFormData('fullName', e.target.value)}
            disabled={showOtpInput}
          />
        </Box>

        <Box>
          <Text mb={2} fontWeight="medium">Số điện thoại hoặc Email</Text>
          <Input
            type="text"
            placeholder="0901234567 hoặc email@example.com"
            value={formData.phoneOrEmail}
            onChange={(e) => updateFormData('phoneOrEmail', e.target.value)}
            disabled={showOtpInput}
          />
        </Box>

        <Box>
          <Text mb={2} fontWeight="medium">Ngày sinh</Text>
          <Input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
            disabled={showOtpInput}
          />
        </Box>

        {!showOtpInput ? (
          <Button
            colorScheme="blue"
            size="lg"
            onClick={handleSendOtp}
            loading={isLoading}
            disabled={!formData.fullName.trim() || !formData.phoneOrEmail.trim() || !formData.dateOfBirth}
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
                value={formData.otp}
                onChange={(e) => updateFormData('otp', e.target.value)}
                maxLength={6}
              />
              <Text fontSize="xs" color="gray.500" mt={1}>
                Mã OTP đã được gửi đến {formData.phoneOrEmail}
              </Text>
            </Box>

            <VStack gap={2} align="stretch">
              <Button
                colorScheme="blue"
                size="lg"
                onClick={handleRegister}
                loading={isLoading}
                disabled={!formData.otp.trim()}
              >
                {isLoading ? 'Đang đăng ký...' : 'Hoàn tất đăng ký'}
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
            Đã có tài khoản?
          </Text>
          <Button
            variant="ghost"
            color="blue.600"
            fontSize="sm"
            fontWeight="medium"
            onClick={() => navigate('/login')}
          >
            Đăng nhập ngay
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default RegisterPage; 