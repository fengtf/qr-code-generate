// 预设配置
const presets = [
  {
    name: '经典样式',
    config: {
      type: 'svg',
      shape: 'square',
      width: 600,
      height: 600,
      margin: 30,
      data: 'https://github.com',
      image: '',
      cornersImage: '',
      qrOptions: {
        typeNumber: 0,
        errorCorrectionLevel: 'Q',
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.4,
        margin: 4,
        crossOrigin: 'anonymous',
      },
      dotsOptions: {
        type: 'square',
        color: '#000000',
      },
      cornersSquareOptions: {
        type: 'square',
        color: '#000000',
      },
      cornersDotOptions: {
        type: 'square',
        color: '#000000',
      },
      backgroundOptions: {
        round: 0,
        color: '#ffffff',
      },
    },
  },
  {
    name: '圆润风格',
    config: {
      type: 'svg',
      shape: 'square',
      width: 600,
      height: 600,
      margin: 30,
      data: 'https://github.com',
      image: '',
      cornersImage: '',
      qrOptions: {
        typeNumber: 0,
        errorCorrectionLevel: 'Q',
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.4,
        margin: 4,
        crossOrigin: 'anonymous',
      },
      dotsOptions: {
        type: 'rounded',
        color: '#5856d6',
      },
      cornersSquareOptions: {
        type: 'extra-rounded',
        color: '#5856d6',
      },
      cornersDotOptions: {
        type: 'dot',
        color: '#5856d6',
      },
      backgroundOptions: {
        round: 0.3,
        color: '#ffffff',
      },
    },
  },
  {
    name: '渐变彩色',
    config: {
      type: 'svg',
      shape: 'square',
      width: 600,
      height: 600,
      margin: 30,
      data: 'https://github.com',
      image: '',
      cornersImage: '',
      qrOptions: {
        typeNumber: 0,
        errorCorrectionLevel: 'Q',
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.4,
        margin: 4,
        crossOrigin: 'anonymous',
      },
      dotsOptions: {
        type: 'rounded',
        gradient: {
          type: 'linear',
          rotation: 45,
          colorStops: [
            { offset: 0, color: '#667eea' },
            { offset: 1, color: '#764ba2' },
          ],
        },
      },
      cornersSquareOptions: {
        type: 'extra-rounded',
        color: '#667eea',
      },
      cornersDotOptions: {
        type: 'dot',
        color: '#764ba2',
      },
      backgroundOptions: {
        round: 0,
        color: '#ffffff',
      },
    },
  },
  {
    name: '优雅样式',
    config: {
      type: 'svg',
      shape: 'square',
      width: 600,
      height: 600,
      margin: 30,
      data: 'https://github.com',
      image: '',
      cornersImage: '',
      qrOptions: {
        typeNumber: 0,
        errorCorrectionLevel: 'Q',
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.4,
        margin: 4,
        crossOrigin: 'anonymous',
      },
      dotsOptions: {
        type: 'classy-rounded',
        color: '#000000',
      },
      cornersSquareOptions: {
        type: 'extra-rounded',
        color: '#000000',
      },
      cornersDotOptions: {
        type: 'dot',
        color: '#000000',
      },
      backgroundOptions: {
        round: 0.5,
        color: '#ffffff',
      },
    },
  },
  {
    name: '星形创意',
    config: {
      type: 'svg',
      shape: 'square',
      width: 600,
      height: 600,
      margin: 30,
      data: 'https://github.com',
      image: '',
      cornersImage: '',
      qrOptions: {
        typeNumber: 0,
        errorCorrectionLevel: 'Q',
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.4,
        margin: 4,
        crossOrigin: 'anonymous',
      },
      dotsOptions: {
        type: 'star',
        color: '#ff6b6b',
      },
      cornersSquareOptions: {
        type: 'extra-rounded',
        color: '#4ecdc4',
      },
      cornersDotOptions: {
        type: 'star',
        color: '#ffe66d',
      },
      backgroundOptions: {
        round: 0,
        color: '#ffffff',
      },
    },
  },
  {
    name: '现代简约',
    config: {
      type: 'svg',
      shape: 'circle',
      width: 600,
      height: 600,
      margin: 30,
      data: 'https://github.com',
      image: '',
      cornersImage: '',
      qrOptions: {
        typeNumber: 0,
        errorCorrectionLevel: 'Q',
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.4,
        margin: 4,
        crossOrigin: 'anonymous',
      },
      dotsOptions: {
        type: 'extra-rounded',
        color: '#2d3436',
      },
      cornersSquareOptions: {
        type: 'extra-rounded',
        color: '#0984e3',
      },
      cornersDotOptions: {
        type: 'dot',
        color: '#0984e3',
      },
      backgroundOptions: {
        round: 0.5,
        color: '#dfe6e9',
      },
    },
  },
];
