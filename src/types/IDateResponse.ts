export interface IHolidayInfo {
  date: string
  localName: string
  name: string
  countryCode: string
  fixed: boolean
  global: boolean
  counties: Array<string>
  launchYear: any
  types: Array<string>
}

export type IDateResponse = Array<IHolidayInfo>
