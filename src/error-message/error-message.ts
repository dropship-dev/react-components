export const em_required = ({
  field,
  message,
}: {
  field?: string;
  message?: string;
}) => {
  if (message) return message;
  return `${field ? field : "This field"} is required`;
};

export const em_minLength = ({
  field,
  length,
  message,
}: {
  field?: string;
  length?: number;
  message?: string;
}) => {
  if (message) return message;
  return `${
    field ? field : "This field"
  } must be at least ${length} characters`;
};

export const em_maxLength = ({
  field,
  length,
  message,
}: {
  field?: string;
  length?: number;
  message?: string;
}) => {
  if (message) return message;
  return `${field ? field : "This field"} must be at most ${length} characters`;
};

export const em_invalidEmail = ({ message }: { message?: string }) => {
  if (message) return message;
  return `Invalid email format`;
};

export const em_password = ({
  field,
  message,
}: {
  field?: string;
  message?: string;
}) => {
  if (message) return message;
  return `${field ? field : "This field"} must be a valid password`;
};

export const em_min = ({
  min,
  field,
  message,
}: {
  min: number;
  field?: string;
  message?: string;
}) => {
  if (message) return message;
  return `${field ? field : "This field"} must be at least ${min}`;
};

export const em_max = ({
  max,
  field,
  message,
}: {
  max: number;
  field?: string;
  message?: string;
}) => {
  if (message) return message;
  return `${field ? field : "This field"} must be at most ${max}`;
};
