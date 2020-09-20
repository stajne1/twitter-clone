export const isValidEmail = email => {
  return email.match(/^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/);
}