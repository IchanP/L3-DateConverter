# Test Specification

## TC 1 Page Rendering

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

### TC2.1 User should be informed of same calendar errors

### Test Steps

1. Select the same calendar to from and to convert to.
2. Write in a [valid date](https://github.com/IchanP/L3-DateConverter/issues/4) format based on calendar you selected.
3. Press the `convert` button.

### Expected

An error message is displayed to the user telling them they cannot perform that operation as they are the same calendar.

### TC2.2 User should be informed of invalid date format errors

### Test Steps

1. Select the Gregorian Calendar to convert from
2. Select the Kõki Calendar to convert to
3. In the input field type in "27/1990"
4. Press convert

### Expected

An error message is displayed to the user telling them they cannot perform that operation as it is not an accepted date.

### TC2.3 User should be informed of invalid date when converting from Gregorian to Japanese Era

#### Test Steps

1. Select the Gregorian Calendar to convert from
2. Select the Japanese Era Calendar to convert to
3. In the input field type "644/12/25"
4. Press Convert

#### Expected

An error message is displayed to the user telling them they cannot perform that operation as there is no Japanese Era on that day.

### TC2.4 User should be informed if the Japanese Era name is invalid

#### Test Steps

1. Select the Japanese Era Calendar to convert from
2. Select the Gregorian Calendar to convert to
3. In the input field type "Invalidname 12/12"
4. Press Convert

#### Expected

An error message is displayed to the user telling them they cannot perform that operation as the Japanese Era name is invalid.

### TC2.5 User should be informed if the Japanese Era year is invalid

#### Test Steps

1. Select the Japanese Era Calendar to convert from
2. Select the Gregorian Calendar to convert to
3. In the input field type "Heisei 90/12"
4. Press Convert

#### Expected

An error message is displayed to the user telling them they cannot perform that operation as the Japanese Era year does not exist.

## TC 3 - Date Formats for Western Calendar Types

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

### TC4.1 User should be able to convert from Gregorian to Japanese Era

#### Test Steps

1. Select the Gregorian Calendar to convert from
2. Select the Japanese Era Calendar to convert to
3. In the input field type "2000/12/25"
4. Press Convert

#### Expected

In the unselectable input field "Heisei 12" is rendered.

### TC4.2 User should be able to convert from Kõki to Japanese Era

#### Test Steps

1. Select the Kõki Calendar to convert from
2. Select the Japanese Era Calendar to convert to
3. In the input field type "2000/12/25"
4. Press Convert

#### Expected

In the unselectable input field "Ryakuõ 4" is rendered.

## TC5 Date Formats for Japense Calendar style

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

### TC6.1 User should be able to convert from Gregorian to Kõki

#### Test Steps

1. Select the Gregorian Calendar to convert from
2. Select the Kõki Calendar to convert to
3. In the input field type "2000/12/25"
4. Press Convert

#### Expected

In the unselectable input field "2660/12/25" is rendered.

### TC6.2 User should be able to convert from Japanese Era to Kõki

#### Test Steps

1. Select the Japanese Era Calendar to convert from
2. Select the Kõki Calendar to convert to
3. In the input field type "Heisei 12/12"
4. Press Convert

#### Expected

In the unselectable input field "2660/12/25" is rendered.

## TC7 User should be able to convert to Gregorian using the Small Date Converter

### TC7.1 User should be able to convert from Kõki to Gregorian

#### Test Steps

1. Select the Kõki Calendar to convert from
2. Select the Gregorian Calendar to convert to
3. In the input field type "2660/12/25"
4. Press Convert

#### Expected

In the unselectable input field "2000/12/25" is rendered.

### TC7.2 User should be able to convert from Japanese Era to Gregorian

#### Test Steps

1. Select the Japanese Era Calendar to convert from
2. Select the Gregorian Calendar to convert to
3. In the input field type "Heisei 12/12"
4. Press Convert

#### Expected

In the unselectable input field "2000/12/25" is rendered.

## TC8 User should be informed of possible date formats

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

### TC9.1 User should be able to convert from Gregorian to Japanese Era

#### Test Steps

1. Select the Gregorian Calendar to convert from
2. Select the Japanese Era Calendar to convert to
3. In the input field type "TestCase 9 2000/12/25 TestCase 9"
4. Press Convert

#### Expected

In the unselectable input field "Heisei 12" is rendered.

### TC9.2 User should be able to convert from Kõki to Japanese Era

#### Test Steps

1. Select the Kõki Calendar to convert from
2. Select the Japanese Era Calendar to convert to
3. In the input field type "TestCase 9 2660/12/25 TestCase 9"
4. Press Convert

#### Expected

In the unselectable input field "Heisei 13" is rendered.

## TC10 User should be able to convert from Western Calendar types using many different formats

### TC10.1 User should be able to convert from Kõki to Gregorian using many different formats

#### Test Steps

1. Select the Kõki Calendar to convert from
2. Select the Gregorian Calendar to convert to
3. In the input field type "TestCase 10 2660/12/25 TestCase 10 2660/12/26 TestCase 10 2660/12/25 TestCase 10 2660/12 TestCase 10 2660/12"
4. Press Convert

#### Expected

In the unselectable input field "2000/12/25 TestCase 10 2000/12/26 TestCase 10 2000/12/25 TestCase 10 2000/12 TestCase 10 2000/12" is rendered.

### TC10.2 User should be able to convert from Gregorian to Japanese Era using many different formats

#### Test Steps

1. Select the Gregorian Calendar to convert from
2. Select the Japanese Era Calendar to convert to
3. In the input field type "TestCase 10 2000/12/25 TestCase 10 26/12/2000 TestCase 10 12/25/2000 TestCase 10 12/2000 TestCase 10 2000/12"
4. Press Convert

#### Expected

In the unselectable input field "Heisei 12 TestCase 10 Heisei 12 TestCase 10 Heisei 12 TestCase 10 Heisei 12 TestCase 10 Heisei 12" is rendered.

### TC11 User should be able to convert to Kõki using the Big Text Converter

### TC11.1 User should be able to convert from Gregorian to Kõki

#### Test Steps

1. Select the Gregorian Calendar to convert from
2. Select the Kõki Calendar to convert to
3. In the input field type "TestCase 11 2000/12/25 TestCase 11"
4. Press Convert

#### Expected

In the unselectable input field "2660/12/25" is rendered.

### TC11.2 User should be able to convert from Japanese Era to Kõki

#### Test Steps

1. Select the Japanese Era Calendar to convert from
2. Select the Kõki Calendar to convert to
3. In the input field type "TestCase 11 Heisei 12 TestCase 11"
4. Press Convert

#### Expected

In the unselectable input field "2660/12/25" is rendered.

## TC12 User should be able to convert to Gregorian using the Big Text Converter

### TC12.1 User should be able to convert from Kõki to Gregorian

#### Test Steps

1. Select the Kõki Calendar to convert from
2. Select the Gregorian Calendar to convert to
3. In the input field type "TestCase 12 2660/12/25 TestCase 12"
4. Press Convert

#### Expected

In the unselectable input field "2000/12/25" is rendered.

### TC12.2 User should be able to convert from Japanese Era to Gregorian

#### Test Steps

1. Select the Japanese Era Calendar to convert from
2. Select the Gregorian Calendar to convert to
3. In the input field type "TestCase 12 Heisei 12 TestCase 12"
4. Press Convert

#### Expected

In the unselectable input field "2000/12/25" is rendered.
