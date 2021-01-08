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

  function copyFromLinkedInSearchPage() {
    const jobTitle = document.getElementsByClassName('jobs-details-top-card__job-title')[0].innerText;
    const companyName = document.getElementsByClassName("jobs-details-top-card__company-url")[0].innerText;
    return jobTitle + ";" + companyName;
  }

  function copyFromLinkedInOfferPage() {
    const jobTitle = document.getElementsByClassName('t-24')[0].innerText;
    const companyName = document.getElementById('ember333').innerText;;
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
    if (offerURL.substring(12,37) == "linkedin.com/jobs/search/") {
      var offerData = copyFromLinkedInSearchPage();
      var offerURL = window.location.href.substring(0,46);
    }
    else if (offerURL.substring(12,35) == "linkedin.com/jobs/view/") {
      var offerData = copyFromLinkedInOfferPage();
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