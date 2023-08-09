// Password security tracker 
import { useEffect, useState } from "react";
import { useFormContext } from "../../context/FormContext";
import { ACTIVE_PASSWORD_SECURITY_LEVELS, PASSWORD_SECURITY_RULES } from "../util/DataStorage";
import "./PasswordSecurityMeter.css";

export default function PasswordSecurityMeter() {
  // STATE
  const [passwordSecurityLevels, setPasswordSecurityLevels] = useState(ACTIVE_PASSWORD_SECURITY_LEVELS);

  // CONTEXT
  const { formData, setStatus, setHighestActiveLevel } = useFormContext();

  // EFFECT
  // Validate password, update security level and status message 
  useEffect(() => {
    const passwordValidator = (password) => {
      // Empty password: reset all security levels
      if (password?.length === 0) {
        setPasswordSecurityLevels({...ACTIVE_PASSWORD_SECURITY_LEVELS});
        return;
      }

      let activeLevel = null;

      const updatedLevels = Object.keys(PASSWORD_SECURITY_RULES).reduce((acc, level) => {
        const regex = PASSWORD_SECURITY_RULES[level].regexPattern;
        const isMatch = regex.test(password);
        acc[level] = isMatch;

        if (isMatch) {
          activeLevel = level;
        }
        return acc;
      }, {});

      setPasswordSecurityLevels(updatedLevels);

      if (activeLevel) {
        setStatus(prevStatus => ({
          ...prevStatus,
          style: PASSWORD_SECURITY_RULES[activeLevel]?.style,
          message: `${PASSWORD_SECURITY_RULES[activeLevel]?.label} password`,
        }));
        setHighestActiveLevel(activeLevel);
      } else {
        setStatus(prevStatus => ({
          ...prevStatus,
          style: '',
          message: '',
        }));
        setHighestActiveLevel(null);
      }
    };
    passwordValidator(formData["password"]?.value);
  }, [formData, setHighestActiveLevel, setStatus]);

  return (
    <div className="password-security-meter">
      {Object.keys(PASSWORD_SECURITY_RULES).map(item => (
        <span
          key={PASSWORD_SECURITY_RULES[item]?.id}
          style={passwordSecurityLevels[item] ? { backgroundColor: `${PASSWORD_SECURITY_RULES[item]?.style}` } : {}}
        >
        </span>
      ))}
    </div>
  )
}