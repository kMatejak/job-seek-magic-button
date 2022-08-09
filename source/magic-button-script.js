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

  function copyFromJustJoinIT() {
    const jobTitle = document.getElementsByClassName('css-1id4k1')[0].innerText;
    const companyName = document.getElementsByClassName('css-l4opor')[0].innerText;
    return jobTitle + ";" + companyName;
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
    else if (offerURL.substring(8,27) == "justjoin.it/offers/") {
      offerData = copyFromJustJoinIT();
    }
    const textToCopy = currentDate + ";" + offerData + ";" + offerURL + ";";
    copyToClipboard(textToCopy);
  }

  multiCopyToClipboard();
