export function adjustTimeForLocale(time: string, locale: string) {
  // Saat ve dakika değerlerini ayır
  const [hours, minutes] = time.split(':').map(Number);

  // Şuanki tarihi al (tarih önemli değil, sadece saat için kullanılıyor)
  const now = new Date();
  now.setHours(hours, minutes, 0, 0);

  // Locale tr ise 3 saat ekle
  if (locale === 'tr') {
    now.setHours(now.getHours() + 3);
  }

  // Yeni zamanı formatla
  return now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}
