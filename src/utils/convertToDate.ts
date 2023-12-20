import moment from "moment";
const convertDateTime = (datetime: number) => {
  const momentUtc = moment.utc(datetime);
  const vietnamDate = momentUtc.utcOffset(420).format("YYYY-MM-DD");
  return vietnamDate
};
export default convertDateTime