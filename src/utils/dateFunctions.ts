export const checkIfDateIsToday = (dateString: string): boolean => {
  const [year, month, date] = dateString.split('-');
  const current = {
    year: new Date(Date.now()).getFullYear(),
    month: new Date(Date.now()).getMonth() + 1,
    date: new Date(Date.now()).getDate(),
  };
  if (Number.parseInt(year) == current.year && Number.parseInt(month) == current.month && Number.parseInt(date) == current.date) {
    return true;
  }
  return false;
};

export const checkIfPastDate = (dateString: string): boolean => {
  const current = {
    year: new Date(Date.now()).getFullYear(),
    month: new Date(Date.now()).getMonth(),
    date: new Date(Date.now()).getDate(),
  };
  if (new Date(current.year, current.month, current.date).getTime() > new Date(dateString).getTime()) {
    return true;
  }
  return false;
};

export const calculateDaysBetween = (dateString1: string, dateString2: string): number => {
  const dayMs = 24 * 60 * 60 * 100;
  return (new Date(dateString1).getTime() - new Date(dateString2).getTime()) / dayMs;
};
