export function dateWithoutHours() {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
}

export class DateService {

    static prepareDate(date) {
        if (date && (typeof date === 'number' || typeof date === 'string')) {
            return new Date(date);
        }
        return date;
    }

    static verifyPeselBirthDate(date, _peselDate) {
        const peselDate = this.dateFromPesel(_peselDate);
        return date.getFullYear() === peselDate.getFullYear() &&
            date.getMonth() === peselDate.getMonth() &&
            date.getDay() === peselDate.getDay();
    }

    static dateFromPesel(pesel) {
        let year = parseInt(pesel.substring(0, 2));
        const month = parseInt(pesel.substring(2, 4));
        if (month > 19) {
            year += 2000;
        } else {
            year += 1900;
        }
        const day = parseInt(pesel.substring(4, 6));
        return new Date(year, month - 1, day);
    }

    static currMonthRange() {
        const currDate = new Date();
        const firstDay = new Date(currDate.getFullYear(), currDate.getMonth(), 1);
        const lastDay = new Date(currDate.getFullYear(), currDate.getMonth() + 1, 0);

        return {
            start: firstDay,
            end: lastDay
        };
    }

    static prepareDateString(uncastedDate) {

        function addZero(item) {
            if (item < 10) {
                return '0' + item;
            }
            return item;
        }

        const date = this.prepareDate(uncastedDate);
        if (date) {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            return year + '-' + addZero(month) + '-' + addZero(day) + ' ' + addZero(hours) + ':00';
        }
        return '';
    }

    static diffInDays(d1, d2) {
        const t2 = d2.getTime();
        const t1 = d1.getTime();
        return parseInt((t2 - t1) / (24 * 3600 * 1000));
    }

    static diffInWeeks(d1, d2) {
        const t2 = d2.getTime();
        const t1 = d1.getTime();
        return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7));
    }

    static diffInMonths(d1, d2) {
        const d1Y = d1.getFullYear();
        const d2Y = d2.getFullYear();
        const d1M = d1.getMonth();
        const d2M = d2.getMonth();
        return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
    }

    static diffInYears(d1, d2) {
        return d2.getFullYear() - d1.getFullYear();
    }

}
