import React from 'react';
import {
  Box,
  Container,
  VStack,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import DoctorAppointmentCard from '../components/DoctorAppointmentCard';
import { bookingCareColors } from '../theme';

// Mock data for orthopedic doctors
const orthopedicDoctors = [
  {
    id: 'bs-nguyen-van-duc',
    name: 'Nguyễn Văn Đức',
    title: 'PGS.TS.BS',
    specialty: 'Cơ Xương Khớp',
    experience: 'Hơn 25 năm kinh nghiệm điều trị các bệnh lý cột sống, thay khớp',
    rating: 4.8,
    reviewCount: 124,
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
    education: 'Tiến sĩ Y học - Đại học Y Hà Nội, Chuyên khoa II Chấn thương Chỉnh hình',
    clinic: {
      name: 'Phòng khám Spinetech Clinic',
      address: 'Tòa nhà GP, 257 Giải Phóng, Phương Mai, Đống Đa, Hà Nội',
      price: '500.000đ',
      phone: '024 3974 3434'
    },
    morningSlots: [
      { time: '08:00 - 08:30', available: true },
      { time: '08:30 - 09:00', available: true },
      { time: '09:00 - 09:30', available: false },
      { time: '09:30 - 10:00', available: true },
      { time: '10:00 - 10:30', available: true },
      { time: '10:30 - 11:00', available: false },
    ],
    afternoonSlots: [
      { time: '14:00 - 14:30', available: true },
      { time: '14:30 - 15:00', available: true },
      { time: '15:00 - 15:30', available: true },
      { time: '15:30 - 16:00', available: false },
      { time: '16:00 - 16:30', available: true },
      { time: '16:30 - 17:00', available: true },
    ]
  },
  {
    id: 'bs-le-thi-hong',
    name: 'Lê Thị Hồng',
    title: 'TS.BS',
    specialty: 'Cơ Xương Khớp',
    experience: 'Hơn 18 năm kinh nghiệm điều trị viêm khớp, thoái hóa khớp',
    rating: 4.9,
    reviewCount: 98,
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
    education: 'Tiến sĩ Y học - Đại học Y Thành phố Hồ Chí Minh, Chuyên khoa II Cơ Xương Khớp',
    clinic: {
      name: 'Bệnh viện Đại học Y Dược TP.HCM',
      address: '215 Hồng Bàng, Phường 11, Quận 5, TP.HCM',
      price: '450.000đ',
      phone: '028 3855 4269'
    },
    morningSlots: [
      { time: '08:00 - 08:30', available: false },
      { time: '08:30 - 09:00', available: true },
      { time: '09:00 - 09:30', available: true },
      { time: '09:30 - 10:00', available: true },
      { time: '10:00 - 10:30', available: false },
      { time: '10:30 - 11:00', available: true },
    ],
    afternoonSlots: [
      { time: '14:00 - 14:30', available: true },
      { time: '14:30 - 15:00', available: false },
      { time: '15:00 - 15:30', available: true },
      { time: '15:30 - 16:00', available: true },
      { time: '16:00 - 16:30', available: true },
      { time: '16:30 - 17:00', available: false },
    ]
  },
  {
    id: 'bs-tran-minh-quan',
    name: 'Trần Minh Quân',
    title: 'ThS.BS',
    specialty: 'Cơ Xương Khớp',
    experience: 'Hơn 15 năm kinh nghiệm phẫu thuật nội soi khớp, chấn thương thể thao',
    rating: 4.7,
    reviewCount: 156,
    avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face',
    education: 'Thạc sĩ Y học - Đại học Y Hà Nội, Chuyên khoa I Chấn thương Chỉnh hình',
    clinic: {
      name: 'Phòng khám OrthoViet',
      address: '164 Đường Láng, Láng Thượng, Đống Đa, Hà Nội',
      price: '400.000đ',
      phone: '024 3514 8888'
    },
    morningSlots: [
      { time: '08:00 - 08:30', available: true },
      { time: '08:30 - 09:00', available: true },
      { time: '09:00 - 09:30', available: true },
      { time: '09:30 - 10:00', available: false },
      { time: '10:00 - 10:30', available: true },
      { time: '10:30 - 11:00', available: true },
    ],
    afternoonSlots: [
      { time: '14:00 - 14:30', available: false },
      { time: '14:30 - 15:00', available: true },
      { time: '15:00 - 15:30', available: true },
      { time: '15:30 - 16:00', available: true },
      { time: '16:00 - 16:30', available: false },
      { time: '16:30 - 17:00', available: true },
    ]
  },
  {
    id: 'bs-pham-thi-lan',
    name: 'Phạm Thị Lan',
    title: 'BS.CKI',
    specialty: 'Cơ Xương Khớp',
    experience: 'Hơn 12 năm kinh nghiệm điều trị loãng xương, đau lưng mạn tính',
    rating: 4.6,
    reviewCount: 87,
    avatar: 'https://images.unsplash.com/photo-1594824388853-d50955b3b6d2?w=150&h=150&fit=crop&crop=face',
    education: 'Bác sĩ Chuyên khoa I - Đại học Y Huế, Chuyên ngành Cơ Xương Khớp',
    clinic: {
      name: 'Phòng khám Xương Khớp Healthy',
      address: '128 Nguyễn Văn Cừ, Long Biên, Hà Nội',
      price: '350.000đ',
      phone: '024 3872 9999'
    },
    morningSlots: [
      { time: '08:00 - 08:30', available: true },
      { time: '08:30 - 09:00', available: false },
      { time: '09:00 - 09:30', available: true },
      { time: '09:30 - 10:00', available: true },
      { time: '10:00 - 10:30', available: true },
      { time: '10:30 - 11:00', available: false },
    ],
    afternoonSlots: [
      { time: '14:00 - 14:30', available: true },
      { time: '14:30 - 15:00', available: true },
      { time: '15:00 - 15:30', available: false },
      { time: '15:30 - 16:00', available: true },
      { time: '16:00 - 16:30', available: true },
      { time: '16:30 - 17:00', available: true },
    ]
  },
  {
    id: 'bs-vo-thanh-son',
    name: 'Võ Thành Sơn',
    title: 'PGS.TS.BS',
    specialty: 'Cơ Xương Khớp',
    experience: 'Hơn 30 năm kinh nghiệm phẫu thuật cột sống, chấn thương phức tạp',
    rating: 4.9,
    reviewCount: 203,
    avatar: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=150&h=150&fit=crop&crop=face',
    education: 'Tiến sĩ Y học - Đại học Y Dược TP.HCM, Phó Giáo sư ngành Chấn thương Chỉnh hình',
    clinic: {
      name: 'Bệnh viện Chấn thương Chỉnh hình TP.HCM',
      address: '929 Trần Hưng Đạo, Phường 1, Quận 5, TP.HCM',
      price: '600.000đ',
      phone: '028 3957 1234'
    },
    morningSlots: [
      { time: '08:00 - 08:30', available: false },
      { time: '08:30 - 09:00', available: false },
      { time: '09:00 - 09:30', available: true },
      { time: '09:30 - 10:00', available: true },
      { time: '10:00 - 10:30', available: true },
      { time: '10:30 - 11:00', available: false },
    ],
    afternoonSlots: [
      { time: '14:00 - 14:30', available: false },
      { time: '14:30 - 15:00', available: true },
      { time: '15:00 - 15:30', available: true },
      { time: '15:30 - 16:00', available: false },
      { time: '16:00 - 16:30', available: false },
      { time: '16:30 - 17:00', available: true },
    ]
  },
  {
    id: 'bs-nguyen-thi-mai',
    name: 'Nguyễn Thị Mai',
    title: 'ThS.BS',
    specialty: 'Cơ Xương Khớp',
    experience: 'Hơn 14 năm kinh nghiệm điều trị bệnh lý khớp gối, khớp vai',
    rating: 4.5,
    reviewCount: 76,
    avatar: 'https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=150&h=150&fit=crop&crop=face',
    education: 'Thạc sĩ Y học - Đại học Y Dược Hải Phòng, Chuyên khoa I Cơ Xương Khớp',
    clinic: {
      name: 'Phòng khám Đa khoa Medic Center',
      address: '45 Phạm Ngọc Thạch, Trung Liệt, Đống Đa, Hà Nội',
      price: '380.000đ',
      phone: '024 3514 7777'
    },
    morningSlots: [
      { time: '08:00 - 08:30', available: true },
      { time: '08:30 - 09:00', available: true },
      { time: '09:00 - 09:30', available: false },
      { time: '09:30 - 10:00', available: false },
      { time: '10:00 - 10:30', available: true },
      { time: '10:30 - 11:00', available: true },
    ],
    afternoonSlots: [
      { time: '14:00 - 14:30', available: true },
      { time: '14:30 - 15:00', available: false },
      { time: '15:00 - 15:30', available: true },
      { time: '15:30 - 16:00', available: true },
      { time: '16:00 - 16:30', available: true },
      { time: '16:30 - 17:00', available: false },
    ]
  },
  {
    id: 'bs-hoang-van-nam',
    name: 'Hoàng Văn Nam',
    title: 'BS.CKI',
    specialty: 'Cơ Xương Khớp',
    experience: 'Hơn 10 năm kinh nghiệm điều trị chấn thương thể thao, phục hồi chức năng',
    rating: 4.4,
    reviewCount: 54,
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&h=150&fit=crop&crop=face',
    education: 'Bác sĩ Chuyên khoa I - Đại học Y Thái Bình, Chuyên ngành Chấn thương Chỉnh hình',
    clinic: {
      name: 'Phòng khám Sports Medicine',
      address: '78 Nguyễn Trãi, Thanh Xuân, Hà Nội',
      price: '320.000đ',
      phone: '024 3557 8888'
    },
    morningSlots: [
      { time: '08:00 - 08:30', available: false },
      { time: '08:30 - 09:00', available: true },
      { time: '09:00 - 09:30', available: true },
      { time: '09:30 - 10:00', available: true },
      { time: '10:00 - 10:30', available: false },
      { time: '10:30 - 11:00', available: true },
    ],
    afternoonSlots: [
      { time: '14:00 - 14:30', available: true },
      { time: '14:30 - 15:00', available: true },
      { time: '15:00 - 15:30', available: true },
      { time: '15:30 - 16:00', available: false },
      { time: '16:00 - 16:30', available: true },
      { time: '16:30 - 17:00', available: true },
    ]
  },
  {
    id: 'bs-dang-thi-hoa',
    name: 'Đặng Thị Hoa',
    title: 'TS.BS',
    specialty: 'Cơ Xương Khớp',
    experience: 'Hơn 22 năm kinh nghiệm điều trị viêm cột sống dính khớp, lupus ban đỏ',
    rating: 4.8,
    reviewCount: 132,
    avatar: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=150&h=150&fit=crop&crop=face',
    education: 'Tiến sĩ Y học - Đại học Y Hà Nội, Chuyên khoa II Cơ Xương Khớp',
    clinic: {
      name: 'Bệnh viện Bạch Mai',
      address: '78 Giải Phóng, Phương Mai, Đống Đa, Hà Nội',
      price: '200.000đ',
      phone: '024 3869 3731'
    },
    morningSlots: [
      { time: '08:00 - 08:30', available: true },
      { time: '08:30 - 09:00', available: false },
      { time: '09:00 - 09:30', available: false },
      { time: '09:30 - 10:00', available: true },
      { time: '10:00 - 10:30', available: true },
      { time: '10:30 - 11:00', available: true },
    ],
    afternoonSlots: [
      { time: '14:00 - 14:30', available: false },
      { time: '14:30 - 15:00', available: false },
      { time: '15:00 - 15:30', available: true },
      { time: '15:30 - 16:00', available: true },
      { time: '16:00 - 16:30', available: false },
      { time: '16:30 - 17:00', available: true },
    ]
  },
  {
    id: 'bs-le-minh-duc',
    name: 'Lê Minh Đức',
    title: 'ThS.BS',
    specialty: 'Cơ Xương Khớp',
    experience: 'Hơn 16 năm kinh nghiệm điều trị gout, viêm khớp dạng thấp',
    rating: 4.6,
    reviewCount: 95,
    avatar: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=150&h=150&fit=crop&crop=face',
    education: 'Thạc sĩ Y học - Đại học Y Dược TP.HCM, Chuyên khoa I Cơ Xương Khớp',
    clinic: {
      name: 'Phòng khám Rheumatology Center',
      address: '234 Pasteur, Phường 6, Quận 3, TP.HCM',
      price: '420.000đ',
      phone: '028 3829 5555'
    },
    morningSlots: [
      { time: '08:00 - 08:30', available: true },
      { time: '08:30 - 09:00', available: true },
      { time: '09:00 - 09:30', available: true },
      { time: '09:30 - 10:00', available: false },
      { time: '10:00 - 10:30', available: false },
      { time: '10:30 - 11:00', available: true },
    ],
    afternoonSlots: [
      { time: '14:00 - 14:30', available: true },
      { time: '14:30 - 15:00', available: true },
      { time: '15:00 - 15:30', available: false },
      { time: '15:30 - 16:00', available: true },
      { time: '16:00 - 16:30', available: true },
      { time: '16:30 - 17:00', available: false },
    ]
  },
  {
    id: 'bs-tran-thi-yen',
    name: 'Trần Thị Yến',
    title: 'BS.CKI',
    specialty: 'Cơ Xương Khớp',
    experience: 'Hơn 11 năm kinh nghiệm điều trị đau cột sống, thoát vị đĩa đệm',
    rating: 4.3,
    reviewCount: 68,
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
    education: 'Bác sĩ Chuyên khoa I - Đại học Y Cần Thơ, Chuyên ngành Cơ Xương Khớp',
    clinic: {
      name: 'Phòng khám Spine Care',
      address: '156 Hai Bà Trưng, Bến Nghé, Quận 1, TP.HCM',
      price: '360.000đ',
      phone: '028 3822 4444'
    },
    morningSlots: [
      { time: '08:00 - 08:30', available: false },
      { time: '08:30 - 09:00', available: true },
      { time: '09:00 - 09:30', available: true },
      { time: '09:30 - 10:00', available: true },
      { time: '10:00 - 10:30', available: true },
      { time: '10:30 - 11:00', available: false },
    ],
    afternoonSlots: [
      { time: '14:00 - 14:30', available: true },
      { time: '14:30 - 15:00', available: false },
      { time: '15:00 - 15:30', available: false },
      { time: '15:30 - 16:00', available: true },
      { time: '16:00 - 16:30', available: true },
      { time: '16:30 - 17:00', available: true },
    ]
  },
];

const SpecialtyDoctorsPage: React.FC = () => {
  const { specialtyId } = useParams<{ specialtyId: string }>();

  return (
    <Box bg="gray.50" minH="100vh" py={6}>
      <Container maxW="1200px">
        {/* Breadcrumb */}
        <Box mb={6}>
          <Text fontSize="sm" color={bookingCareColors.text.secondary}>
            <RouterLink to="/" style={{ color: bookingCareColors.primary }}>
              Trang chủ
            </RouterLink>
            {' > '}
            <RouterLink to="/chuyen-khoa" style={{ color: bookingCareColors.primary }}>
              Chuyên khoa
            </RouterLink>
            {' > '}
            <span>Cơ Xương Khớp</span>
          </Text>
        </Box>

        {/* Page Header */}
        <VStack gap={4} mb={8} align="start">
          <Text
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="bold"
            color={bookingCareColors.text.primary}
          >
            Bác sĩ Chuyên khoa Cơ Xương Khớp
          </Text>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color={bookingCareColors.text.secondary}
          >
            Đặt lịch khám với các bác sĩ chuyên khoa Cơ Xương Khớp uy tín, kinh nghiệm
          </Text>
          <Text
            fontSize="sm"
            color={bookingCareColors.text.secondary}
            bg="white"
            px={4}
            py={2}
            borderRadius="lg"
            border="1px"
            borderColor="gray.200"
          >
            Tìm thấy {orthopedicDoctors.length} bác sĩ
          </Text>
        </VStack>

        {/* Doctors List */}
        <VStack gap={8} align="stretch">
          {orthopedicDoctors.map((doctor) => (
            <DoctorAppointmentCard key={doctor.id} doctor={doctor} />
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default SpecialtyDoctorsPage; 