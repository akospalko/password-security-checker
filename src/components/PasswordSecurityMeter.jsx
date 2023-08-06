import { useEffect, useMemo, useState } from "react";
import './AuthenticationModal.css'
import './Form.css'

export default function PasswordSecurityMeter({password}) {
  // TEMPLATES
  const RULES_PASSWORD_SECURITY_LEVELS = useMemo(() => (
    {
      low: {
        id: 1,
        length: 6,
        label: 'low',
        style: 'var(--color-11)',
        regex: /^.{6,}$/
      },
      medium: {
        id: 2,
        length: 8,
        label: 'medium',
        style: 'var(--color-6)',
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
      },
      high: {
        id: 3,
        length: 10,
        label: 'high',
        style: 'var(--color-8)',
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{}|:;,.<>?/ÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÌÍÎÏìíîïÙÚÛÜùúûüÇçÑñß]).{10,}$/
      },
      veryHigh: {
        id: 4,
        length: 12,
        label: 'very high',
        style: 'var(--color-12)',
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{}|:;,.<>?/ÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÌÍÎÏìíîïÙÚÛÜùúûüÇçÑñß]).{16,}$/
      }
    }), []);
  const ACTIVE_PASSWORD_SECURITY_LEVELS = {
    low: false,
    medium: false,
    high: false,
    veryHigh: false
  }

  // STATE
  const [passwordSecurityLevels, setPasswordSecurityLevels] = useState(ACTIVE_PASSWORD_SECURITY_LEVELS);

  // EFFECT
  useEffect(() => {
    const passwordValidator = (password) => {
      if (password?.length === 0) {
        // If the password is empty, reset all security levels to inactive
        setPasswordSecurityLevels((prevLevels) => {
          const updatedPasswordSecurity = { ...prevLevels };
          for (const level in updatedPasswordSecurity) {
            updatedPasswordSecurity[level] = false;
          }
          return { ...updatedPasswordSecurity };
        });
        return;
      }
  
      setPasswordSecurityLevels((prevLevels) => {
        const updatedPasswordSecurity = { ...prevLevels };
        let activeLevel = null;
  
        for (const level in updatedPasswordSecurity) {
          const regex = RULES_PASSWORD_SECURITY_LEVELS[level].regex;
          const isMatch = regex.test(password);
          updatedPasswordSecurity[level] = isMatch;
  
          if (isMatch) {
            activeLevel = level;
          }
        }
  
        if (activeLevel) {
          for (const level in updatedPasswordSecurity) {
            updatedPasswordSecurity[level] = true;
            if (level === activeLevel) break;
          }
        }
  
        return { ...updatedPasswordSecurity };
      });
    };
  
    passwordValidator(password);
  }, [password, RULES_PASSWORD_SECURITY_LEVELS]);


  return (
    <div className='password-security-meter'>
      {Object.keys(RULES_PASSWORD_SECURITY_LEVELS).map(item => (
        <span
          key={RULES_PASSWORD_SECURITY_LEVELS[item]?.id}
          style={passwordSecurityLevels[item] ? { backgroundColor: `${RULES_PASSWORD_SECURITY_LEVELS[item]?.style}` } : {}}
        > {console.log(passwordSecurityLevels[item], RULES_PASSWORD_SECURITY_LEVELS[item]?.style)} </span>
      ))}
    </div>
  )
}