export function setDate() {
    const currentDate = new Date().toString();
    console.warn(currentDate);
    const heading = document.querySelector('body > h1');
    heading.textContent = currentDate;
}
