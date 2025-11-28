import { DrawArgs, Window } from "../../types";
export declare const availableCornerSquareTypes: import("../../types").CornerSquareType[];
export default class QRBorderImage {
    _element?: SVGImageElement;
    _imageUri?: string;
    _window: Window;
    constructor({ imageUri, window }: {
        imageUri: string;
        window: Window;
    });
    draw(x: number, y: number, size: number, rotation: number): void;
    _drawCustomSvg({ x, y, size }: DrawArgs): void;
}
