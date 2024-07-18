export const defaultDateFormat = (dateStr: Date) => {
    const date = new Date(dateStr);

    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: undefined,
        timeZone: "UTC",
        timeZoneName: undefined,
    };

    // @ts-ignore
    return new Intl.DateTimeFormat('ko-KR', options).format(date);
}
