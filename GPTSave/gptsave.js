function saveChatContent()
{
  var messages = document.getElementsByClassName("min-h-[20px] whitespace-pre-wrap flex flex-col items-start gap-4");
  var text = "";

  for(var x = 0; x < messages.length; x++)
  {
    text += (x % 2 == 0 ? "USER:" : "AI:") + "\n";
    text += messages[x].textContent + "\n\n";
  }
  
  updateClipboard(text);
  alert("Copied chat content to clipboard!");
}

function updateClipboard(newContent)
{
  navigator.clipboard.writeText(newContent).then(() => 
  {
    console.log("Clipboard set!");
  }, () =>
  {
    console.log("Clipboard not set!");
  });
}

saveChatContent();