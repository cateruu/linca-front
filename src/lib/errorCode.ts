export const ERROR_CODES = {
  USERNAME_TAKEN: 0,
  UNATHORIZED: 1,
  NOT_FOUND: 2,
} as const;

type ObjectValues<T> = T[keyof T];

export type ErrorCodes = ObjectValues<typeof ERROR_CODES>;
