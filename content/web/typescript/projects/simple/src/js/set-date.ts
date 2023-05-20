// eslint-disable-next-line import/prefer-default-export
export function setDate(): void {
  const currentDate = new Date().toString();
  console.warn(currentDate);
  const heading = document.querySelector('body > h1') as HTMLHeadingElement;
  heading.textContent = currentDate;
}
