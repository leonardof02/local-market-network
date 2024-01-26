/** Regular expresion patterns for use in form validation across all App */

import { ValidationRule } from "react-hook-form";

interface RegexProps {
  FULL_NAME: ValidationRule<RegExp>;
  EMAIL: ValidationRule<RegExp>;
  CONTACT: ValidationRule<RegExp>;
}

const Regex: RegexProps = {
  FULL_NAME:
    /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)$/,
  EMAIL: /^[^@s]+@[^@s]+.[^@s]+$/,
  CONTACT: /^\d{8}$/,
};

export { Regex };
