export const defaultDateFormat = (dateStr: Date | string) => {
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
    // output: 20xx. xx. xx 오후 10:00
    return new Intl.DateTimeFormat('ko-KR', options).format(date);
}
