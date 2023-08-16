javascript:(function(){  
  function copyFromLinkedInSearchPage() {    
    const jobTitle = document.getElementsByClassName("t-24 t-bold jobs-unified-top-card__job-title")[0].innerText;    
    const companyName = document.getElementsByClassName("app-aware-link ")[6].innerText;    
    return [jobTitle, companyName];  
  }  
  function copyFromLinkedInOfferPage() {    
    const jobTitle = document.getElementsByClassName('t-24 t-bold')[0].innerText;    
    const companyName = document.getElementsByClassName('app-aware-link')[7].innerText;   
    return [jobTitle, companyName];  
  }  
  function copyFromJustJoinIT() {    
    const jobTitle = document.getElementsByClassName('css-1id4k1')[0].innerText;    
    const companyName = document.getElementsByClassName('css-l4opor')[0].innerText;    
    return [jobTitle, companyName];  
  }  
  function copyFromBulldogJob() {    
    const jobTitle = document.getElementsByTagName("h1")[0].innerText;    
    const companyName = document.getElementsByTagName("h2")[0].innerText;    
    return [jobTitle, companyName];  
  }
  function copyFromPracujPLOfferPage() {
    const jobTitle = document.getElementsByTagName("h1")[0].innerText;
    const companyName = document.getElementsByTagName("h2")[0].innerHTML.split("<")[0];
    return [jobTitle, companyName];
  }
  function multiCopyToClipboard() {    
    let offerData = null;    
    let offerURL = window.location.href;    
    if (offerURL.substring(12,42) == "linkedin.com/jobs/collections/") {      
      offerData = copyFromLinkedInSearchPage();    
    }    
    else if (offerURL.substring(12,35) == "linkedin.com/jobs/view/") {      
      offerData = copyFromLinkedInOfferPage();      
      offerURL = window.location.href.substring(0,46);    
    }    
    else if (offerURL.substring(8,27) == "justjoin.it/offers/") {      
      offerData = copyFromJustJoinIT();    
    }    
    else if (offerURL.substring(8,22) == "bulldogjob.pl/") {      
      offerData = copyFromBulldogJob();    
    }    
    else if (offerURL.substring(12,22) === "pracuj.pl/") {
      offerData = copyFromPracujPLOfferPage();
      offerURL = window.location.href.split('?')[0];
    }
    return [offerData, offerURL];  
  }  
  text=multiCopyToClipboard();  
  my_window=window.open('https://script.google.com/macros/s/<YOUR-WEB-APP-ID>/exec?jobTitle=%27+encodeURIComponent(text[0][0])+%27&companyName=%27+encodeURIComponent(text[0][1])+%27&url=%27+encodeURIComponent(text[1]));  (window.setTimeout(function(){my_window.close();},100));  void(0);})();
