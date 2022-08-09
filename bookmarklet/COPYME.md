javascript:(function(){
  function copyFromLinkedInSearchPage() {
    const jobTitle = document.getElementsByClassName("t-16 t-black t-bold truncate")[0].innerText;
    const companyName = document.getElementsByClassName('mt2')[0].children[0].children[0].innerText.trim();
    return [jobTitle, companyName];
  }
  function copyFromLinkedInOfferPage() {
    const jobTitle = document.getElementsByClassName('t-24 t-bold')[0].innerText;
    const companyName = document.getElementById('ember25').innerText;
    return [jobTitle, companyName];
  }
  function copyFromJustJoinIT() {
    const jobTitle = document.getElementsByClassName('css-1id4k1')[0].innerText;
    const companyName = document.getElementsByClassName('css-l4opor')[0].innerText;
    return [jobTitle, companyName];
  }
  function multiCopyToClipboard() {
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
    return [offerData, offerURL];
  }
  my_window=window.open('https://script.google.com/macros/s/<YOUR-WEB-APP-ID>/exec?jobTitle='+encodeURIComponent(text[0][0])+'&companyName='+encodeURIComponent(text[0][1])+'&url='+encodeURIComponent(text[1]));
  (window.setTimeout(function(){my_window.close();},100));
  void(0);
})();
