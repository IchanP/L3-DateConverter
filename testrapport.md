# Test report

* Date Performed: 2023-10-23
* Version: [62bb844ef264421c6af8c38455f88a0a4505d9e5](https://github.com/IchanP/L3-DateConverter/tree/62bb844ef264421c6af8c38455f88a0a4505d9e5)
* Browser: Chrome Version 118.0.5993.89

## Manual Test Report

| Test | Description               | PASS/FAIL | Note |
|------|---------------------------|------------------|-----------|
| [TC1]()  | **`Page Rendering`** | <span style="color: green">ALL PASS</span> | |
| [TC 1.1]() | The front page should render on application start. |  <span style="color: green">PASS</span>  |  |
| [TC 1.2]() | Clicking the Big Conversion Page link in the header should render the second page |  <span style="color: green">PASS</span>  |  |
| [TC1.3]() | Clicking the Small Date Conversion Page link in the header should render the third page | <span style="color: green">PASS</span> | |
| [TC2]() | **``Error Rendering on Small Date Conversion Page``** | <span style="color: green">ALL PASS</span> | |
| [TC2.1]() | User should be informed of same calendar errors | <span style="color: green">PASS</span> | |
| [TC2.2]() | User should be informed of invalid date format errors | <span style="color: green">PASS</span> | |
| [TC2.3]() | User should be informed of invalid date when converting from Gregorian to Japanese Era | <span style="color: green">PASS</span> | |
| [TC2.4]() | User should be informed if the Japanese Era name is invalid | <span style="color: green">PASS</span> | |
| [TC2.5]() | User should be informed if the Japanese Era year is invalid | <span style="color: green">PASS</span> | |
| [TC3]() | **`Date Formats for Western Calendar Types`** | <span style="color: green">ALL PASS</span> | |
| [TC3.1]() | User should be able to convert using `MM/YYYY` format | <span style="color: green">PASS</span> | |
| [TC3.2]() | User should be able to convert using `YYYY/MM` format | <span style="color: green">PASS</span> | |
| [TC3.3]() | User should be able to convert using `MM/DD/YYYY` format | <span style="color: green">PASS</span> | |
| [TC3.4]() | User should be able to convert using `DD/MM/YYYY` format | <span style="color: green">PASS</span> | |
| [TC3.5]() | User should be able to convert using `YYYY/MM/DD` format | <span style="color: green">PASS</span> | |
| [TC4]() | **`User should be able to convert to Japanese Era using the Small Date Converter`** | <span style="color: green">ALL PASS</span> | |
| [TC4.1]() | User should be able to convert from Gregorian to Japanese Era | <span style="color: green">PASS</span> | |
| [TC4.2]() | User should be able to convert from Kõki to Japanese Era | <span style="color: green">PASS</span> | |
| [TC5]() | **`Date Formats for Japense Calendar style`** | <span style="color: green">ALL PASS</span> | |
| [TC5.1]() | User should be able to convert using EraName YY format | <span style="color: green">PASS</span> | |
| [TC5.2]() | User should be able to convert using EraName YY/MM format | <span style="color: green">PASS</span> | |
| [TC6]() | **`User should be able to convert to Kõki using the Small Date Converter`** | <span style="color: green">ALL PASS</span> |  |
| [TC6.1]() | User should be able to convert from Gregorian to Kõki | <span style="color: green">PASS</span> | |
| [TC6.2]() | User should be able to convert from Japanese Era to Kõki | <span style="color: green">PASS</span> | |
| [TC.7]() | **`User should be able to convert to Gregorian using the Small Date Converter`** | <span style="color: green">ALL PASS</span> | |
| [TC7.1]() | User should be able to convert from Kõki to Gregorian | <span style="color: green">PASS</span> | |
| [TC7.2]() | User should be able to convert from Japanese Era to Gregorian | <span style="color: green">PASS</span> | |
| [TC8]() | **`User should be informed of possible date formats`** | <span style="color: green">ALL PASS</span> | |
| [TC8.1]() | User should be informed of possible date formats on the Small Date Conversion Page | <span style="color: green">PASS</span> | |
| [TC8.2]() | User should be informed of possible date formats on the Big Text Conversion Page | <span style="color: green">PASS</span> | |
| [TC9]() | **`User should be able to convert to Japanese Era using the Big Text Converter`** | <span style="color: green">ALL PASS</span> | |
| [TC9.1]() | User should be able to convert from Gregorian to Japanese Era | <span style="color: green">PASS</span> | |
| [TC9.2]() | User should be able to convert from Kõki to Japanese Era | <span style="color: green">PASS</span> | |
| [TC10]() | **`User should be able to convert from Western Calendar types using many different formats`** | <span style="color: green">ALL PASS</span> | |
| [TC10.1]() | User should be able to convert from Kõki to Gregorian using many different formats | <span style="color: green">PASS</span> | |
| [TC10.2]() | User should be able to convert from Gregorian to Japanese Era using many different formats | <span style="color: green">PASS</span> | |
| [TC11]() | **`User should be able to convert to Kõki using the Big Text Converter`** |  <span style="color: green">ALL PASS</span> | |
| [TC11.1]() | User should be able to convert from Gregorian to Kõki |  <span style="color: green">PASS</span> | |
| [TC11.2]() | User should be able to convert from Japanese Era to Kõki |  <span style="color: green">PASS</span> | |
| [TC12]() | **`User should be able to convert to Gregorian using the Big Text Converter`** | <span style="color: green">ALL PASS</span> | |
| [TC12.1]() | User should be able to convert from Kõki to Gregorian |  <span style="color: green">PASS</span> | |
| [TC12.2]() | User should be able to convert from Japanese Era to Gregorian |  <span style="color: green">PASS</span> | |
| [TC13]() | **`User should be able to copy the converted date`** | <span style="color: green">ALL PASS</span> | |
| [TC13.1]() | User should be able to copy the converted date on the Small Date Conversion Page | <span style="color: green">PASS</span> | |
| [TC13.2]() | User should be able to copy the converted date on the Big Text Conversion Page | <span style="color: green">PASS</span> | |
| [TC14]() | **`User should be informed of user errors on the Big Text Conversion Page`** |  <span style="color: green">ALL PASS</span> | |
| [TC14.1]() | User should be informed of same calendar erors |  <span style="color: green">PASS</span> | |
| [TC15]() | **`User should be able to convert from Japanese Era using many different formats`** | <span style="color: green">ALL PASS</span> | |
| [TC15.1]() | User should be able to convert from Japanese Era to Gregorian using many different formats | <span style="color: green">PASS</span> | |
