export function getDate(dateString: string) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedDate = `${year}/${month}/${day}`;
    return formattedDate;
}

export function getTimeFormat(dateString: string) {
    const originalDate = new Date(dateString);

    const hours = originalDate.getHours();
    const minutes = originalDate.getMinutes();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;

    const displayMinutes = String(minutes).padStart(2, '0');

    const formattedTime = `${displayHours}:${displayMinutes}${ampm}`;
    return formattedTime;
}