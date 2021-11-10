# Job Seek Magic Button  
  
## Table of Contents  
  
1. [Description](#Description)  
2. [Preparation](#Preparation)  
3. [Backlog](#Backlog)  
4. [Contact](#Contact)  
  
## Description  
  
Copy job offer data by one click. The data that this script copies from the job page with the semicolon delimiter is:  
  
- current date  
- job title  
- company name  
- offer link  
  
Output data sample:  
`2021-1-8;Frontend Developer;Grupa Wirtualna Polska;https://www.linkedin.com/jobs/view/2332928981/;`  
  
Tested on browsers:  
  
- Chrome  
- Brave  
  
Copying of offers is supported from these pages:  
  
- [linkedin.com](https://www.linkedin.com/)  
- [pracuj.pl](https://www.pracuj.pl/)  
- [praca.pl](https://www.praca.pl/)  
- [olx.pl](https://www.olx.pl/)  
- [rocketjobs.pl](https://rocketjobs.pl/)  
  
Core function copyToClipboard is taken from [here](https://stackoverflow.com/a/33928558/12474392).  
  
## Preparation  
  
1. Copy bookmarklet from from [**here**](bookmarklet/COPYME.md) (converted with [mrcoles.com/bookmarklet/](https://mrcoles.com/bookmarklet/))  
2. Paste result to URL field in your browser bookmark creator  
3. Enjoy :)  
  
![Helpful screenshot](images/2020-06-30-143035_800x876_scrot.png)  
  
## Backlog  
  
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
  
## Contact  
  
Created by [@kMatejak](https://github.com/kMatejak/)  
  
