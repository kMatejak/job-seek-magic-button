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
    const jobTitle = document.getElementsByClassName('t-24 t-bold')[0].innerText;
    const companyName = document.getElementsByClassName("ember-view t-black t-normal")[0].innerText;
    return jobTitle + ";" + companyName;
  }

  function copyFromLinkedInOfferPage() {
    const jobTitle = document.getElementsByClassName('t-24 t-bold')[0].innerText;
    const companyName = document.getElementById('ember333').innerText;;
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
    const textToCopy = currentDate + ";" + offerData + ";" + offerURL + ";";
    copyToClipboard(textToCopy);
    alert("Copied the text");
  }

  multiCopyToClipboard();
