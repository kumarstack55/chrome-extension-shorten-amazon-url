async function initializePopup() {
  const resultDiv = document.getElementById("result");

  if (!resultDiv) {
    console.error("result element not found in popup.html");
    return;
  }

  const shortenCurrentUrl = async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    if (!tab.id) {
      console.error("Invalid tab ID");
      return;
    }

    resultDiv.textContent = "Shorten URL...";

    chrome.tabs.sendMessage(
      tab.id,
      { action: "shortenUrl" },
      function (response) {
        console.log("response:", response);

        if (response && response.result) {
          const url = response.result;
          const link = document.createElement('a');
          link.href = url;
          link.textContent = url;
          link.target = '_blank';
          link.addEventListener('click', (e) => {
            e.preventDefault();
            chrome.tabs.create({ url: link.href });
          });
          resultDiv.innerHTML = '';
          resultDiv.appendChild(link);
        } else {
          resultDiv.textContent = "failed to shorten URL.";
        }
      }
    );
  };

  await shortenCurrentUrl();
}

initializePopup();
