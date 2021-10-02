export function formatDate(dateString: string) {
  return new Intl.DateTimeFormat('ru-RU', { weekday: 'short', month: 'long', day: 'numeric' })
    .format(new Date(dateString))
    .replaceAll(',', '\n')
}

export function useSchedule(selector: string) {
  console.log({ selector });
}
