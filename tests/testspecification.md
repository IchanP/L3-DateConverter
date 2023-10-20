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
2. Click on the "Big Text Conversion Page"1 link in the header.

#### Expected Result

The "Big Text Conversion" page of the application is now rendered.

### TC1.3 Clicking the Small Date Conversion Page link in the header should render the third page

### Test Steps

1. Test step 1.1 done
2. Click on the "Small Date Conversion Page"  link in the header.

#### Expected Result

The "Small Date Conversion Page" is now rendered.

## TC 2 Error Rendering

### TC2.1 User should be informed of same calendar errors in Small Date Converter

### Test Steps

1. Select the same calendar to from and to convert to.
2. Write in a [valid date](https://github.com/IchanP/L3-DateConverter/issues/4) format based on calendar you selected.
3. Press the `convert` button.

### Expected

An error message is displayed to the user telling them they cannot perform that operation as they are the same calendar.

### TC2.2 User should be informed of invalid date format errors in Small Date Converter

### Test Steps

1. Select the Gregorian Calendar to convert from
2. Select the Kõki Calendar to convert to
3. In the input field type in "27/1990"
4. Press convert

### Expected

An error message is displayed to the user telling them they cannot perform that operation as it is not an accepted date.

## TC 3 - Date Formats

#### Common Steps

1. Select the Gregorian Calendar to convert from
2. Select the Kõki Calendar to convert to

### TC3.1 User should be able to convert using MM/YYYY format

### Test Steps

3. In the input field type "12/2000"
4. Press Convert

### Expected

In the unselectable input field "Kõki 2660/12" is rendered.

### TC 3.2 User should be able to convert using YYYY/MM format

3. In the input field type "2000/12"
4. Press Convert

### Expected

In the unselectable input field "Kõki 2660/12" is rendered.

### TC3.3 User should be able to convert using MM/DD/YYYY format

### Test Steps

3. In the input field type "12/25/2000"
4. Press Convert

### Expected

In the unselectable input field "Kõki 2660/12/25" is rendered.

### TC3.4 User should be able to convert using DD/MM/YYYY format

### Test Steps

3. In the input field type "25/12/2000"
4. Press Convert

### Expected

In the unselectable input field "Kõki 2660/12/25" is rendered.

### TC3.5 User should be able to convert using YYYY/MM/DD format

### Test Steps

3. In the input field type "2000/12/25"
4. Press Convert

### Expected

In the unselectable input field "Kõki 2660/12/25" is rendered.

### TC4 Gregorian to Japanese Era Conversions

### TC4.1 User should be able to convert from Gregorian to Japanese Era

#### Test Steps

1. Select the Gregorian Calendar to convert from
2. Select the Japanese Era Calendar to convert to
3. In the input field type "2000/12/25"
4. Press Convert

#### Expected

In the unselectable input field "Heisei 12" is rendered.

// TODO move this somewhere else?

### TC4.2 User errors should be handled when converting from Gregorian to Japanese Era

#### Test Steps

1. Select the Gregorian Calendar to convert from
2. Select the Japanese Era Calendar to convert to
3. In the input field type "644/12/25" // TODO fix this
4. Press Convert

#### Expected

An error message is displayed to the user telling them they cannot perform that operation as there is no Japanese Date on that day.
