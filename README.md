# Job Seek Magic Button  
  
## Table of Contents  
  
1. [Description](#Description)  
2. [Preparation](#Preparation)  
3. [Backlog](#Backlog)  
4. [Contact](#Contact)  
  
## Description  
  
Copy job offer data to Google Spreadsheet by one click:  
- current date  
- job title  
- company name  
- offer link  
    
Tested on browsers:  
    
- Brave  
  
Copying of offers is supported from these pages:  
  
- [linkedin.com](https://www.linkedin.com/)  
- ~~pracuj.pl~~  
- ~~praca.pl~~  
- ~~olx.pl~~  
- ~~rocketjobs.pl~~  
- [justjoin.it](https://justjoin.it/)
- [bulldogjob.pl](https://bulldogjob.pl/)
  
## Preparation  
  
**TODO: add description about Google's Apps Script preparation**  
  
1. Copy bookmarklet from from [**here**](bookmarklet/COPYME.md)  
2. Paste result to URL field in your browser bookmark creator  
3. ...  
  
![Helpful screenshot](images/2020-06-30-143035_800x876_scrot.png)  
  
## Changelog  
  
- 2020-6-30  
  - [**fix**] [LinkedIn] works now if company name is not a link  
  - [**enhancement**] [LinkedIn] cutting url only to the necessary part  
  - [**fix**] [LinkedIn] fixed let / var scoping
- 2020-7-15
  - [**fix**] [Pracuj.pl] fixed taking company name with "O firmie" - now takes only the name
- 2020-9-5  
  - [**enhancement**] [Indeed.com] added indeed.com  
- 2021-1-8  
  - [**fix**] [LinkedIn] updated to new linkedin pages structure  
- 2021-1-11  
  - [**mod**] [Neuvoo] removed support for neuvoo.pl  
  - [**mod**] [Indeed] added indeed to readme  
- 2021-6-22  
  - [**fix**] [LinkedIn] updated copying from LinkedIn (both)  
  - [**fix**] [Pracuj.pl] updated copying from PracaPl  
  - [**mod**] [Indeed] removed support for indeed.com  
  - [**enhancement**] [OLX] added OLX.pl  
  - [**enhancement**] [RocketJobsPL] added rocketjobs.pl  
- 2021-11-10  
  - [**fix**] [LinkedIn] updated copying from LinkedIn (both)  
- 2021-12-9  
  - [**fix**] [LinkedIn] fix copying from LinkedIn (offer page)  
- 2022-8-8  
  - [**fix**] [LinkedIn] fix copying from LinkedIn (offer page)  
- 2022-8-9  
  - [**mod**] modified for use by Apps Script (one click to copy to spreadsheet)  
  - [**enhancement**] [JustJoin.it] added justjoin.it  
- 2022-8-12    
  - [**enhancement**] [BulldogJob.pl] added bulldogjob.pl
- 2023-6-28  
  - [**fix**] [LinkedIn] fix copying from LinkedIn (offer page and search page)  
  
## Contact  
  
Created by [@kMatejak](https://github.com/kMatejak/)  
  
