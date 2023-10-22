# Test report

* Date Performed: 2023-10-22
* Version: 671b4e47514fb6290b20e4268403ea6246435126
* Browser: Chrome Version 118.0.5993.89

## Manual Test Report

<span style="color: green">PASS</span>
<span style="color: red weight: bold"></span>

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
| [TC3]() | **`Date Formats for Western Calendar Types`** | | |
| [TC3.1]() | User should be able to convert using `MM/YYYY` format | | |
| [TC3.2]() | User should be able to convert using `YYYY/MM` format | | |
| [TC3.3]() | User should be able to convert using `MM/DD/YYYY` format | | |
| [TC3.4]() | User should be able to convert using `DD/MM/YYYY` format | | |
| [TC3.5]() | User should be able to convert using `YYYY/MM/DD` format | | |
| [TC4]() | **`User should be able to convert to Japanese Era using the Small Date Converter`** | | |
| [TC4.1]() | User should be able to convert from Gregorian to Japanese Era | | |
| [TC4.2]() | User should be able to convert from Kõki to Japanese Era | | |
| [TC5]() | **`Date Formats for Japense Calendar style`** | | |
| [TC5.1]() | User should be able to convert using EraName YY format | | |
| [TC5.2]() | User should be able to convert using EraName YY/MM format | | |
| [TC6]() | **`User should be able to convert to Kõki using the Small Date Converter`** | | |
| [TC6.1]() | User should be able to convert from Gregorian to Kõki | | |
| [TC6.2]() | User should be able to convert from Japanese Era to Kõki | | |
| [TC.7]() | **`User should be able to convert to Gregorian using the Small Date Converter`** | | |
| [TC7.1]() | User should be able to convert from Kõki to Gregorian | | |
| [TC7.2]() | User should be able to convert from Japanese Era to Gregorian | | |
| [TC8]() | **`User should be informed of possible date formats`** | | |
| [TC8.1]() | User should be informed of possible date formats on the Small Date Conversion Page | | |
| [TC8.2]() | User should be informed of possible date formats on the Big Text Conversion Page | | |
| [TC9]() | **`User should be able to convert to Japanese Era using the Big Text Converter`** | | |
| [TC9.1]() | User should be able to convert from Gregorian to Japanese Era | | |
| [TC9.2]() | User should be able to convert from Kõki to Japanese Era | | |
| [TC10]() | **`User should be able to convert from Western Calendar types using many different formats`** | | |
| [TC10.1]() | User should be able to convert from Kõki to Gregorian using many different formats | | |
| [TC10.2]() | User should be able to convert from Gregorian to Japanese Era using many different formats | | |
| [TC11]() | **`User should be able to convert to Kõki using the Big Text Converter`** | | |
| [TC11.1]() | User should be able to convert from Gregorian to Kõki | | |
| [TC11.2]() | User should be able to convert from Japanese Era to Kõki | | |
| [TC12]() | **`User should be able to convert to Gregorian using the Big Text Converter`** | | |
| [TC12.1]() | User should be able to convert from Kõki to Gregorian | | |
| [TC12.2]() | User should be able to convert from Japanese Era to Gregorian | | |
| [TC13]() | **`User should be able to copy the converted date`** | | |
| [TC13.1]() | User should be able to copy the converted date on the Small Date Conversion Page | | |
| [TC13.2]() | User should be able to copy the converted date on the Big Text Conversion Page | | |
| [TC14]() | **`User should be informed of user errors on the Big Text Conversion Page`** | | |
| [TC14.1]() | User should be informed of same calendar erors | | |
| [TC15]() | **`User should be able to convert from Japanese Era using many different formats`** | | |
| [TC15.1]() | User should be able to convert from Japanese Era to Gregorian using many different formats | | |
