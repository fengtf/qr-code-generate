import { DrawArgs, Window } from "../../types";
export declare const availableCornerSquareTypes: import("../../types").CornerSquareType[];
export default class QRCornerImage {
    _elements?: SVGImageElement[];
    _imageUri?: string;
    _window: Window;
    constructor({ imageUri, window }: {
        imageUri: string;
        window: Window;
    });
    draw(x: number, y: number, size: number, rotation: number): void;
    _drawCustomSvg({ x, y, size, rotation }: DrawArgs): void;
}
