export interface ICompanyDetail {
    name: string,
    openingHours: [
        {
            closingTime: string,
            date: string,
            day: string
            openingTime: string
        }
    ]
}