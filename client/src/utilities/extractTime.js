export function extractTime(timestamp) {
  let date;
  if (/^\d+$/.test(timestamp)) {
    date = new Date(parseInt(timestamp));
  } else {
    date = new Date(timestamp);
  }
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`;
  return formattedTime;
}
