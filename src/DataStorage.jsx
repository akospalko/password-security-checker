// store site related text, template, etc.
// TEXT CONTENT 
export const TEXT = {
  HEADER_LOGIN: 'Do you already have an account?',
  HEADER_SIGNUP: 'Welcome to Acme.',
  CTA_TEXT_LOGIN: 'That\'s awesome! You can login by clicking on the button below. To skip this next time, you can ask us to remember your login credentials.',
  CTA_TEXT_SIGNUP: 'Create your account by filling the form below',
  BUTTON_LOGIN: 'Log in',
  BUTTON_SIGNUP: 'Sign up',

  REMEMBER_ME: 'Remember me',
  COPYRIGHT: '© 2015 Acme, Inc.',
  TERMS: 'Terms',
  PRIVACY: 'Privacy',
}

// TEMPLATES
export const PASSWORD_SECURITY_RULES = {
  low: {
    id: 1,
    length: 6,
    label: 'low security',
    style: 'var(--color-11)',
    regex: /^.{6,}$/
  },
  medium: {
    id: 2,
    length: 8,
    label: 'medium security',
    style: 'var(--color-6)',
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
  },
  high: {
    id: 3,
    length: 10,
    label: 'high security',
    style: 'var(--color-8)',
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{}|:;,.<>?/ÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÌÍÎÏìíîïÙÚÛÜùúûüÇçÑñß]).{10,}$/
  },
  veryHigh: {
    id: 4,
    length: 12,
    label: 'very high security',
    style: 'var(--color-12)',
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{}|:;,.<>?/ÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÌÍÎÏìíîïÙÚÛÜùúûüÇçÑñß]).{16,}$/
  }
}