# Test Specification

## TC 1 Page Rendering

#### Connected Issue

[Issue #6](https://github.com/IchanP/L3-DateConverter/issues/6)

### TC 1.1 The front page should render on application start

#### Test Steps

1. Open the application by typing `npm run dev` in the terminal.
2. Navigate to the URL that Vite provides, likely: `http://localhost:5173`.

#### Expected Result

The front page of the application should now be rendered

### TC1.2 Clicking the Big Conversion Page link in the header should render the second page

#### Test Steps

1. Test step 1.1 done
2. Click on the "Big Text Conversion" link in the header.

#### Expected Result

The "Big Text Conversion" page of the application is now rendered.

### TC1.3 Clicking the Small Date Conversion Page link in the header should render the third page

### Test Steps

1. Test step 1.1 done
2. Click on the "Small Date Conversion"  link in the header.

#### Expected Result

The "Small Date Conversion Page" is now rendered.

## TC 2 Error Rendering on Small Date Conversion Page

#### Connected Issue

[Issue #8](https://github.com/IchanP/L3-DateConverter/issues/8)

### Common steps

1. Navigate to the "Small Date Conversion Page"

### TC2.1 User should be informed of same calendar errors

### Test Steps

2. Select the same calendar to from and to convert to.
3. Write in a [valid date](https://github.com/IchanP/L3-DateConverter/issues/4) format based on calendar you selected.
4. Press the `convert` button.

### Expected

An error message is displayed to the user telling them they cannot perform that operation as they are the same calendar.

### TC2.2 User should be informed of invalid date format errors

### Test Steps

2. Select the Gregorian Calendar to convert from
3. Select the Kõki Calendar to convert to
4. In the input field type in "27/1990"
5. Press convert

### Expected

An error message is displayed to the user telling them they cannot perform that operation as it is not an accepted date.

### TC2.3 User should be informed of invalid date when converting from Gregorian to Japanese Era

#### Test Steps

2. Select the Gregorian Calendar to convert from
3. Select the Japanese Era Calendar to convert to
4. In the input field type "644/12/25"
5. Press Convert

#### Expected

An error message is displayed to the user telling them they cannot perform that operation as there is no Japanese Era on that day.

### TC2.4 User should be informed if the Japanese Era name is invalid

#### Test Steps

2. Select the Japanese Era Calendar to convert from
3. Select the Gregorian Calendar to convert to
4. In the input field type "Invalidname 12/12"
5. Press Convert

#### Expected

An error message is displayed to the user telling them they cannot perform that operation as the Japanese Era name is invalid.

### TC2.5 User should be informed if the Japanese Era year is invalid

#### Test Steps

2. Select the Japanese Era Calendar to convert from
3. Select the Gregorian Calendar to convert to
4. In the input field type "Heisei 90/12"
5. Press Convert

#### Expected

An error message is displayed to the user telling them they cannot perform that operation as the Japanese Era year does not exist.

## TC 3 - Date Formats for Western Calendar Types

#### Connected Issue

[Issue #4](https://github.com/IchanP/L3-DateConverter/issues/4)

#### Common Steps

1. Navigate to the "Small Date Conversion Page"
2. Select the Gregorian Calendar to convert from
3. Select the Kõki Calendar to convert to

### TC3.1 User should be able to convert using MM/YYYY format

### Test Steps

4. In the input field type "12/2000"
5. Press Convert

### Expected

In the unselectable input field "Kõki 2660/12" is rendered.

### TC 3.2 User should be able to convert using YYYY/MM format

4. In the input field type "2000/12"
5. Press Convert

### Expected

In the unselectable input field "Kõki 2660/12" is rendered.

### TC3.3 User should be able to convert using MM/DD/YYYY format

### Test Steps

4. In the input field type "12/25/2000"
5. Press Convert

### Expected

In the unselectable input field "Kõki 2660/12/25" is rendered.

### TC3.4 User should be able to convert using DD/MM/YYYY format

### Test Steps

4. In the input field type "25/12/2000"
5. Press Convert

### Expected

In the unselectable input field "Kõki 2660/12/25" is rendered.

### TC3.5 User should be able to convert using YYYY/MM/DD format

### Test Steps

4. In the input field type "2000/12/25"
5. Press Convert

### Expected

In the unselectable input field "Kõki 2660/12/25" is rendered.

## TC4 User should be able to convert to Japanese Era using the Small Date Converter

#### Connected Issue

[Issue #7](https://github.com/IchanP/L3-DateConverter/issues/7)

[Issue #3](https://github.com/IchanP/L3-DateConverter/issues/3)

#### Common Steps

1. Navigate to the "Small Date Conversion Page"

### TC4.1 User should be able to convert from Gregorian to Japanese Era

#### Test Steps

2. Select the Gregorian Calendar to convert from
3. Select the Japanese Era Calendar to convert to
4. In the input field type "2000/12/25"
5. Press Convert

#### Expected

In the unselectable input field "Heisei 12" is rendered.

### TC4.2 User should be able to convert from Kõki to Japanese Era

#### Test Steps

2. Select the Kõki Calendar to convert from
3. Select the Japanese Era Calendar to convert to
4. In the input field type "2000/12/25"
5. Press Convert

#### Expected

In the unselectable input field "Ryakuõ 4" is rendered.

## TC5 Date Formats for Japense Calendar style

#### Connected Issue

[Issue #4](https://github.com/IchanP/L3-DateConverter/issues/4)

#### Common Steps

1. Navigate to the "Small Date Conversion Page"
2. Select the Japanese Era Calendar to convert from
3. Select the Gregorian Calendar to convert to

### TC5.1 User should be able to convert using EraName YY format

#### Test Steps

4. In the input field type "Heisei 12"
5. Press Convert

#### Expected

In the unselectable input field "2000 CE" is rendered.

### TC5.2 User should be able to convert using EraName YY/MM format

#### Test Steps

4. In the input field type "Heisei 12/12"
5. Press Convert

#### Expected

In the unselectable input field "December 2000 CE" is rendered.

## TC6 User should be able to convert to Kõki using the Small Date Converter

#### Connected Issue

[Issue #7](https://github.com/IchanP/L3-DateConverter/issues/7)

[Issue #3](https://github.com/IchanP/L3-DateConverter/issues/3)

### Common Steps

1. Navigate to the "Small Date Conversion Page"

### TC6.1 User should be able to convert from Gregorian to Kõki

#### Test Steps

2. Select the Gregorian Calendar to convert from
3. Select the Kõki Calendar to convert to
4. In the input field type "Kõki 2000/12/25"
5. Press Convert

#### Expected

In the unselectable input field "Kõki 2660/12/25" is rendered.

### TC6.2 User should be able to convert from Japanese Era to Kõki

#### Test Steps

2. Select the Japanese Era Calendar to convert from
3. Select the Kõki Calendar to convert to
4. In the input field type "Heisei 12/12"
5. Press Convert

#### Expected

In the unselectable input field "Kõki 2660/12" is rendered.

## TC7 User should be able to convert to Gregorian using the Small Date Converter

#### Connected Issue

[Issue #7](https://github.com/IchanP/L3-DateConverter/issues/7)

[Issue #3](https://github.com/IchanP/L3-DateConverter/issues/3)

### Common Steps

1. Navigate to the "Small Date Conversion Page"

### TC7.1 User should be able to convert from Kõki to Gregorian

#### Test Steps

2. Select the Kõki Calendar to convert from
3. Select the Gregorian Calendar to convert to
4. In the input field type "2660/12/25"
5. Press Convert

#### Expected

In the unselectable input field "25 December 2001 CE" is rendered.

### TC7.2 User should be able to convert from Japanese Era to Gregorian

#### Test Steps

2. Select the Japanese Era Calendar to convert from
3. Select the Gregorian Calendar to convert to
4. In the input field type "Heisei 12/12"
5. Press Convert

#### Expected

In the unselectable input field "December 2000 CE" is rendered.

## TC8 User should be informed of possible date formats

#### Connected Issue

[Issue #10](https://github.com/IchanP/L3-DateConverter/issues/10)

### TC8.1 User should be informed of possible date formats on the Small Date Conversion Page

#### Test Steps

1. Navigate to the "Small Date Conversion Page"
2. Hover over the "?" in the middle of the app.

#### Expected

A tooltip is displayed to the user telling them the possible date formats.

### TC8.2 User should be informed of possible date formats on the Big Text Conversion Page

#### Test Steps

1. Navigate to the "Big Text Conversion Page"
2. Hover over the "?".

#### Expected

A tooltip is displayed to the user telling them the possible date formats.

## TC9 User should be able to convert to Japanese Era using the Big Text Converter

#### Connected Issue

[Issue #3](https://github.com/IchanP/L3-DateConverter/issues/3)

[Issue #1](https://github.com/IchanP/L3-DateConverter/issues/1)

### Common Steps

1. Navigate to the "Big Text Conversion Page"

### TC9.1 User should be able to convert from Gregorian to Japanese Era

#### Test Steps

2. Select the Gregorian Calendar to convert from
3. Select the Japanese Era Calendar to convert to
4. In the input field type "TestCase 9 2000/12/25 TestCase 9"
5. Press Convert

#### Expected

In the unselectable input field "TestCase 9 Heisei 12 TestCase 9" is rendered.

### TC9.2 User should be able to convert from Kõki to Japanese Era

#### Test Steps

2. Select the Kõki Calendar to convert from
3. Select the Japanese Era Calendar to convert to
4. In the input field type "TestCase 9 2660/12/25 TestCase 9"
5. Press Convert

#### Expected

In the unselectable input field "TestCase 9 Heisei 13 TestCase 9" is rendered.

## TC10 User should be able to convert from Western Calendar types using many different formats using the Big Text Converter

#### Connected Issue

[Issue #11](https://github.com/IchanP/L3-DateConverter/issues/11)

[Issue #4](https://github.com/IchanP/L3-DateConverter/issues/4)

### Common Steps

1. Navigate to the "Big Text Conversion Page"

### TC10.1 User should be able to convert from Kõki to Gregorian using many different formats

#### Test Steps

2. Select the Kõki Calendar to convert from
3. Select the Gregorian Calendar to convert to
4. In the input field type "TestCase 10 2660/12/25 TestCase 10 2660/12/26 TestCase 10 2660/12/25 TestCase 10 2660/12 TestCase 10 2660/12"
5. Press Convert

#### Expected

In the unselectable input field "TestCase 10 25 December 2001 CE TestCase 10 26 December 2001 CE TestCase 10 25 December 2001 CE TestCase 10  December 2001 CE TestCase 10 December 2001 CE" is rendered.

### TC10.2 User should be able to convert from Gregorian to Japanese Era using many different formats

#### Test Steps

2. Select the Gregorian Calendar to convert from
3. Select the Japanese Era Calendar to convert to
4. In the input field type "TestCase 10 2000/12/25 TestCase 10 26/12/2000 TestCase 10 12/25/2000 TestCase 10 12/2000 TestCase 10 2000/12"
5. Press Convert

#### Expected

In the unselectable input field "TestCase 10 Heisei 12 TestCase 10 Heisei 12 TestCase 10 Heisei 12 TestCase 10 Heisei 12 TestCase 10 Heisei 12" is rendered.

### TC11 User should be able to convert to Kõki using the Big Text Converter

#### Connected Issue

[Issue #3](https://github.com/IchanP/L3-DateConverter/issues/3)

[Issue #1](https://github.com/IchanP/L3-DateConverter/issues/1)

### Common Steps

1. Navigate to the "Big Text Conversion Page"

### TC11.1 User should be able to convert from Gregorian to Kõki

#### Test Steps

2. Select the Gregorian Calendar to convert from
3. Select the Kõki Calendar to convert to
4. In the input field type "TestCase 11 2000/12/25 TestCase 11"
5. Press Convert

#### Expected

In the unselectable input field "TestCase 11 Kõki 2660/12/25 TestCase 11" is rendered.

### TC11.2 User should be able to convert from Japanese Era to Kõki

#### Test Steps

2. Select the Japanese Era Calendar to convert from
3. Select the Kõki Calendar to convert to
4. In the input field type "TestCase 11 Heisei 12 TestCase 11"
5. Press Convert

#### Expected

In the unselectable input field "TestCase 11 Kõki 2660 TestCase 11" is rendered.

## TC12 User should be able to convert to Gregorian using the Big Text Converter

#### Connected Issue

[Issue #3](https://github.com/IchanP/L3-DateConverter/issues/3)

[Issue #1](https://github.com/IchanP/L3-DateConverter/issues/1)

### Common Steps

1. Navigate to the "Big Text Conversion Page"

### TC12.1 User should be able to convert from Kõki to Gregorian

#### Test Steps

2. Select the Kõki Calendar to convert from
3. Select the Gregorian Calendar to convert to
4. In the input field type "TestCase 12 2660/12/25 TestCase 12"
5. Press Convert

#### Expected

In the unselectable input field "TestCase 12 25 December 2001 CE TestCase 12" is rendered.

### TC12.2 User should be able to convert from Japanese Era to Gregorian

#### Test Steps

2. Select the Japanese Era Calendar to convert from
3. Select the Gregorian Calendar to convert to
4. In the input field type "TestCase 12 Heisei 12 TestCase 12"
5. Press Convert

#### Expected

In the unselectable input field "TestCase 12 25 December 2000 CE TestCase 12" is rendered.

## TC13 User should be able to copy the converted date

### TC13.1 User should be able to copy the converted date on the Small Date Conversion Page

#### Test Steps

1. Navigate to the "Small Date Conversion Page"
2. Select the Gregorian Calendar to convert from
3. Select the Kõki Calendar to convert to
4. In the input field type "2000/12/25"
5. Press Convert
6. Press the button to the right of the unselectable input field.
7. Paste the copied text into the input field.

#### Expected

In the input field the text "Kõki 2660/12/25" is rendered.

### TC13.2 User should be able to copy the converted date on the Big Text Conversion Page

#### Test Steps

1. Navigate to the "Big Text Conversion Page"
2. Select the Gregorian Calendar to convert from
3. Select the Kõki Calendar to convert to
4. In the input field type "TestCase 13 2000/12/25 TestCase 13"
5. Press Convert
6. Press the button to the right of the unselectable input field.
7. Paste the copied text into the input field.

#### Expected

In the input field the text "TestCase 13 Kõki 2660/12/25 TestCase 13" is rendered.

## TC14 User should be informed of user errors on the Big Text Conversion Page

#### Conencted Issue

[Issue #8](https://github.com/IchanP/L3-DateConverter/issues/8)

### Common Steps

1. Navigate to the "Big Text Conversion Page"

### TC14.1 User should be informed of same calendar erors

#### Test Steps

2. Navigate to the "Big Text Conversion Page"
3. Select the Gregorian Calendar to convert from
4. Select the Gregorian Calendar to convert to
5. In the input field type "TestCase 14 2000/12/25 TestCase 14"
6. Press Convert

#### Expected

An error message is displayed to the user telling them they cannot perform that operation as they are the same calendar.

## TC15 User should be able to convert from Japanese Era using many different formats

#### Connected Issue

[Issue #11](https://github.com/IchanP/L3-DateConverter/issues/11)

[Issue #4](https://github.com/IchanP/L3-DateConverter/issues/4)

### TC15.1 User should be able to convert from Japanese Era to Gregorian using many different formats

#### Test Steps

1. Navigate to the "Big Text Conversion Page"
2. Select the Japanese Era Calendar to convert from
3. Select the Gregorian Calendar to convert to
4. In the input field type "TestCase 15 Heisei 12 TestCase 15 Heisei 12/2"
5. Press Convert

#### Expected

In the unselectable input field "TestCase 15 2000 CE TestCase 15 February 2000 CE" is rendered.
