export function getDate(dateString: string) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedDate = `${year}/${month}/${day}`;
    return formattedDate;
}