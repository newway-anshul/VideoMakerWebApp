window.addEventListener("load", () => {
  let btns = document.querySelectorAll("div.urls div.url div.btn");
  if (btns.length == 0) {
    alert("btns not available");
    return;
  }
  btns.forEach((btn) => {
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
  const data = {
    "Dec 5, 2022": "https://youtube.com/shorts/9OIcBID5I9s",
    "Dec 6, 2022": "https://youtube.com/shorts/K8VImSG20XM",
    "Dec 7, 2022": "https://youtube.com/shorts/bIamU9y5QrI",
    "Dec 8, 2022": "https://youtube.com/shorts/QOawWsgZgk0",
    "Dec 9, 2022": "https://youtube.com/shorts/-FrVJtJ0grQ",
    "Dec 10, 2022": "https://youtube.com/shorts/co2u83VTXyw",
    "Dec 11, 2022": "https://www.youtube.com/shorts/o_qEvuNTTBo",
    "Dec 12, 2022": "https://youtube.com/shorts/ImsfQ8XZaZc",
    "Dec 13, 2022": "https://youtube.com/shorts/A8dEr4bcDxk",
    "Dec 14, 2022": "https://youtube.com/shorts/cT6jR_n8zsQ",
    "Dec 15, 2022": "https://youtube.com/shorts/qyZbF7D2ITg",
    "Dec 16, 2022": "https://youtube.com/shorts/Fjbj1-AYE0E",
    "Dec 17, 2022": "https://youtube.com/shorts/vc9bVj9OX2s",
    "Dec 18, 2022": "https://youtube.com/shorts/TlApsVLHMxQ",
    "Dec 19, 2022": "https://youtube.com/shorts/O4Wo8Vw6YLM",
    "Dec 20, 2022": "https://www.youtube.com/shorts/bYZVwi9ASeU",
    "Dec 21, 2022": "https://www.youtube.com/shorts/Vvut8i31Pak",
    "Dec 22, 2022": "https://www.youtube.com/shorts/i2RTe9SscCQ",
    "Dec 23, 2022": "https://www.youtube.com/shorts/O85cVcu1v2s",
    "Dec 24, 2022": "https://www.youtube.com/shorts/71ho75ju7XM",
    "Dec 25, 2022": "https://youtube.com/shorts/GthJrjv4ySY",
    "Dec 26, 2022": "https://youtube.com/shorts/whGi_IUS60Q",
    "Dec 27, 2022": "https://youtube.com/shorts/u-drerz9BRk",
    "Dec 28, 2022": "https://youtube.com/shorts/5LCIcPGaEZk",
    "Dec 29, 2022": "https://youtube.com/shorts/2k2Nbzq-oUg",
    "Dec 30, 2022": "https://youtube.com/shorts/2k2Nbzq-oUg",
    "Dec 31, 2022": "https://youtube.com/shorts/g2hNuRYBcpss",
    "Jan 1, 2023": "https://youtube.com/shorts/Lz-Yr_2QqEU",
    "Jan 2, 2023": "https://youtube.com/shorts/EiM5obSNfMw",
    "Jan 3, 2023": "https://youtube.com/shorts/30KuZvaZOGE",
    "Jan 4, 2023": "https://youtube.com/shorts/BckzjjPAh74",
    "Jan 5, 2023": "https://youtube.com/shorts/7cu_dtZ69x8",
    "Jan 6, 2023": "https://youtube.com/shorts/oPfy5A4J-Mw",
    "Jan 7, 2023": "https://youtube.com/shorts/iaAkYYIAW1Q",
    "Jan 8, 2023": "https://youtube.com/shorts/LTMSgunQJ5I",
    "Jan 9, 2023": "https://youtube.com/shorts/gtdP0XIjuf8",
    "Jan 10, 2023": "https://youtube.com/shorts/gtdP0XIjuf8",
    "Jan 11, 2023": "https://youtube.com/shorts/qLcjPweIGaE",
    "Jan 12, 2023": "https://youtube.com/shorts/oF0lPJ5tAWw",
    "Jan 13, 2023": "https://youtube.com/shorts/8sjF6um2lgs",
    "Jan 14, 2023": "https://youtube.com/shorts/TBGOlUQjAvQ",
    "Jan 15, 2023": "https://youtube.com/shorts/SLw3z62x7Zo",
    "Jan 16, 2023": "https://youtube.com/shorts/1Q1ck-vdaHo",
    "Jan 17, 2023": "https://youtube.com/shorts/nW4WRpIPiz8",
    "Jan 18, 2023": "https://youtube.com/shorts/StCnGFBrXd4",
    "Jan 19, 2023": "https://youtube.com/shorts/QZO2wQw80Q0",
    "Jan 20, 2023": "https://youtube.com/shorts/LTa7rKffBSI",
    "Jan 21, 2023": "https://youtube.com/shorts/ibW9r2XZ1wU",
    "Jan 22, 2023": "https://youtube.com/shorts/RNDrEY54H_M",
    "Jan 23, 2023": "https://youtube.com/shorts/HU93_ci6wNY",
    "Jan 24, 2023": "https://youtube.com/shorts/zqTA6ZZ1bzY",
    "Jan 25, 2023": "https://youtube.com/shorts/gjLgS-qivKc",
    "Jan 26, 2023": "https://youtube.com/shorts/fcX1dtGXKos",
    "Jan 27, 2023": "https://youtube.com/shorts/9V5k9vpzE_4",
    "Jan 28, 2023": "https://youtube.com/shorts/XTrJEIjNKQc",
    "Jan 29, 2023": "https://youtube.com/shorts/KFJHmeIfoKo",
    "Jan 30, 2023": "https://youtube.com/shorts/8C9tBWWJHn4",
    "Jan 31, 2023": "https://youtube.com/shorts/6KiRwh4Diz0",
    "Feb 1, 2023": "https://youtube.com/shorts/tkzLfh08_Pc",
    "Feb 2, 2023": "https://youtube.com/shorts/UjUwNoCH10w",
    "Feb 3, 2023": "https://youtube.com/shorts/e0Xld2xEFB0",
    "Feb 4, 2023": "https://youtube.com/shorts/oZyo9ja3jNI",
    "Feb 5, 2023": "https://youtube.com/shorts/43xTr6ZfVhY",
    "Feb 6, 2023": "https://youtube.com/shorts/3Jxs7axsvh0",
    "Feb 7, 2023": "https://youtube.com/shorts/tmuB4PWhIyg",
    "Feb 8, 2023": "https://youtube.com/shorts/Fq3BrJTITJE",
    "Feb 9, 2023": "https://youtube.com/shorts/HcqYcXIlUK0",
    "Feb 10, 2023": "https://youtube.com/shorts/6QoZyUyfSko",
    "Feb 11, 2023": "https://youtube.com/shorts/3kNNxLeOdH0",
    "Feb 12, 2023": "https://youtube.com/shorts/SZ8JCjoSwrQ",
    "Feb 13, 2023": "https://youtube.com/shorts/37mr0I2w4c8",
    "Feb 14, 2023": "https://youtube.com/shorts/nbf9vY1EoPg",
    "Feb 15, 2023": "https://youtube.com/shorts/Pj3lD66cpWg",
    "Feb 16, 2023": "https://youtube.com/shorts/Y02SSzX_hSI",
    "Feb 17, 2023": "https://youtube.com/shorts/Racfmw4Uem4",
    "Feb 18, 2023": "https://youtube.com/shorts/QN7BzY7oYDE",
    "Feb 19, 2023": "https://youtube.com/shorts/dgK9jATbLdA",
    "Feb 20, 2023": "https://youtube.com/shorts/slp32joci8U",
    "Feb 21, 2023": "https://youtube.com/shorts/nXmH-6hd6SA",
    "Feb 22, 2023": "https://youtube.com/shorts/y-hZwkZw-Uo",
    "Feb 23, 2023": "https://youtube.com/shorts/x_89PNCKzNk",
    "Feb 24, 2023": "https://youtube.com/shorts/sE68QzWwLHE",
    "Feb 25, 2023": "https://youtube.com/shorts/UOXosrfb3l8",
    "Feb 26, 2023": "https://youtube.com/shorts/IoS5p1ppgNo",
    "Feb 27, 2023": "https://youtube.com/shorts/Jv9X1bbVDQU",
    "Feb 28, 2023": "https://youtube.com/shorts/YSzXMpfmGHg",
    "Mar 1, 2023": "https://youtube.com/shorts/BQl0smNNOOU",
    "Mar 2, 2023": "https://youtube.com/shorts/QmZohOBOHu4",
    "Mar 3, 2023": "https://youtube.com/shorts/FA7ygJtJbC4",
    "Mar 4, 2023": "https://youtube.com/shorts/FyfHAk4D2CE",
    "Mar 5, 2023": "https://youtube.com/shorts/LgZQeivAoD4",
    "Mar 6, 2023": "https://youtube.com/shorts/BcTI3WMuh9c",
    "Mar 7, 2023": "https://youtube.com/shorts/_GOSoqmQA_Q",
    "Mar 8, 2023": "https://youtube.com/shorts/4BIpBN09z9Y",
    "Mar 9, 2023": "https://youtube.com/shorts/29JrBY1QVcg",
    "Mar 10, 2023": "https://youtube.com/shorts/EMy83uGKf3E",
    "Mar 11, 2023": "https://youtube.com/shorts/jXQe-FHHVFI",
    "Mar 12, 2023": "https://youtube.com/shorts/dGYLab6D3ZQ",
    "Mar 14, 2023": "https://youtube.com/shorts/1owsmRMzDmE",
    "Mar 15, 2023": "https://youtube.com/shorts/qoHLOEC24KM",
    "Mar 16, 2023": "https://youtube.com/shorts/d2_p57TIm20",
    "Mar 17, 2023": "https://youtube.com/shorts/-HSvNLsSQ_Y",
    "Mar 18, 2023": "https://youtube.com/shorts/PpGH_fOup7I",
    "Mar 20, 2023": "https://youtube.com/shorts/zCr39y8XPhw",
    "Mar 22, 2023": "https://youtube.com/shorts/GoEHVXTVSTE",
    "Mar 23, 2023": "https://youtube.com/shorts/_mjNlK-btrg",
    "Mar 25, 2023": "https://youtube.com/shorts/LOuWDP0na6I",
    "Mar 26, 2023": "https://youtube.com/shorts/X10FZ-Y6xNw",
    "Mar 27, 2023": "https://www.youtube.com/shorts/ssaKAlOJ5dw",
    "Mar 28, 2023": "https://youtube.com/shorts/ix1tBXa6X1U",
    "Mar 29, 2023": "https://youtube.com/shorts/BlH4xzVT0xg",
    "Mar 30, 2023": "https://youtube.com/shorts/3WTYPcv8ivs",
    "Mar 31, 2023": "https://youtube.com/shorts/nQP05Gagu8s",
    "Apr 1, 2023": "https://youtube.com/shorts/WxrAdevkvwM",
    "Apr 2, 2023": "https://youtube.com/shorts/p5GavEXv0Ok",
    "Apr 3, 2023": "https://youtube.com/shorts/--DWNjTbG3k",
    "Apr 4, 2023": "https://youtube.com/shorts/oG-RXect2xM",
    "Apr 5, 2023": "https://youtube.com/shorts/qaMCHW0xQ78",
    "Apr 6, 2023": "https://youtube.com/shorts/XFA9uxe4I7o",
    "Apr 8, 2023": "https://youtube.com/shorts/0eXKuDn2Jy0",
    "Apr 9, 2023": "https://youtube.com/shorts/0UeatpSAc6o",
    "Apr 10, 2023": "https://youtube.com/shorts/C8dtsyL8wiY",
    "Apr 11, 2023": "https://youtube.com/shorts/GcFylRgXG_g",
    "Apr 12, 2023": "https://youtube.com/shorts/CPxC2PZinRU",
    "Apr 13, 2023": "https://youtube.com/shorts/96bWXScznhc",
    "Apr 14, 2023": "https://youtube.com/shorts/8PaR2mlBt7w",
    "Apr 15, 2023": "https://youtube.com/shorts/H5xbIuU6mq4",
    "Apr 16, 2023": "https://youtube.com/shorts/dP-UnPIrCJ0",
    "Apr 17, 2023": "https://youtube.com/shorts/my0Lp93Rx9E",
    "Apr 19, 2023": "https://youtube.com/shorts/GP46st2Fa68",
    "Apr 20, 2023": "https://youtube.com/shorts/NanNrOzDtG0",
    "Apr 21, 2023": "https://www.youtube.com/shorts/Vw8gPctLT3U",
    "Apr 22, 2023": "https://youtube.com/shorts/6n9FOQ8Lvds",
  };
  return data[date];
}
function getHindiData(date) {
  const data = {
    "Dec 9, 2022": "https://youtube.com/shorts/cVxjeH3MBEs",
    "Dec 10, 2022": "https://youtube.com/shorts/h81P6AR0Te8",
    "Dec 11, 2022": "https://youtube.com/shorts/y-uG5abOJ6k",
    "Dec 12, 2022": "https://youtube.com/shorts/Czb075q9-SU",
    "Dec 13, 2022": "https://youtube.com/shorts/BuawXINyCkg",
    "Dec 14, 2022": "https://youtube.com/shorts/o2F6wO6Q_0Y",
    "Dec 15, 2022": "https://youtube.com/shorts/Ab_ub-ssCkc",
    "Dec 16, 2022": "https://youtube.com/shorts/BCRRxzA_4tA",
    "Dec 17, 2022": "https://youtube.com/shorts/J2ALP_nN5OU",
    "Dec 18, 2022": "https://youtube.com/shorts/LsZs9RYEu5A",
    "Dec 19, 2022": "https://youtube.com/shorts/Ca5d9CzC-RQ",
    "Dec 20, 2022": "https://youtube.com/shorts/7prZvdbvnr4",
    "Dec 21, 2022": "https://youtube.com/shorts/FZnxum-Wa8Y",
    "Dec 22, 2022": "https://youtube.com/shorts/ZyVOqshD3U4",
    "Dec 23, 2022": "https://youtube.com/shorts/IEA1JIYWFiE",
    "Dec 24, 2022": "https://youtube.com/shorts/uCfd80lQo4A",
    "Dec 25, 2022": "https://youtube.com/shorts/XQjDhNG0kK8",
    "Dec 26, 2022": "https://youtube.com/shorts/BV8I60lO8b8",
    "Dec 27, 2022": "https://youtube.com/shorts/PyItqxHyX5A",
    "Dec 28, 2022": "https://youtube.com/shorts/iFqTSPE__24",
    "Dec 29, 2022": "https://youtube.com/shorts/nJ5ou5VIyKM",
    "Dec 30, 2022": "https://youtube.com/shorts/axA8-L-a9aI",
    "Dec 31, 2022": "https://youtube.com/shorts/POz5l-FzOlg",
    "Jan 1, 2023": "https://youtube.com/shorts/Hi4PTsoa58w",
    "Jan 2, 2023": "https://youtube.com/shorts/zbmhbGDcO90",
    "Jan 4, 2023": "https://youtube.com/shorts/SPtWZarY2BI",
    "Jan 5, 2023": "https://youtube.com/shorts/obgaTpI3Mtg",
    "Jan 6, 2023": "https://youtube.com/shorts/fJGxj3YZoiM",
    "Jan 7, 2023": "https://youtube.com/shorts/byeJIzThaGk",
    "Jan 8, 2023": "https://youtube.com/shorts/fADQWCHz5Ek",
    "Jan 9, 2023": "https://youtube.com/shorts/yYGvq4ZGIfQ",
    "Jan 11, 2023": "https://youtube.com/shorts/ofvYINdqQro",
    "Jan 12, 2023": "https://youtube.com/shorts/ZEV7OsJmt4s",
    "Jan 13, 2023": "https://youtube.com/shorts/ESW_YxfHhEY",
    "Jan 14, 2023": "https://youtube.com/shorts/GWwBdoww0wA",
    "Jan 15, 2023": "https://youtube.com/shorts/LpfD6BnpHLo",
    "Jan 16, 2023": "https://youtube.com/shorts/FZ6XqjuoIuI",
    "Jan 17, 2023": "https://youtube.com/shorts/2N8HNOw9OS4",
    "Jan 18, 2023": "https://youtube.com/shorts/ucII5fV0tlE",
    "Jan 19, 2023": "https://youtube.com/shorts/3og5ThNUM28",
    "Jan 20, 2023": "https://youtube.com/shorts/DyfJ3jw0QBI",
    "Jan 21, 2023": "https://youtube.com/shorts/Kue3FSVAxDA",
    "Jan 22, 2023": "https://youtube.com/shorts/PMmODp-5wsM",
    "Jan 23, 2023": "https://youtube.com/shorts/lvqgcxxf-WM",
    "Jan 24, 2023": "https://youtube.com/shorts/-mRbytdUcVg",
    "Jan 25, 2023": "https://youtube.com/shorts/EVyWf4ZpIwo",
    "Jan 26, 2023": "https://youtube.com/shorts/LsG-1K8NI3I",
    "Jan 27, 2023": "https://youtube.com/shorts/oZOvMoDD3qk",
    "Jan 28, 2023": "https://youtube.com/shorts/w004o1p8F_c",
    "Jan 29, 2023": "https://youtube.com/shorts/I9boHgV7v9o",
    "Jan 30, 2023": "https://youtube.com/shorts/3_fPPU2b1LQ",
    "Jan 31, 2023": "https://youtube.com/shorts/-UCqtpQRL-c",
    "Feb 1, 2023": "https://youtube.com/shorts/pOvH7wW5amw",
    "Feb 2, 2023": "https://youtube.com/shorts/1KO8GEUGZvE",
    "Feb 3, 2023": "https://youtube.com/shorts/bhXBAl5AxfA",
    "Feb 4, 2023": "https://youtube.com/shorts/hph5l-pnfpk",
    "Feb 5, 2023": "https://youtube.com/shorts/mc6kBgGBTns",
    "Feb 6, 2023": "https://youtube.com/shorts/ZP-Wfr7ErZQ",
    "Feb 7, 2023": "https://youtube.com/shorts/1GdXITGdbxE",
    "Feb 8, 2023": "https://youtube.com/shorts/CyJPQqtxogI",
    "Feb 9, 2023": "https://youtube.com/shorts/0eYlzPn87iM",
    "Feb 10, 2023": "https://youtube.com/shorts/fHFk7Hf9XI8",
    "Feb 11, 2023": "https://youtube.com/shorts/o08QmSgYWOQ",
    "Feb 12, 2023": "https://youtube.com/shorts/IiFoDQoCaEw",
    "Feb 13, 2023": "https://youtube.com/shorts/cgeeth4dA0U",
    "Feb 14, 2023": "https://youtube.com/shorts/QwX2daHHPa4",
    "Feb 15, 2023": "https://youtube.com/shorts/pfGApk7MN2o",
    "Feb 16, 2023": "https://youtube.com/shorts/lPawiJ-AiSA",
    "Feb 17, 2023": "https://youtube.com/shorts/O-3bh5-O6ac",
    "Feb 18, 2023": "https://youtube.com/shorts/aiNs1O0-ICI",
    "Feb 19, 2023": "https://youtube.com/shorts/Z8tNYJPfKqU",
    "Feb 20, 2023": "https://youtube.com/shorts/06GSrMiiITc",
    "Feb 21, 2023": "https://youtube.com/shorts/9d5jQ8q4_-g",
    "Feb 22, 2023": "https://youtube.com/shorts/rI1Jxww6czc",
    "Feb 23, 2023": "https://youtube.com/shorts/mIoYFKhYBOc",
    "Feb 24, 2023": "https://youtube.com/shorts/t7YxpBBm9ks",
    "Feb 26, 2023": "https://youtube.com/shorts/zvt7N0UV1hc",
    "Feb 27, 2023": "https://youtube.com/shorts/kix0USeoo2Q",
    "Feb 28, 2023": "https://youtube.com/shorts/BJK38AFwDzI",
    "Mar 1, 2023": "https://youtube.com/shorts/ycHxl2lipgQ",
    "Mar 2, 2023": "https://youtube.com/shorts/t9o1V9xG6YA",
    "Mar 3, 2023": "https://youtube.com/shorts/iwduGVl-oQw",
    "Mar 5, 2023": "https://youtube.com/shorts/id4j4U0U3fY",
    "Mar 6, 2023": "https://youtube.com/shorts/VXoG3xGx14I",
    "Mar 7, 2023": "https://youtube.com/shorts/lBLhsKacP30",
    "Mar 8, 2023": "https://youtube.com/shorts/-OKv6X1V47U",
    "Mar 9, 2023": "https://youtube.com/shorts/0AW8FqGozuo",
    "Mar 10, 2023": "https://youtube.com/shorts/8vUtOW2FIg4",
    "Mar 11, 2023": "https://youtube.com/shorts/w3bhi-P1_Ug",
    "Mar 12, 2023": "https://youtube.com/shorts/jQWxtpXFMYw",
    "Mar 13, 2023": "https://youtube.com/shorts/x6kfrdZMclw",
    "Mar 14, 2023": "https://youtube.com/shorts/HbTpp41jTDw",
    "Mar 15, 2023": "https://youtube.com/shorts/_fc6-G9dEa8",
    "Mar 16, 2023": "https://youtube.com/shorts/sxDzbqrcyjA",
    "Mar 17, 2023": "https://youtube.com/shorts/S_G-8T9k5uI",
    "Mar 18, 2023": "https://youtube.com/shorts/bLoKFb0BZ6c",
    "Mar 19, 2023": "https://youtube.com/shorts/XTr_leObRUs",
    "Mar 20, 2023": "https://youtube.com/shorts/LoBL34R1rYA",
    "Mar 21, 2023": "https://youtube.com/shorts/1lA6LqxCyG4",
    "Mar 22, 2023": "https://youtube.com/shorts/kGYCmREVpL8",
    "Mar 23, 2023": "https://youtube.com/shorts/hwJU50Co4Lk",
  };
  return data[date];
}
