declare function initForm(): void;
declare function generatePresetButtons(): void;
declare function applyPreset(preset: any): void;
declare function generateQRCode(): void;
declare function updateConfigCode(): void;
declare function refreshQRCode(): void;
declare function downloadQRCode(extension: any): void;
declare function copyConfig(): Promise<void>;
declare function handleImageUpload(event: any): void;
declare function handleCornerImageUpload(event: any): void;
declare function syncColorInputs(colorPicker: any, colorText: any): void;
declare function bindEventListeners(): void;
declare function init(): void;
declare namespace qrConfig {
  let type: string;
  let shape: string;
  let width: number;
  let height: number;
  let margin: number;
  let data: string;
  let image: string;
  let cornersImage: string;
  let borderImage: string;
  namespace qrOptions {
    let typeNumber: number;
    let errorCorrectionLevel: string;
  }
  namespace imageOptions {
    export let hideBackgroundDots: boolean;
    export let imageSize: number;
    let margin_1: number;
    export { margin_1 as margin };
    export let crossOrigin: string;
  }
  namespace dotsOptions {
    let type_1: string;
    export { type_1 as type };
    export let color: string;
  }
  namespace cornersSquareOptions {
    let type_2: string;
    export { type_2 as type };
    let color_1: string;
    export { color_1 as color };
  }
  namespace cornersDotOptions {
    let type_3: string;
    export { type_3 as type };
    let color_2: string;
    export { color_2 as color };
  }
  namespace backgroundOptions {
    export let round: number;
    let color_3: string;
    export { color_3 as color };
  }
}
declare let qrCodeInstance: any;
declare namespace elements {
  export let presetsGrid: HTMLElement | null;
  export let qrData: HTMLElement | null;
  export let qrWidth: HTMLElement | null;
  export let qrHeight: HTMLElement | null;
  export let qrMargin: HTMLElement | null;
  export let qrType: HTMLElement | null;
  export let qrShape: HTMLElement | null;
  export let qrTypeNumber: HTMLElement | null;
  export let qrErrorLevel: HTMLElement | null;
  export let dotsType: HTMLElement | null;
  export let dotsColor: HTMLElement | null;
  export let dotsColorText: HTMLElement | null;
  export let useDotsGradient: HTMLElement | null;
  export let dotsGradientConfig: HTMLElement | null;
  export let dotsGradientType: HTMLElement | null;
  export let dotsRotation: HTMLElement | null;
  export let dotsRotationValue: HTMLElement | null;
  export let dotsRotationGroup: HTMLElement | null;
  export let dotsGradientStart: HTMLElement | null;
  export let dotsGradientEnd: HTMLElement | null;
  export let cornersSquareType: HTMLElement | null;
  export let cornersSquareColor: HTMLElement | null;
  export let cornersSquareColorText: HTMLElement | null;
  export let cornersDotType: HTMLElement | null;
  export let cornersDotColor: HTMLElement | null;
  export let cornersDotColorText: HTMLElement | null;
  export let bgColor: HTMLElement | null;
  export let bgColorText: HTMLElement | null;
  export let bgRound: HTMLElement | null;
  export let bgRoundValue: HTMLElement | null;
  export let imageUrl: HTMLElement | null;
  export let imageUpload: HTMLElement | null;
  let imageSize_1: HTMLElement | null;
  export { imageSize_1 as imageSize };
  export let imageSizeValue: HTMLElement | null;
  export let imageMargin: HTMLElement | null;
  let hideBackgroundDots_1: HTMLElement | null;
  export { hideBackgroundDots_1 as hideBackgroundDots };
  export let cornersImageUrl: HTMLElement | null;
  export let cornersImageUpload: HTMLElement | null;
  export let qrPreview: HTMLElement | null;
  export let configCode: HTMLElement | null;
  export let refreshBtn: HTMLElement | null;
  export let downloadPngBtn: HTMLElement | null;
  export let downloadSvgBtn: HTMLElement | null;
  export let copyConfigBtn: HTMLElement | null;
}
