const quotetext=document.querySelector(".quote"),
authorname=document.querySelector(".author .name"),
quotebtn=document.getElementById("newquotes"),
soundbtn=document.querySelector(".sound"),
copy=document.querySelector(".copy"),
twitter=document.querySelector(".twitter");

function randomQuote(){
    quotebtn.innerText="Loading Quote..."

    fetch('https://quotes-api-self.vercel.app/quote')
  .then(response => response.json())
  .then(data => {
    // Handle the retrieved quote
    
    quotetext.innerText=data.quote;
    authorname.innerText=data.author;

    quotebtn.innerText="New Quote"
  });
  


  soundbtn.addEventListener("click",()=>{
    speechSynthesis.cancel();
    let utterence = new SpeechSynthesisUtterance(`${quotetext.innerText}`);
    speechSynthesis.speak(utterence);
    
     // Disable the button while speaking to prevent re-triggering
  soundbtn.disabled = true;

  // Re-enable the button once speaking has ended
  utterence.onend = () => {
    soundbtn.disabled = false;
  };
  });

  copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(quotetext.innerText);
  });

}


quotebtn.addEventListener("click",randomQuote);

