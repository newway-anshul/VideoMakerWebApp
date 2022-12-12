window.addEventListener("load", () => {
  let btns = document.querySelectorAll("div.urls div.url div.btn");
  if (btns.length == 0) {
    alert("btns not available");
    return;
  }
  btns.forEach((btn) => {
    document.querySelector('div.date').textContent = getTodaysDate()
    btn.addEventListener("click", (e) => {
      if (e.target.classList.contains("getQuote")) {
        let language = e.target.getAttribute("data-language");
        if (language == null) {
          alert("unalble to get language from btn");
          return;
        } else {
          if (language == "en") {
            getEnglishQuote();
          } else {
            getHindiQuote();
          }
        }
      }
      else{
        let url = e.target.getAttribute('data-url')
        if(url!=null){
            copyText(url)
        }
        else{
            alert('url not available on copy btn')
        }
      }
    });
  });
  if(!!hiData && !!enData){
    document.querySelector('div.dataIndicator').classList.add('dataLoaded')
  }
});
function getHindiQuote() {
  console.log("getHindiQuote called");
  const todayDate = getTodaysDate();
  console.log(todayDate);
  const url = getHindiData(todayDate)
  if(url==undefined){
    alert('no hindi quote availabl for '+todayDate)
    return
  }
  console.log(`got hi url ${url}`)
  let urlContainer = document.querySelector('div.url.hi')
  urlContainer.querySelectorAll('div.hide').forEach((e)=>{
    e.classList.remove('hide')
  })
  urlContainer.querySelector('div.getQuote').classList.add('hide')
  urlContainer.querySelector('div.copyBtn').setAttribute('data-url',url)
  urlContainer.querySelector('div.urlText').textContent = url
}
function getEnglishQuote() {
  console.log("getEnglishQuote called");
  const todayDate = getTodaysDate();
  console.log(todayDate);
  const url = getEnglishData(todayDate)
  if(url==undefined){
    alert('no english quote availabl for '+todayDate)
    return
  }
  console.log(`got en url ${url}`)
  let urlContainer = document.querySelector('div.url.en')
  urlContainer.querySelectorAll('div.hide').forEach((e)=>{
    e.classList.remove('hide')
  })
  urlContainer.querySelector('div.getQuote').classList.add('hide')
  urlContainer.querySelector('div.copyBtn').setAttribute('data-url',url)
  urlContainer.querySelector('div.urlText').textContent = url
}
async function copyText(url){
    let isTextCopied = await copyToClipBoard(url)
    if(isTextCopied){
      showToast('copied to clipboard')
    }
    else{
      showToast('can not copy to clipboard')
    }
}
function showToast(message){
    let toast = document.createElement('div')
    toast.classList.add('toast')
    toast.innerHTML=`<div>${message}</div>`;
    let isToastAvailable = document.body.querySelectorAll('div.toast')
    if(isToastAvailable.length>0){
        isToastAvailable.forEach((t)=>{
            t.remove()
        })
    }
    document.body.appendChild(toast)
    setTimeout(()=>{
        let isToastAvailable = document.body.querySelectorAll('div.toast')
        if(isToastAvailable.length>0){
            isToastAvailable.forEach((t)=>{
                t.remove()
            })
        }
    },2000)
}
function copyToClipBoard(text){
    return navigator.clipboard.writeText(text).then(
        () => {
           return true
        },
        () => {
          return false
        }
      );
}
function getTodaysDate() {
  //expected date formate Dec 5, 2022
  const date = new Date();
  let formattedDate = date.toLocaleString("en-GB", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  let splittedDate = formattedDate.split(" ");
  return splittedDate[1] + " " + splittedDate[0] + ", " + splittedDate[2];
}

function getEnglishData(date) {
  const data = enData;
  return data[date];
}
function getHindiData(date) {
  const data = hiData
  return data[date];
}
function hiDataLoaded(){
   document.querySelector('div.enIndicator').classList.add('dataLoaded')
}
function enDataLoaded(){
  document.querySelector('div.enIndicator').classList.add('dataLoaded')
}