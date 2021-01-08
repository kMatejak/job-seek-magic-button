// Code below works on 
// - https://www.linkedin.com/
// - https://www.pracuj.pl/
// - https://www.praca.pl/
// - https://neuvoo.pl/

// Tested browsers (Linux Lubuntu 18)
// - Brave
// - Chrome

// Core function copyToClipboard from
// - https://stackoverflow.com/a/33928558/12474392

function copyToClipboard (text) {
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
  function copyFromLinkedIn() {
    let jobTitle = document.getElementsByClassName("jobs-top-card__job-title")[0].innerText;
    if (document.getElementsByClassName("jobs-top-card__company-url")[0] != null) {
      var companyName = document.getElementsByClassName("jobs-top-card__company-url")[0].innerText;
    } 
    else { 
      var companyName = document.getElementsByClassName("jobs-top-card__company-info")[0].childNodes[4].textContent;
    }
    return jobTitle + ";" + companyName;
  }
  function copyFromPracujPl() {
    let jobTitle = document.getElementsByClassName("OfferView1Z5qAH")[0].innerText;
    let companyName = document.getElementsByClassName("OfferViewFf0I7D")[0].childNodes[0].nodeValue;
    return jobTitle + ";" + companyName
  }
  function copyFromNeuvoo() {
    let jobTitle = document.getElementById("job-meta-title").innerText;
    let companyName = document.getElementById("job-meta-company").innerText;
    return jobTitle + ";" + companyName
  }
  function copyFromPracaPl() {
    let jobTitle = document.getElementsByClassName("app-offer__title")[0].innerText;
    let companyName = document.getElementsByClassName("app-offer__employer-link")[0].innerText;
    return jobTitle + ";" + companyName
  }
  function copyFromIndeedCom() {
    let jobTitle = document.getElementsByClassName("icl-u-xs-mb--xs icl-u-xs-mt--none jobsearch-JobInfoHeader-title")[0].innerText;
    let companyName = document.getElementsByClassName("icl-u-lg-mr--sm icl-u-xs-mr--xs")[0].innerText;
    return jobTitle + ";" + companyName
  }
  function multiCopyToClipboard() {
    let today = new Date();
    let currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var offerURL = window.location.href;
    if (offerURL.substring(12,24) == "linkedin.com") {
      var offerData = copyFromLinkedIn();
      var offerURL = window.location.href.substring(0,46);
    } 
    else if (offerURL.substring(8,17) == "neuvoo.pl") {
      var offerData = copyFromNeuvoo();
    }
    else if (offerURL.substring(12,20) == "praca.pl") {
      var offerData = copyFromPracaPl();
    }
    else if (offerURL.substring(12,21) == "pracuj.pl") {
      var offerData = copyFromPracujPl();
    }
    else if (offerURL.substring(11,21) == "indeed.com") {
      var offerData = copyFromIndeedCom();
    }
    let text = currentDate + ";" + offerData + ";" + offerURL + ";";
    copyToClipboard(text);
    alert("Copied the text");
  }
  multiCopyToClipboard();