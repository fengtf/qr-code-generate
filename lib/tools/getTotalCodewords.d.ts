import { TypeNumber, ErrorCorrectionLevel } from "../types";
/**
 * 获取 QR 码版本对应的总码字数（Total Number of Codewords）
 * @param typeNumber - 版本号 (1-40)
 * @param errorCorrectionLevel - 纠错级别 ('L', 'M', 'Q', 'H')
 * @returns 总码字数
 */
export default function getTotalCodewords(typeNumber: TypeNumber, errorCorrectionLevel: ErrorCorrectionLevel): number;
