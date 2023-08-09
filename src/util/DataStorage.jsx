// Store site related text constants, template, etc.
// TEXT CONSTANTS 
export const TEXT = {
  HEADER_LOGIN: "Do you already have an account?",
  HEADER_SIGNUP: "Welcome to Acme.",
  CTA_TEXT_LOGIN: "That's awesome! You can login by clicking on the button below. To skip this next time, you can ask us to remember your login credentials.",
  CTA_TEXT_SIGNUP: "Create your account by filling the form below.",
  BUTTON_LOGIN: "Log in",
  BUTTON_SIGNUP: "Sign up",
  REMEMBER_ME: "Remember me.",
  COPYRIGHT: "© 2015 Acme, Inc.",
  TERMS: "Terms",
  PRIVACY: "Privacy",
  NAV_TO_PRIVACY: "navigate to privacy page",
  NAV_TO_TERMS: "navigate to terms page",
  OPEN_MENU: "open information menu",
  PASSWORD: "Password",
  EMAIL: "Email",
  PASSWORD_RULES: "Password rules",
  CLIENT_OFFLINE: "You are currently offline."
}

// TEMPLATES
export const PASSWORD_SECURITY_RULES = {
  low: {
    id: 1,
    label: "weak",
    style: "var(--color-11)",
    ruleDescription: "6+ chars, any character.",
    regexPattern: /^.{6,}$/
  },
  medium: {
    id: 2,
    label: "medium",
    style: "var(--color-6)",
    ruleDescription: "8+ chars, must contain at least 1 lowercase, 1 uppercase, 1 number.",  
    regexPattern: /^(?=.*[a-zàáâãäåòóôõöøèéêëìíîïùúûüçñß])(?=.*[A-ZÀÁÂÃÄÅÒÓÔÕÖØÈÉÊËÌÍÎÏÙÚÛÜÇÑß])(?=.*\d).{8,}$/
  },
  high: {
    id: 3,
    label: "strong",
    style: "var(--color-8)",
    ruleDescription: "8+ chars, must contain at least 1 lowercase, 1 uppercase, 1 number, 1 special.",
    regexPattern: /^(?=.*[a-zàáâãäåòóôõöøèéêëìíîïùúûüçñß])(?=.*[A-ZÀÁÂÃÄÅÒÓÔÕÖØÈÉÊËÌÍÎÏÙÚÛÜÇÑß])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{}|:;,.<>?/]).{8,}$/
  },
  veryHigh: {
    id: 4,
    label: "very strong",
    style: "var(--color-13)",
    ruleDescription: "12+ chars, must contain at least 1 lowercase, 1 uppercase, 1 number, 2 special.",
    regexPattern: /^(?=(?:.*[a-zàáâãäåòóôõöøèéêëìíîïùúûüçñß]){1})(?=(?:.*[A-ZÀÁÂÃÄÅÒÓÔÕÖØÈÉÊËÌÍÎÏÙÚÛÜÇÑß]){1})(?=(?:.*\d){1})(?=(?:.*[!@#$%^&*()_\-+=[\]{}|:;,.<>?/]){2}).{12,}$/
  }
}

// State initializer to track highest active password security level  
export const ACTIVE_PASSWORD_SECURITY_LEVELS = {
    low: false,
    medium: false,
    high: false,
    veryHigh: false
  }

  // TEMPLATE
  export const FORM_DATA_TEMPLATE = {
    email: {
      value: '',
      // other input params
    },
    password: {
      value: '',
    }, 
  }