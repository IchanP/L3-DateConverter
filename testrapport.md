# TODO

## Test Cases

| Test | Description               | PASS/FAIL | Issue/Requirement |
|------|---------------------------|------------------|-----------|
| TC1.1 | The front page should render on application start. |    |  |
| TC 1.2 | |    |  |

### TC 1.1 The front page should render on application start

#### Test Steps

1. Open the application by typing `npm run dev` in the terminal.
2. Navigate to the URL that Vite provides, likely: `http://localhost:5173`.

#### Expected Result

The front page of the application should now be rendered

// TODO insert image here

### TC1.2 Clicking the Big Conversion Page link in the header should render the second page

#### Test Steps

1. Test step 1.1 done
2. Click on the "Big Text Conversion Page" // TODO rename // link in the header.

#### Expected Result

The "Big Text Conversion" page of the application is now rendered.

### TC1.3 Clicking the Small Date Conversion Page link in the header should render the third page

### Test Steps

1. Test step 1.1 done
2. Click on the "Small Date Conversion Page"  link in the header.

#### Expected Result

The "Small Date Conversion Page" is now rendered.

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