function copyToClipboard (text) {
    'use strict';
    
    if (window.clipboardData && window.clipboardData.setData) {
        return clipboardData.setData("Text", text); 
    } 
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
      let textarea = document.createElement("textarea");
      textarea.textContent = text;
      textarea.style.position = "fixed";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        return document.execCommand("copy");
      } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return false;
      } finally {
      document.body.removeChild(textarea);
      }
    }
  }

  function copyFromLinkedInSearchPage() {
    const jobTitle = document.getElementsByClassName("t-16 t-black t-bold truncate")[0].innerText;
    const companyName = document.getElementsByClassName('mt2')[0].children[0].children[0].innerText.trim();
    return jobTitle + ";" + companyName;
  }

  function copyFromLinkedInOfferPage() {
    const jobTitle = document.getElementsByClassName('t-24 t-bold')[0].innerText;
    const companyName = document.getElementById('ember25').innerText;
    return jobTitle + ";" + companyName;
  }

  function copyFromPracujPl() {
    let jobTitle = document.getElementsByClassName("OfferView1Z5qAH")[0].innerText;
    let companyName = document.getElementsByClassName("OfferViewFf0I7D")[0].childNodes[0].nodeValue;
    return jobTitle + ";" + companyName
  }

  function copyFromPracaPl() {
    let jobTitle = document.getElementsByClassName("app-offer__title")[0].innerText;
    let companyName = document.getElementsByClassName("app-offer__profile-link")[0].innerText;
    return jobTitle + ";" + companyName
  }

  function copyFromOLX() {
    let jobTitle = document.getElementsByClassName("css-1oarkq2-Text eu5v0x0")[0].innerText;
    let companyName = " ";
    return jobTitle + ";" + companyName
  }

  function copyFromRocketJobs() {
    let jobTitle = document.getElementsByClassName("title")[0].innerText;
    let companyName = document.getElementsByClassName("tile company-name")[0].getElementsByClassName("value")[0].innerText;
    return jobTitle + ";" + companyName
  }

  function multiCopyToClipboard() {
    let today = new Date();
    let currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let offerData = null;
    let offerURL = window.location.href;
    if (offerURL.substring(12,37) == "linkedin.com/jobs/search/") {
      offerData = copyFromLinkedInSearchPage();
    }
    else if (offerURL.substring(12,35) == "linkedin.com/jobs/view/") {
      offerData = copyFromLinkedInOfferPage();
      offerURL = window.location.href.substring(0,46);
    }
    else if (offerURL.substring(12,20) == "praca.pl") {
      offerData = copyFromPracaPl();
    }
    else if (offerURL.substring(12,21) == "pracuj.pl") {
      offerData = copyFromPracujPl();
    }
    else if (offerURL.substring(8,18) == "www.olx.pl") {
      offerData = copyFromOLX();
    }
    else if (offerURL.substring(8,29) == "rocketjobs.pl/offers/") {
      offerData = copyFromRocketJobs();
    }
    const textToCopy = currentDate + ";" + offerData + ";" + offerURL + ";";
    copyToClipboard(textToCopy);
    alert("Text copied!");
  }

  multiCopyToClipboard();
