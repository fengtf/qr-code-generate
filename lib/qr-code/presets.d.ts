declare const presets: ({
    name: string;
    config: {
        type: string;
        shape: string;
        width: number;
        height: number;
        margin: number;
        data: string;
        qrOptions: {
            typeNumber: number;
            errorCorrectionLevel: string;
        };
        dotsOptions: {
            type: string;
            color: string;
            gradient?: undefined;
        };
        cornersSquareOptions: {
            type: string;
            color: string;
        };
        cornersDotOptions: {
            type: string;
            color: string;
        };
        backgroundOptions: {
            round: number;
            color: string;
        };
    };
} | {
    name: string;
    config: {
        type: string;
        shape: string;
        width: number;
        height: number;
        margin: number;
        data: string;
        qrOptions: {
            typeNumber: number;
            errorCorrectionLevel: string;
        };
        dotsOptions: {
            type: string;
            gradient: {
                type: string;
                rotation: number;
                colorStops: {
                    offset: number;
                    color: string;
                }[];
            };
            color?: undefined;
        };
        cornersSquareOptions: {
            type: string;
            color: string;
        };
        cornersDotOptions: {
            type: string;
            color: string;
        };
        backgroundOptions: {
            round: number;
            color: string;
        };
    };
})[];
