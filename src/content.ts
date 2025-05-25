import { shortenUrl } from './urlShortener';

console.log("🚀 shorten-amazon-url content script has been loaded.");

function getShortUrl(): string | null {
  return shortenUrl(window.location.href);
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("Message received:", request);
  if (request.action === "shortenUrl") {
    const result = getShortUrl();
    console.log("Sending response:", result);
    sendResponse({ result: result });
  }
  return true;
});
