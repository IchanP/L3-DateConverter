# Vision

## DateConverter (TBD)

 Should be an easy and painless way for users to quickly edit dates in longer articles/texts to fit a different calendar.
 DateConverter aims to be a seamless, non-confusing way for users to quickly convert dates in larger texts, or simply dates to different calendars.

### Users

Anyone who wishes to convert a date to another form of calendar or quickly edit a longer text to match a different calendar.

## Requirements

### Functional Requirements

* Users can input or upload longer text into the application. The app will automatically identify dates within the text and provide an extract with the modified dates.

* The app should use the [TemporalConverter](https://github.com/IchanP/TemporalConverter) module to convert between calendars.

* The user should be able to convert interchangably between [Kōki](https://en.wikipedia.org/wiki/Japanese_imperial_year), [Japanese Era](https://en.wikipedia.org/wiki/Japanese_era_name) and the [Gregorian](https://en.wikipedia.org/wiki/Gregorian_calendar) calendars.

* For [Gregorian](https://en.wikipedia.org/wiki/Gregorian_calendar) it should, in text, recognize the following formats:

| Date Format     |
|-----------------|
| YYYY/MM/DD      |
| DD/MM/YYYY      |
| MM/DD/YYYY      |
| "Month" Year    |
| Year "Month"    |
| MM/YYYY         |
| YYYY/MM         |

### Non-Functional Requirements

* All code must be encapsulated inside a class, unless it is required to start the code.

### Tech Stack

Webserver: Vite

Language: Vanilla Javascript
