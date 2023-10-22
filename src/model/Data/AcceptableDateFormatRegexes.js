export const AcceptableBasicDateFormats = {
  yearMonthDate: /^(?!0{1,4})(\d{1,4})\/(?:(0?[1-9])|(1[0-2]))\/(0[1-9]|[12][0-9]|3[01])$/,
  dateMonthYear: /^(0[1-9]|[12][0-9]|3[01])\/(?:(0?[1-9])|(1[0-2]))\/(?!0{1,4})(\d{1,4})$/,
  monthDateYear: /^(?:(0?[1-9])|(1[0-2]))\/(0[1-9]|[12][0-9]|3[01])\/(?!0{1,4})(\d{1,4})$/,
  monthYear: /^(?:(0?[1-9])|(1[0-2]))\/(?!0{1,4})(\d{1,4})$/,
  yearMonth: /^(?!0{1,4})(\d{1,4})\/(?:(0?[1-9])|(1[0-2]))$/
}

export const AcceptableJapaneseEraDateFormats = {
  yearMonth: /^[a-zA-Z]{1,30}\s(?!0{1,2})([1-9]\d?)\/(0?[1-9]|1[0-2])$/,
  year: /^[a-zA-Z]{1,30}\s([1-9]\d?)$/
}

export const LargeTextAcceptableBasicDateFormats = {
  yearMonthDate: /(?!0{1,4})(\d{1,4})\/(?:(0?[1-9])|(1[0-2]))\/(0[1-9]|[12][0-9]|3[01])/g,
  dateMonthYear: /(0[1-9]|[12][0-9]|3[01])\/(?:(0?[1-9])|(1[0-2]))\/(?!0{1,4})(\d{1,4})/g,
  monthDateYear: /(?:(0?[1-9])|(1[0-2]))\/(0[1-9]|[12][0-9]|3[01])\/(?!0{1,4})(\d{1,4})/g,
  monthYear: /(?:(0?[1-9])|(1[0-2]))\/(?!0{1,4})(\d{1,4})/g,
  yearMonth: /(?!0{1,4})(\d{1,4})\/(?:(0?[1-9])|(1[0-2]))/g

}

export const LargeTextAccpetableJapaneseEraDateFormats = {
  yearMonth: /[a-zA-Z]{1,30}\s(?!0{1,2})([1-9]\d?)\/(0?[1-9]|1[0-2])/g,
  year: /[a-zA-Z]{1,30}\s([1-9]\d?)/g

}