// QR Code配置
let qrConfig = {
  type: 'svg',
  shape: 'square',
  width: 400,
  height: 400,
  margin: 20,
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
    round: 0,
    color: '#ffffff',
  },
};

// QRCodeStyling实例
let qrCodeInstance = null;

// 获取DOM元素
const elements = {
  // 预设
  presetsGrid: document.getElementById('presetsGrid'),

  // 基础配置
  qrData: document.getElementById('qrData'),
  qrWidth: document.getElementById('qrWidth'),
  qrHeight: document.getElementById('qrHeight'),
  qrMargin: document.getElementById('qrMargin'),
  qrType: document.getElementById('qrType'),
  qrShape: document.getElementById('qrShape'),

  // QR选项
  qrTypeNumber: document.getElementById('qrTypeNumber'),
  qrErrorLevel: document.getElementById('qrErrorLevel'),

  // 点样式
  dotsType: document.getElementById('dotsType'),
  dotsColor: document.getElementById('dotsColor'),
  dotsColorText: document.getElementById('dotsColorText'),
  useDotsGradient: document.getElementById('useDotsGradient'),
  dotsGradientConfig: document.getElementById('dotsGradientConfig'),
  dotsGradientType: document.getElementById('dotsGradientType'),
  dotsRotation: document.getElementById('dotsRotation'),
  dotsRotationValue: document.getElementById('dotsRotationValue'),
  dotsRotationGroup: document.getElementById('dotsRotationGroup'),
  dotsGradientStart: document.getElementById('dotsGradientStart'),
  dotsGradientEnd: document.getElementById('dotsGradientEnd'),

  // 角落方块
  cornersSquareType: document.getElementById('cornersSquareType'),
  cornersSquareColor: document.getElementById('cornersSquareColor'),
  cornersSquareColorText: document.getElementById('cornersSquareColorText'),

  // 角落点
  cornersDotType: document.getElementById('cornersDotType'),
  cornersDotColor: document.getElementById('cornersDotColor'),
  cornersDotColorText: document.getElementById('cornersDotColorText'),

  // 背景
  bgColor: document.getElementById('bgColor'),
  bgColorText: document.getElementById('bgColorText'),
  bgRound: document.getElementById('bgRound'),
  bgRoundValue: document.getElementById('bgRoundValue'),

  // 中心图片
  imageUrl: document.getElementById('imageUrl'),
  imageUpload: document.getElementById('imageUpload'),
  imageSize: document.getElementById('imageSize'),
  imageSizeValue: document.getElementById('imageSizeValue'),
  imageMargin: document.getElementById('imageMargin'),
  hideBackgroundDots: document.getElementById('hideBackgroundDots'),

  // 角落图片
  cornersImageUrl: document.getElementById('cornersImageUrl'),
  cornersImageUpload: document.getElementById('cornersImageUpload'),

  // 预览
  qrPreview: document.getElementById('qr-preview'),
  configCode: document.getElementById('configCode'),

  // 按钮
  refreshBtn: document.getElementById('refreshBtn'),
  downloadPngBtn: document.getElementById('downloadPngBtn'),
  downloadSvgBtn: document.getElementById('downloadSvgBtn'),
  copyConfigBtn: document.getElementById('copyConfigBtn'),
};

// 初始化表单
function initForm() {
  // 基础配置
  elements.qrData.value = qrConfig.data;
  elements.qrWidth.value = qrConfig.width;
  elements.qrHeight.value = qrConfig.height;
  elements.qrMargin.value = qrConfig.margin;
  elements.qrType.value = qrConfig.type;
  elements.qrShape.value = qrConfig.shape;

  // QR选项
  elements.qrTypeNumber.value = qrConfig.qrOptions.typeNumber;
  elements.qrErrorLevel.value = qrConfig.qrOptions.errorCorrectionLevel;

  // 点样式
  elements.dotsType.value = qrConfig.dotsOptions.type;
  elements.dotsColor.value = qrConfig.dotsOptions.color;
  elements.dotsColorText.value = qrConfig.dotsOptions.color;

  // 角落方块
  elements.cornersSquareType.value = qrConfig.cornersSquareOptions.type;
  elements.cornersSquareColor.value = qrConfig.cornersSquareOptions.color;
  elements.cornersSquareColorText.value = qrConfig.cornersSquareOptions.color;

  // 角落点
  elements.cornersDotType.value = qrConfig.cornersDotOptions.type;
  elements.cornersDotColor.value = qrConfig.cornersDotOptions.color;
  elements.cornersDotColorText.value = qrConfig.cornersDotOptions.color;

  // 背景
  elements.bgColor.value = qrConfig.backgroundOptions.color;
  elements.bgColorText.value = qrConfig.backgroundOptions.color;
  elements.bgRound.value = qrConfig.backgroundOptions.round;
  elements.bgRoundValue.textContent = qrConfig.backgroundOptions.round;

  // 中心图片
  elements.imageSize.value = qrConfig.imageOptions.imageSize;
  elements.imageSizeValue.textContent = qrConfig.imageOptions.imageSize;
  elements.imageMargin.value = qrConfig.imageOptions.margin;
  elements.hideBackgroundDots.checked =
    qrConfig.imageOptions.hideBackgroundDots;
}

// 生成预设按钮
function generatePresetButtons() {
  elements.presetsGrid.innerHTML = '';
  presets.forEach((preset) => {
    const button = document.createElement('button');
    button.className = 'preset-button';
    button.textContent = preset.name;
    button.onclick = () => applyPreset(preset);
    elements.presetsGrid.appendChild(button);
  });
}

// 应用预设
function applyPreset(preset) {
  // 深拷贝预设配置
  qrConfig = JSON.parse(JSON.stringify(preset.config));

  // 确保所有必需的字段都存在，清空可能不在预设中的配置
  qrConfig.image = qrConfig.image || '';
  qrConfig.cornersImage = qrConfig.cornersImage || '';
  qrConfig.imageOptions = qrConfig.imageOptions || {
    hideBackgroundDots: true,
    imageSize: 0.4,
    margin: 4,
    crossOrigin: 'anonymous',
  };

  // 更新表单
  initForm();

  // 检查是否使用了渐变
  if (qrConfig.dotsOptions.gradient) {
    elements.useDotsGradient.checked = true;
    elements.dotsGradientConfig.style.display = 'block';

    const gradient = qrConfig.dotsOptions.gradient;
    elements.dotsGradientType.value = gradient.type;
    elements.dotsRotation.value = gradient.rotation || 0;
    elements.dotsRotationValue.textContent = (gradient.rotation || 0) + '°';
    elements.dotsGradientStart.value =
      gradient.colorStops[0]?.color || '#000000';
    elements.dotsGradientEnd.value =
      gradient.colorStops[gradient.colorStops.length - 1]?.color || '#000000';

    // 显示/隐藏旋转角度
    elements.dotsRotationGroup.style.display =
      gradient.type === 'linear' ? 'block' : 'none';
  } else {
    elements.useDotsGradient.checked = false;
    elements.dotsGradientConfig.style.display = 'none';
  }

  // 更新图片URL
  elements.imageUrl.value = qrConfig.image || '';
  elements.cornersImageUrl.value = qrConfig.cornersImage || '';

  // 立即生成二维码
  generateQRCode();
}

// 生成二维码
function generateQRCode() {
  try {
    // 清空容器
    elements.qrPreview.innerHTML = '';

    // 为预览创建配置副本，限制预览尺寸
    const previewConfig = { ...qrConfig };
    const maxPreviewSize = 400;

    // 如果配置的尺寸超过最大预览尺寸，按比例缩小
    if (qrConfig.width > maxPreviewSize || qrConfig.height > maxPreviewSize) {
      const scale = Math.min(
        maxPreviewSize / qrConfig.width,
        maxPreviewSize / qrConfig.height
      );
      previewConfig.width = Math.round(qrConfig.width * scale);
      previewConfig.height = Math.round(qrConfig.height * scale);
    }

    // 创建新实例
    if (typeof QRCodeStyling !== 'undefined') {
      qrCodeInstance = new QRCodeStyling(previewConfig);
      qrCodeInstance.append(elements.qrPreview);

      // 确保预览尺寸适应容器
      setTimeout(() => {
        const canvas = elements.qrPreview.querySelector('canvas');
        const svg = elements.qrPreview.querySelector('svg');
        const element = canvas || svg;
        if (element) {
          element.style.maxWidth = '100%';
          element.style.maxHeight = '100%';
          element.style.width = 'auto';
          element.style.height = 'auto';
        }
      }, 0);
    } else {
      console.error('QRCodeStyling 库未加载');
      elements.qrPreview.innerHTML =
        '<p style="color: red;">QRCodeStyling 库未加载，请检查库文件路径</p>';
    }

    // 更新配置代码
    updateConfigCode();
  } catch (error) {
    console.error('生成二维码失败:', error);
    elements.qrPreview.innerHTML =
      '<p style="color: red;">生成二维码失败: ' + error.message + '</p>';
  }
}

// 更新配置代码
function updateConfigCode() {
  elements.configCode.textContent = JSON.stringify(qrConfig, null, 2);
}

// 刷新二维码
function refreshQRCode() {
  setTimeout(() => {
    generateQRCode();
  }, 100);
}

// 下载二维码（使用原始配置的完整尺寸）
function downloadQRCode(extension) {
  try {
    if (typeof QRCodeStyling !== 'undefined') {
      // 使用原始配置创建完整尺寸的二维码用于下载
      const downloadInstance = new QRCodeStyling(qrConfig);
      downloadInstance.download({
        name: 'qrcode',
        extension: extension,
      });
    } else {
      alert('QRCodeStyling 库未加载');
    }
  } catch (error) {
    console.error('下载失败:', error);
    alert('下载失败: ' + error.message);
  }
}

// 复制配置
async function copyConfig() {
  try {
    await navigator.clipboard.writeText(elements.configCode.textContent);
    alert('配置已复制到剪贴板！');
  } catch (err) {
    console.error('复制失败:', err);
    alert('复制失败，请手动复制');
  }
}

// 处理图片上传
function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      qrConfig.image = e.target.result;
      elements.imageUrl.value = e.target.result;
      generateQRCode();
    };
    reader.readAsDataURL(file);
  }
}

// 处理角落图片上传
function handleCornerImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      qrConfig.cornersImage = e.target.result;
      elements.cornersImageUrl.value = e.target.result;
      generateQRCode();
    };
    reader.readAsDataURL(file);
  }
}

// 同步颜色选择器和文本输入
function syncColorInputs(colorPicker, colorText) {
  colorPicker.addEventListener('input', (e) => {
    colorText.value = e.target.value;
  });

  colorText.addEventListener('input', (e) => {
    if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
      colorPicker.value = e.target.value;
    }
  });
}

// 绑定事件监听器
function bindEventListeners() {
  // 基础配置
  elements.qrData.addEventListener('input', (e) => {
    qrConfig.data = e.target.value;
    generateQRCode();
  });

  elements.qrWidth.addEventListener('input', (e) => {
    qrConfig.width = parseInt(e.target.value);
    generateQRCode();
  });

  elements.qrHeight.addEventListener('input', (e) => {
    qrConfig.height = parseInt(e.target.value);
    generateQRCode();
  });

  elements.qrMargin.addEventListener('input', (e) => {
    qrConfig.margin = parseInt(e.target.value);
    generateQRCode();
  });

  elements.qrType.addEventListener('change', (e) => {
    qrConfig.type = e.target.value;
    generateQRCode();
  });

  elements.qrShape.addEventListener('change', (e) => {
    qrConfig.shape = e.target.value;
    generateQRCode();
  });

  // QR选项
  elements.qrTypeNumber.addEventListener('input', (e) => {
    qrConfig.qrOptions.typeNumber = parseInt(e.target.value);
    generateQRCode();
  });

  elements.qrErrorLevel.addEventListener('change', (e) => {
    qrConfig.qrOptions.errorCorrectionLevel = e.target.value;
    generateQRCode();
  });

  // 点样式
  elements.dotsType.addEventListener('change', (e) => {
    qrConfig.dotsOptions.type = e.target.value;
    generateQRCode();
  });

  syncColorInputs(elements.dotsColor, elements.dotsColorText);
  elements.dotsColor.addEventListener('input', (e) => {
    if (!elements.useDotsGradient.checked) {
      qrConfig.dotsOptions.color = e.target.value;
      generateQRCode();
    }
  });

  elements.dotsColorText.addEventListener('blur', (e) => {
    if (
      !elements.useDotsGradient.checked &&
      /^#[0-9A-F]{6}$/i.test(e.target.value)
    ) {
      qrConfig.dotsOptions.color = e.target.value;
      generateQRCode();
    }
  });

  // 渐变配置
  elements.useDotsGradient.addEventListener('change', (e) => {
    if (e.target.checked) {
      elements.dotsGradientConfig.style.display = 'block';
      qrConfig.dotsOptions.gradient = {
        type: elements.dotsGradientType.value,
        rotation: parseInt(elements.dotsRotation.value),
        colorStops: [
          { offset: 0, color: elements.dotsGradientStart.value },
          { offset: 1, color: elements.dotsGradientEnd.value },
        ],
      };
      delete qrConfig.dotsOptions.color;
      elements.dotsRotationGroup.style.display =
        elements.dotsGradientType.value === 'linear' ? 'block' : 'none';
    } else {
      elements.dotsGradientConfig.style.display = 'none';
      delete qrConfig.dotsOptions.gradient;
      qrConfig.dotsOptions.color = elements.dotsColor.value;
    }
    generateQRCode();
  });

  elements.dotsGradientType.addEventListener('change', (e) => {
    if (qrConfig.dotsOptions.gradient) {
      qrConfig.dotsOptions.gradient.type = e.target.value;
      elements.dotsRotationGroup.style.display =
        e.target.value === 'linear' ? 'block' : 'none';
      generateQRCode();
    }
  });

  elements.dotsRotation.addEventListener('input', (e) => {
    elements.dotsRotationValue.textContent = e.target.value + '°';
    if (qrConfig.dotsOptions.gradient) {
      qrConfig.dotsOptions.gradient.rotation = parseInt(e.target.value);
      generateQRCode();
    }
  });

  elements.dotsGradientStart.addEventListener('input', (e) => {
    if (qrConfig.dotsOptions.gradient) {
      qrConfig.dotsOptions.gradient.colorStops[0].color = e.target.value;
      generateQRCode();
    }
  });

  elements.dotsGradientEnd.addEventListener('input', (e) => {
    if (qrConfig.dotsOptions.gradient) {
      qrConfig.dotsOptions.gradient.colorStops[1].color = e.target.value;
      generateQRCode();
    }
  });

  // 角落方块
  elements.cornersSquareType.addEventListener('change', (e) => {
    qrConfig.cornersSquareOptions.type = e.target.value;
    generateQRCode();
  });

  syncColorInputs(elements.cornersSquareColor, elements.cornersSquareColorText);
  elements.cornersSquareColor.addEventListener('input', (e) => {
    qrConfig.cornersSquareOptions.color = e.target.value;
    generateQRCode();
  });

  elements.cornersSquareColorText.addEventListener('blur', (e) => {
    if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
      qrConfig.cornersSquareOptions.color = e.target.value;
      generateQRCode();
    }
  });

  // 角落点
  elements.cornersDotType.addEventListener('change', (e) => {
    qrConfig.cornersDotOptions.type = e.target.value;
    generateQRCode();
  });

  syncColorInputs(elements.cornersDotColor, elements.cornersDotColorText);
  elements.cornersDotColor.addEventListener('input', (e) => {
    qrConfig.cornersDotOptions.color = e.target.value;
    generateQRCode();
  });

  elements.cornersDotColorText.addEventListener('blur', (e) => {
    if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
      qrConfig.cornersDotOptions.color = e.target.value;
      generateQRCode();
    }
  });

  // 背景
  syncColorInputs(elements.bgColor, elements.bgColorText);
  elements.bgColor.addEventListener('input', (e) => {
    qrConfig.backgroundOptions.color = e.target.value;
    generateQRCode();
  });

  elements.bgColorText.addEventListener('blur', (e) => {
    if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
      qrConfig.backgroundOptions.color = e.target.value;
      generateQRCode();
    }
  });

  elements.bgRound.addEventListener('input', (e) => {
    elements.bgRoundValue.textContent = e.target.value;
    qrConfig.backgroundOptions.round = parseFloat(e.target.value);
    generateQRCode();
  });

  // 中心图片
  elements.imageUrl.addEventListener('input', (e) => {
    qrConfig.image = e.target.value;
    generateQRCode();
  });

  elements.imageUpload.addEventListener('change', handleImageUpload);

  elements.imageSize.addEventListener('input', (e) => {
    elements.imageSizeValue.textContent = e.target.value;
    qrConfig.imageOptions.imageSize = parseFloat(e.target.value);
    generateQRCode();
  });

  elements.imageMargin.addEventListener('input', (e) => {
    qrConfig.imageOptions.margin = parseInt(e.target.value);
    generateQRCode();
  });

  elements.hideBackgroundDots.addEventListener('change', (e) => {
    qrConfig.imageOptions.hideBackgroundDots = e.target.checked;
    generateQRCode();
  });

  // 角落图片
  elements.cornersImageUrl.addEventListener('input', (e) => {
    qrConfig.cornersImage = e.target.value;
    generateQRCode();
  });

  elements.cornersImageUpload.addEventListener(
    'change',
    handleCornerImageUpload
  );

  // 按钮
  elements.refreshBtn.addEventListener('click', refreshQRCode);
  elements.downloadPngBtn.addEventListener('click', () =>
    downloadQRCode('png')
  );
  elements.downloadSvgBtn.addEventListener('click', () =>
    downloadQRCode('svg')
  );
  elements.copyConfigBtn.addEventListener('click', copyConfig);
}

// 初始化应用
function init() {
  generatePresetButtons();
  initForm();
  bindEventListeners();

  // 延迟生成二维码，确保库已加载
  setTimeout(() => {
    generateQRCode();
  }, 500);
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
