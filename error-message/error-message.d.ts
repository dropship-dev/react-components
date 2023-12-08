export declare const em_required: ({ field, message, }: {
    field?: string | undefined;
    message?: string | undefined;
}) => string;
export declare const em_minLength: ({ field, length, message, }: {
    field?: string | undefined;
    length?: number | undefined;
    message?: string | undefined;
}) => string;
export declare const em_maxLength: ({ field, length, message, }: {
    field?: string | undefined;
    length?: number | undefined;
    message?: string | undefined;
}) => string;
export declare const em_invalidEmail: ({ message }: {
    message?: string | undefined;
}) => string;
export declare const em_password: ({ field, message, }: {
    field?: string | undefined;
    message?: string | undefined;
}) => string;
export declare const em_min: ({ min, field, message, }: {
    min: number;
    field?: string | undefined;
    message?: string | undefined;
}) => string;
export declare const em_max: ({ max, field, message, }: {
    max: number;
    field?: string | undefined;
    message?: string | undefined;
}) => string;
