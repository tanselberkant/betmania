export function convertDate(dateStr: string): { day: string; dayEng: string } {
  const months = [
    { tr: 'Ocak', en: 'January' },
    { tr: 'Şubat', en: 'February' },
    { tr: 'Mart', en: 'March' },
    { tr: 'Nisan', en: 'April' },
    { tr: 'Mayıs', en: 'May' },
    { tr: 'Haziran', en: 'June' },
    { tr: 'Temmuz', en: 'July' },
    { tr: 'Ağustos', en: 'August' },
    { tr: 'Eylül', en: 'September' },
    { tr: 'Ekim', en: 'October' },
    { tr: 'Kasım', en: 'November' },
    { tr: 'Aralık', en: 'December' },
  ];

  const [year, month, day] = dateStr.split('-');

  const monthIndex = parseInt(month) - 1;
  const monthTr = months[monthIndex].tr;
  const monthEn = months[monthIndex].en;

  const dayTr = `${parseInt(day)} ${monthTr} ${year}`;
  const dayEng = `${parseInt(day)} ${monthEn} ${year}`;

  return { day: dayTr, dayEng: dayEng };
}
