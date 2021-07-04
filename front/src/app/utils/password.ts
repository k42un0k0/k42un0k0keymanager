type Option = { numeric: boolean; uppercase: boolean; lowercase: boolean; symbol: boolean };
export function genPassword(length = 20, option: Option) {
  let password = '';
  let password_base = '';
  const password_numeric = '1234567890';
  const password_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const password_lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const password_symbol = '!"#$%&()=~|@[];:+-*<>?_>.,\'';

  if (option.numeric) password_base += password_numeric;
  if (option.uppercase) password_base += password_uppercase;
  if (option.lowercase) password_base += password_lowercase;
  if (option.symbol) password_base += password_symbol;
  for (let i = 0; i < length; i++) {
    password += password_base.charAt(Math.floor(Math.random() * password_base.length));
  }
  return password;
}
