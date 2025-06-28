// BookingCare Theme - dựa trên phân tích frontend thực tế
export const bookingCareTheme = {
  colors: {
    // Màu chính từ BookingCare thực tế
    primary: '#45c3d2',        // Màu chính (teal/cyan)
    primaryLight: '#B3E5FC',   // Màu chính nhạt
    primaryDark: '#29B6CC',    // Màu chính đậm
    
    // Màu CTA và accent
    cta: '#FFC419',           // Màu call-to-action (vàng cam)
    ctaHover: '#FFB800',      // CTA hover state
    
    // Background colors
    background: {
      primary: '#fff',         // Nền trắng chính
      secondary: '#f9f9f9',    // Nền xám nhạt
      warm: '#FCFAF6',         // Nền ấm
      card: '#fff',            // Nền card
      input: '#fff',           // Nền input
    },
    
    // Text colors
    text: {
      primary: '#333',         // Text chính
      secondary: '#666',       // Text phụ  
      muted: '#999',          // Text mờ
      white: '#fff',          // Text trắng
      link: '#45c3d2',        // Link color
    },
    
    // Status colors
    status: {
      success: '#28a745',     // Thành công
      error: '#dc3545',       // Lỗi
      warning: '#ffc107',     // Cảnh báo
      info: '#17a2b8',        // Thông tin
    },
    
    // Border colors
    border: {
      light: '#eee',          // Border nhạt
      medium: '#ddd',         // Border trung bình
      focus: '#45c3d2',       // Border focus
      input: '#ccc',          // Border input
    },
    
    // Shadow colors
    shadow: {
      sm: '0 1px 3px rgba(0, 0, 0, 0.12)',
      md: '0 4px 6px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
      card: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }
  },
  
  // Typography system
  typography: {
    fontFamily: {
      primary: "'Montserrat', sans-serif",
      secondary: "'Roboto', sans-serif",
      mono: "'Fira Code', monospace",
    },
    
    fontSize: {
      xs: '12px',
      sm: '13px', 
      base: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
    },
    
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.65,
    }
  },
  
  // Spacing system (8px grid)
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },
  
  // Border radius
  borderRadius: {
    none: '0',
    sm: '3px',
    md: '4px',
    lg: '8px',
    xl: '12px',
    full: '50%',
  },
  
  // Breakpoints
  breakpoints: {
    sm: '576px',
    md: '768px', 
    lg: '992px',
    xl: '1200px',
    '2xl': '1400px',
  },
  
  // Component-specific styles
  components: {
    // Header styles
    header: {
      height: '60px',
      background: '#fff',
      borderBottom: '1px solid #eee',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    
    // Card styles
    card: {
      background: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      border: '1px solid #eee',
      padding: '16px',
    },
    
    // Button styles
    button: {
      primary: {
        background: '#45c3d2',
        color: '#fff',
        border: '1px solid #45c3d2',
        borderRadius: '4px',
        padding: '8px 16px',
        fontWeight: 600,
        fontSize: '14px',
        transition: 'all 0.3s ease',
        hover: {
          background: '#29B6CC',
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 8px rgba(69, 195, 210, 0.3)',
        }
      },
      
      cta: {
        background: '#FFC419',
        color: '#333',
        border: '1px solid #FFC419',
        borderRadius: '4px',
        padding: '12px 24px',
        fontWeight: 700,
        fontSize: '16px',
        transition: 'all 0.3s ease',
        hover: {
          background: '#FFB800',
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 12px rgba(255, 196, 25, 0.3)',
        }
      },
      
      outline: {
        background: 'transparent',
        color: '#45c3d2',
        border: '1px solid #45c3d2',
        borderRadius: '4px',
        padding: '8px 16px',
        fontWeight: 500,
        fontSize: '14px',
        transition: 'all 0.3s ease',
        hover: {
          background: '#45c3d2',
          color: '#fff',
        }
      }
    },
    
    // Input styles
    input: {
      background: '#fff',
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '10px 12px',
      fontSize: '14px',
      fontFamily: "'Montserrat', sans-serif",
      transition: 'border-color 0.3s ease',
      focus: {
        borderColor: '#45c3d2',
        boxShadow: '0 0 0 2px rgba(69, 195, 210, 0.2)',
        outline: 'none',
      }
    },
    
    // Form group styles  
    formGroup: {
      marginBottom: '16px',
      label: {
        display: 'block',
        marginBottom: '4px',
        fontSize: '14px',
        fontWeight: 600,
        color: '#333',
      }
    }
  },
  
  // Animation & transition
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms', 
      slow: '500ms',
    },
    
    easing: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
    }
  }
};

// Export individual parts for easy use
export const colors = bookingCareTheme.colors;
export const typography = bookingCareTheme.typography;
export const spacing = bookingCareTheme.spacing;
export const components = bookingCareTheme.components;

export default bookingCareTheme; 