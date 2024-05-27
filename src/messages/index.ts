export const messages = {
  required: 'Required field',
  email_taken: 'Email already taken',
  username_taken: 'Username already used',
  username_not_exist: 'Username does not exist',
  password_not_added: 'No password added to this account',
  password_incorrect: 'Password does not match',
  unexpected: 'Unexpected error occurred',
  user_not_exist: 'User not registered',
  valid_string: 'Must be a valid string',
  valid_email: 'Must be a valid email address',
  length2to20: 'Must be between 2 and 20 characters',
  length2to40: 'Must be between 2 and 40 characters',
  length4to20: 'Must be between 4 and 20 characters',
  length6to20: 'Must be between 6 and 20 characters',
  username_regex: 'Use letters, numbers, underscores, and hyphens', // "Can contain letters, numbers, underscores, and hyphens (between)",
};

export const validationErrorResponse = (
  validation: string,
  message: keyof typeof messages,
  code: string = 'custom'
) => {
  return {
    code: 400,
    issues: [
      {
        validation,
        code,
        message: messages[message],
        path: [],
      },
    ],
    name: 'ZodError',
  };
};

export const manyValidationErrorResponse = (
  items: {
    validation: string;
    message: keyof typeof messages;
    code?: string;
  }[]
) => {
  return {
    code: 400,
    issues: items.map(({ validation, message, code }) => ({
      validation,
      code: code || 'custom',
      message: messages[message],
      path: [],
    })),
    name: 'ZodError',
  };
};

export const formValidationSetter = (
  error: any,
  setError: (
    name: any,
    error: {
      type: string;
      message: string;
    },
    options?:
      | {
          shouldFocus: boolean;
        }
      | undefined
  ) => void
) => {
  const { name, issues } = error || {};
  if (name === 'ZodError') {
    const items = (issues || []) as {
      validation: string;
      message: string;
      code: string;
    }[];
    items.forEach((e) => {
      return setError(
        e.validation,
        {
          type: e.code,
          message: e.message,
        },
        {
          shouldFocus: items.length === 1,
        }
      );
    });
    return items;
  }
  return [];
};
