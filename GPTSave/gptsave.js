function saveChatContent()
{
  var messages = document.getElementsByClassName("min-h-[20px] whitespace-pre-wrap flex flex-col items-start gap-4");

  var text = "";

  for(var x = 0; x < messages.length; x++)
  {
    text += (x % 2 == 0 ? "USER:" : "AI:") + "\n\n";
    text += messages[x].textContent + "\n\n";
  }
  
  updateClipboard(text);
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


// This code does not work on Firefox as "clipboard-write" is not valid.
// function writeClipboardContent(text)
// {
//   navigator.permissions.query({name: "clipboard-write"}).then((result) => 
//   {
//     if (result.state === "granted" || result.state === "prompt")
//     {
//       updateClipboard(text);
//     }
//   });
// }
// ---------------------------------------------------------------------

window.addEventListener('click', function() { saveChatContent(); });