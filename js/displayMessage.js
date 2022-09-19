export function displayMessage(message = "Unknown error", classType) {
  return `<div class="${classType}">${message}</div>`;
}
