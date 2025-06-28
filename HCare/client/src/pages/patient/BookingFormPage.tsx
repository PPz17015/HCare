import React, { useState, useEffect } from 'react';
import { Box, VStack, HStack, Text, Input, Textarea, Button, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { bookingCareTheme } from '../../theme/bookingcare';

interface BookingFormData {
  patientName: string;
  phone: string;
  email: string;
  birthDate: string;
  gender: string;
  address: string;
  appointmentDate: string;
  appointmentTime: string;
  reason: string;
  notes: string;
}

const BookingFormPage: React.FC = () => {
  const navigate = useNavigate();
  
  // Get selected appointment info from sessionStorage
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);

  const [formData, setFormData] = useState<BookingFormData>({
    patientName: '',
    phone: '',
    email: '',
    birthDate: '',
    gender: '',
    address: '',
    appointmentDate: '',
    appointmentTime: '',
    reason: '',
    notes: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  // Load selected appointment info on component mount
  useEffect(() => {
    const appointmentData = sessionStorage.getItem('selectedAppointment');
    if (appointmentData) {
      const appointment = JSON.parse(appointmentData);
      setSelectedAppointment(appointment);
      setFormData(prev => ({
        ...prev,
        appointmentDate: appointment.selectedDate,
        appointmentTime: appointment.selectedSlot
      }));
    }
  }, []);

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking submission
    setShowSuccess(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <Box minH="100vh" bg={bookingCareTheme.colors.background.secondary} fontFamily={bookingCareTheme.typography.fontFamily.primary}>
      {/* Header */}
      <Box 
        bg={bookingCareTheme.colors.background.primary}
        borderBottom={`1px solid ${bookingCareTheme.colors.border.light}`}
        boxShadow={bookingCareTheme.colors.shadow.sm}
        py={4}
        position="sticky"
        top={0}
        zIndex={10}
      >
        <Box maxW="1200px" mx="auto" px={6}>
          <HStack gap={4} align="center">
            <Button
              onClick={() => navigate(-1)}
              variant="ghost"
              color={bookingCareTheme.colors.primary}
              _hover={{ bg: bookingCareTheme.colors.primaryLight }}
            >
              ← Quay lại
            </Button>
            <Text 
              fontSize={bookingCareTheme.typography.fontSize.xl}
              fontWeight={bookingCareTheme.typography.fontWeight.semibold}
              color={bookingCareTheme.colors.text.primary}
            >
              Đặt lịch khám
            </Text>
          </HStack>
        </Box>
      </Box>

      {/* Main Content */}
      <Box maxW="800px" mx="auto" p={6}>
        <VStack gap={6} align="stretch">
          
          {/* Selected Doctor Info */}
          {selectedAppointment && (
            <Box 
              bg={bookingCareTheme.colors.background.primary}
              borderRadius={bookingCareTheme.borderRadius.lg}
              p={6}
              border={`1px solid ${bookingCareTheme.colors.border.light}`}
              boxShadow={bookingCareTheme.colors.shadow.card}
            >
              <Text 
                fontSize={bookingCareTheme.typography.fontSize.lg}
                fontWeight={bookingCareTheme.typography.fontWeight.semibold}
                color={bookingCareTheme.colors.text.primary}
                mb={4}
              >
                📋 Thông tin lịch khám
              </Text>
              
              <VStack gap={3} align="start">
                <HStack gap={3}>
                  <Text fontWeight={bookingCareTheme.typography.fontWeight.medium} color={bookingCareTheme.colors.text.secondary}>
                    👨‍⚕️ Bác sĩ:
                  </Text>
                  <Text color={bookingCareTheme.colors.primary} fontWeight={bookingCareTheme.typography.fontWeight.semibold}>
                    {selectedAppointment.doctor.title} {selectedAppointment.doctor.name}
                  </Text>
                </HStack>
                
                <HStack gap={3}>
                  <Text fontWeight={bookingCareTheme.typography.fontWeight.medium} color={bookingCareTheme.colors.text.secondary}>
                    🏥 Chuyên khoa:
                  </Text>
                  <Text color={bookingCareTheme.colors.text.primary}>
                    {selectedAppointment.doctor.specialty}
                  </Text>
                </HStack>
                
                <HStack gap={3}>
                  <Text fontWeight={bookingCareTheme.typography.fontWeight.medium} color={bookingCareTheme.colors.text.secondary}>
                    📍 Phòng khám:
                  </Text>
                  <Text color={bookingCareTheme.colors.text.primary}>
                    {selectedAppointment.doctor.clinic.name}
                  </Text>
                </HStack>
                
                <HStack gap={6}>
                  <HStack gap={3}>
                    <Text fontWeight={bookingCareTheme.typography.fontWeight.medium} color={bookingCareTheme.colors.text.secondary}>
                      📅 Ngày:
                    </Text>
                    <Text color={bookingCareTheme.colors.primary} fontWeight={bookingCareTheme.typography.fontWeight.semibold}>
                      {selectedAppointment.selectedDate}
                    </Text>
                  </HStack>
                  
                  <HStack gap={3}>
                    <Text fontWeight={bookingCareTheme.typography.fontWeight.medium} color={bookingCareTheme.colors.text.secondary}>
                      ⏰ Giờ:
                    </Text>
                    <Text color={bookingCareTheme.colors.primary} fontWeight={bookingCareTheme.typography.fontWeight.semibold}>
                      {selectedAppointment.selectedSlot}
                    </Text>
                  </HStack>
                  
                  <HStack gap={3}>
                    <Text fontWeight={bookingCareTheme.typography.fontWeight.medium} color={bookingCareTheme.colors.text.secondary}>
                      💰 Giá:
                    </Text>
                    <Text color={bookingCareTheme.colors.cta} fontWeight={bookingCareTheme.typography.fontWeight.bold}>
                      {selectedAppointment.doctor.clinic.price}
                    </Text>
                  </HStack>
                </HStack>
              </VStack>
            </Box>
          )}

          {/* Success Message */}
          {showSuccess && (
            <Box 
              bg={bookingCareTheme.colors.status.success}
              color="white"
              p={4}
              borderRadius={bookingCareTheme.borderRadius.lg}
              textAlign="center"
            >
              <Text fontWeight={bookingCareTheme.typography.fontWeight.semibold} fontSize={bookingCareTheme.typography.fontSize.md}>
                ✅ Đặt lịch thành công! Đang chuyển hướng...
              </Text>
            </Box>
          )}

          {/* Booking Form */}
          <Box 
            bg={bookingCareTheme.colors.background.primary}
            borderRadius={bookingCareTheme.borderRadius.lg}
            p={6}
            border={`1px solid ${bookingCareTheme.colors.border.light}`}
            boxShadow={bookingCareTheme.colors.shadow.card}
          >
            <form onSubmit={handleSubmit}>
              <VStack gap={6} align="stretch">
                
                {/* Personal Information Section */}
                <Box>
                  <Text 
                    fontSize={bookingCareTheme.typography.fontSize.lg}
                    fontWeight={bookingCareTheme.typography.fontWeight.semibold}
                    color={bookingCareTheme.colors.text.primary}
                    mb={4}
                    pb={2}
                    borderBottom={`2px solid ${bookingCareTheme.colors.primary}`}
                  >
                    👤 Thông tin cá nhân
                  </Text>
                  
                  <Stack gap={4}>
                    <HStack gap={4}>
                      <Box flex={1}>
                        <Text 
                          mb={2}
                          fontSize={bookingCareTheme.typography.fontSize.sm}
                          fontWeight={bookingCareTheme.typography.fontWeight.medium}
                          color={bookingCareTheme.colors.text.primary}
                        >
                          Họ và tên <Text as="span" color={bookingCareTheme.colors.status.error}>*</Text>
                        </Text>
                        <Input
                          value={formData.patientName}
                          onChange={(e) => handleInputChange('patientName', e.target.value)}
                          placeholder="Nhập họ và tên đầy đủ"
                          bg={bookingCareTheme.colors.background.input}
                          border={`1px solid ${bookingCareTheme.colors.border.input}`}
                          borderRadius={bookingCareTheme.borderRadius.md}
                          _focus={{
                            borderColor: bookingCareTheme.colors.border.focus,
                            boxShadow: `0 0 0 2px ${bookingCareTheme.colors.primary}20`,
                          }}
                          required
                        />
                      </Box>
                      
                      <Box flex={1}>
                        <Text 
                          mb={2}
                          fontSize={bookingCareTheme.typography.fontSize.sm}
                          fontWeight={bookingCareTheme.typography.fontWeight.medium}
                          color={bookingCareTheme.colors.text.primary}
                        >
                          Số điện thoại <Text as="span" color={bookingCareTheme.colors.status.error}>*</Text>
                        </Text>
                        <Input
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="Nhập số điện thoại"
                          bg={bookingCareTheme.colors.background.input}
                          border={`1px solid ${bookingCareTheme.colors.border.input}`}
                          borderRadius={bookingCareTheme.borderRadius.md}
                          _focus={{
                            borderColor: bookingCareTheme.colors.border.focus,
                            boxShadow: `0 0 0 2px ${bookingCareTheme.colors.primary}20`,
                          }}
                          required
                        />
                      </Box>
                    </HStack>

                    <HStack gap={4}>
                      <Box flex={1}>
                        <Text 
                          mb={2}
                          fontSize={bookingCareTheme.typography.fontSize.sm}
                          fontWeight={bookingCareTheme.typography.fontWeight.medium}
                          color={bookingCareTheme.colors.text.primary}
                        >
                          Email <Text as="span" color={bookingCareTheme.colors.status.error}>*</Text>
                        </Text>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Nhập địa chỉ email"
                          bg={bookingCareTheme.colors.background.input}
                          border={`1px solid ${bookingCareTheme.colors.border.input}`}
                          borderRadius={bookingCareTheme.borderRadius.md}
                          _focus={{
                            borderColor: bookingCareTheme.colors.border.focus,
                            boxShadow: `0 0 0 2px ${bookingCareTheme.colors.primary}20`,
                          }}
                          required
                        />
                      </Box>
                      
                      <Box flex={1}>
                        <Text 
                          mb={2}
                          fontSize={bookingCareTheme.typography.fontSize.sm}
                          fontWeight={bookingCareTheme.typography.fontWeight.medium}
                          color={bookingCareTheme.colors.text.primary}
                        >
                          Ngày sinh <Text as="span" color={bookingCareTheme.colors.status.error}>*</Text>
                        </Text>
                        <Input
                          type="date"
                          value={formData.birthDate}
                          onChange={(e) => handleInputChange('birthDate', e.target.value)}
                          bg={bookingCareTheme.colors.background.input}
                          border={`1px solid ${bookingCareTheme.colors.border.input}`}
                          borderRadius={bookingCareTheme.borderRadius.md}
                          _focus={{
                            borderColor: bookingCareTheme.colors.border.focus,
                            boxShadow: `0 0 0 2px ${bookingCareTheme.colors.primary}20`,
                          }}
                          required
                        />
                      </Box>
                    </HStack>

                    <HStack gap={4}>
                      <Box flex={1}>
                        <Text 
                          mb={2}
                          fontSize={bookingCareTheme.typography.fontSize.sm}
                          fontWeight={bookingCareTheme.typography.fontWeight.medium}
                          color={bookingCareTheme.colors.text.primary}
                        >
                          Giới tính <Text as="span" color={bookingCareTheme.colors.status.error}>*</Text>
                        </Text>
                        <HStack gap={4} mt={2}>
                          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <input
                              type="radio"
                              name="gender"
                              value="male"
                              checked={formData.gender === 'male'}
                              onChange={(e) => handleInputChange('gender', e.target.value)}
                              style={{ marginRight: '8px', accentColor: bookingCareTheme.colors.primary }}
                            />
                            <Text fontSize={bookingCareTheme.typography.fontSize.sm}>Nam</Text>
                          </label>
                          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <input
                              type="radio"
                              name="gender"
                              value="female"
                              checked={formData.gender === 'female'}
                              onChange={(e) => handleInputChange('gender', e.target.value)}
                              style={{ marginRight: '8px', accentColor: bookingCareTheme.colors.primary }}
                            />
                            <Text fontSize={bookingCareTheme.typography.fontSize.sm}>Nữ</Text>
                          </label>
                          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <input
                              type="radio"
                              name="gender"
                              value="other"
                              checked={formData.gender === 'other'}
                              onChange={(e) => handleInputChange('gender', e.target.value)}
                              style={{ marginRight: '8px', accentColor: bookingCareTheme.colors.primary }}
                            />
                            <Text fontSize={bookingCareTheme.typography.fontSize.sm}>Khác</Text>
                          </label>
                        </HStack>
                      </Box>
                      
                      <Box flex={2}>
                        <Text 
                          mb={2}
                          fontSize={bookingCareTheme.typography.fontSize.sm}
                          fontWeight={bookingCareTheme.typography.fontWeight.medium}
                          color={bookingCareTheme.colors.text.primary}
                        >
                          Địa chỉ <Text as="span" color={bookingCareTheme.colors.status.error}>*</Text>
                        </Text>
                        <Input
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          placeholder="Nhập địa chỉ của bạn"
                          bg={bookingCareTheme.colors.background.input}
                          border={`1px solid ${bookingCareTheme.colors.border.input}`}
                          borderRadius={bookingCareTheme.borderRadius.md}
                          _focus={{
                            borderColor: bookingCareTheme.colors.border.focus,
                            boxShadow: `0 0 0 2px ${bookingCareTheme.colors.primary}20`,
                          }}
                          required
                        />
                      </Box>
                    </HStack>
                  </Stack>
                </Box>

                {/* Appointment Information Section */}
                <Box>
                  <Text 
                    fontSize={bookingCareTheme.typography.fontSize.lg}
                    fontWeight={bookingCareTheme.typography.fontWeight.semibold}
                    color={bookingCareTheme.colors.text.primary}
                    mb={4}
                    pb={2}
                    borderBottom={`2px solid ${bookingCareTheme.colors.primary}`}
                  >
                    📅 Thông tin lịch hẹn
                  </Text>
                  
                  <Stack gap={4}>
                    <HStack gap={4}>
                      <Box flex={1}>
                        <Text 
                          mb={2}
                          fontSize={bookingCareTheme.typography.fontSize.sm}
                          fontWeight={bookingCareTheme.typography.fontWeight.medium}
                          color={bookingCareTheme.colors.text.primary}
                        >
                          Ngày khám <Text as="span" color={bookingCareTheme.colors.status.error}>*</Text>
                        </Text>
                        <Input
                          type="date"
                          value={formData.appointmentDate}
                          onChange={(e) => handleInputChange('appointmentDate', e.target.value)}
                          bg={selectedAppointment ? bookingCareTheme.colors.background.secondary : bookingCareTheme.colors.background.input}
                          border={`1px solid ${bookingCareTheme.colors.border.input}`}
                          borderRadius={bookingCareTheme.borderRadius.md}
                          _focus={{
                            borderColor: bookingCareTheme.colors.border.focus,
                            boxShadow: `0 0 0 2px ${bookingCareTheme.colors.primary}20`,
                          }}
                          disabled={!!selectedAppointment}
                          required
                        />
                      </Box>
                      
                      <Box flex={1}>
                        <Text 
                          mb={2}
                          fontSize={bookingCareTheme.typography.fontSize.sm}
                          fontWeight={bookingCareTheme.typography.fontWeight.medium}
                          color={bookingCareTheme.colors.text.primary}
                        >
                          Giờ khám <Text as="span" color={bookingCareTheme.colors.status.error}>*</Text>
                        </Text>
                        <select
                          value={formData.appointmentTime}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange('appointmentTime', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '8px 12px',
                            border: `1px solid ${bookingCareTheme.colors.border.input}`,
                            borderRadius: bookingCareTheme.borderRadius.md,
                            backgroundColor: selectedAppointment ? bookingCareTheme.colors.background.secondary : bookingCareTheme.colors.background.input,
                            fontSize: bookingCareTheme.typography.fontSize.base,
                            fontFamily: bookingCareTheme.typography.fontFamily.primary,
                          }}
                          disabled={!!selectedAppointment}
                          required
                        >
                          <option value="">Chọn giờ khám</option>
                          <option value="08:00">08:00</option>
                          <option value="08:30">08:30</option>
                          <option value="09:00">09:00</option>
                          <option value="09:30">09:30</option>
                          <option value="10:00">10:00</option>
                          <option value="10:30">10:30</option>
                          <option value="11:00">11:00</option>
                          <option value="14:00">14:00</option>
                          <option value="14:30">14:30</option>
                          <option value="15:00">15:00</option>
                          <option value="15:30">15:30</option>
                          <option value="16:00">16:00</option>
                          <option value="16:30">16:30</option>
                          <option value="17:00">17:00</option>
                        </select>
                      </Box>
                    </HStack>

                    <Box>
                      <Text 
                        mb={2}
                        fontSize={bookingCareTheme.typography.fontSize.sm}
                        fontWeight={bookingCareTheme.typography.fontWeight.medium}
                        color={bookingCareTheme.colors.text.primary}
                      >
                        Lý do khám <Text as="span" color={bookingCareTheme.colors.status.error}>*</Text>
                      </Text>
                      <Input
                        value={formData.reason}
                        onChange={(e) => handleInputChange('reason', e.target.value)}
                        placeholder="Ví dụ: Đau đầu, khám tổng quát, tái khám..."
                        bg={bookingCareTheme.colors.background.input}
                        border={`1px solid ${bookingCareTheme.colors.border.input}`}
                        borderRadius={bookingCareTheme.borderRadius.md}
                        _focus={{
                          borderColor: bookingCareTheme.colors.border.focus,
                          boxShadow: `0 0 0 2px ${bookingCareTheme.colors.primary}20`,
                        }}
                        required
                      />
                    </Box>

                    <Box>
                      <Text 
                        mb={2}
                        fontSize={bookingCareTheme.typography.fontSize.sm}
                        fontWeight={bookingCareTheme.typography.fontWeight.medium}
                        color={bookingCareTheme.colors.text.primary}
                      >
                        Ghi chú thêm
                      </Text>
                      <Textarea
                        value={formData.notes}
                        onChange={(e) => handleInputChange('notes', e.target.value)}
                        placeholder="Các thông tin bổ sung (tiền sử bệnh, thuốc đang dùng...)"
                        bg={bookingCareTheme.colors.background.input}
                        border={`1px solid ${bookingCareTheme.colors.border.input}`}
                        borderRadius={bookingCareTheme.borderRadius.md}
                        minH="100px"
                        _focus={{
                          borderColor: bookingCareTheme.colors.border.focus,
                          boxShadow: `0 0 0 2px ${bookingCareTheme.colors.primary}20`,
                        }}
                      />
                    </Box>
                  </Stack>
                </Box>

                {/* Action Buttons */}
                <HStack gap={4} justify="center" pt={4}>
                  <Button
                    type="submit"
                    bg={bookingCareTheme.colors.cta}
                    color={bookingCareTheme.colors.text.primary}
                    fontWeight={bookingCareTheme.typography.fontWeight.bold}
                    fontSize={bookingCareTheme.typography.fontSize.md}
                    px={8}
                    py={6}
                    borderRadius={bookingCareTheme.borderRadius.lg}
                    _hover={{
                      bg: bookingCareTheme.colors.ctaHover,
                      transform: 'translateY(-2px)',
                      boxShadow: bookingCareTheme.colors.shadow.lg,
                    }}
                    _active={{
                      transform: 'translateY(0)',
                    }}
                    disabled={showSuccess}
                    transition="all 0.3s ease"
                  >
                    🗓️ Xác nhận đặt lịch
                  </Button>
                  
                  <Button
                    variant="outline"
                    borderColor={bookingCareTheme.colors.border.medium}
                    color={bookingCareTheme.colors.text.secondary}
                    fontWeight={bookingCareTheme.typography.fontWeight.medium}
                    px={8}
                    py={6}
                    borderRadius={bookingCareTheme.borderRadius.lg}
                    _hover={{
                      bg: bookingCareTheme.colors.background.secondary,
                      borderColor: bookingCareTheme.colors.primary,
                    }}
                    onClick={() => navigate(-1)}
                  >
                    Hủy bỏ
                  </Button>
                </HStack>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default BookingFormPage; 
