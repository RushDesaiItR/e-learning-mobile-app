export function isDateInThisWeek(date) {
    const todayObj = new Date();
    const todayDate = todayObj.getDate();
    const todayDay = todayObj.getDay();
  
    // get first date of week
    const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay));
    firstDayOfWeek.setHours(0)
    firstDayOfWeek.setMinutes(0)
    // get last date of week
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);
  
    // if date is equal or within the first and last dates of the week
    return date >= firstDayOfWeek && date <= lastDayOfWeek;
}
export const formatTimeFrom =(dateString)=>{
  let dateObj = new Date(dateString)
  function checkTime(i) {
      return (i < 10) ? "0" + i : i;
  }
  let hours = checkTime(dateObj.getHours())
  let mins = checkTime(dateObj.getMinutes())
  let ampm = 'AM'
  if(hours >= 12){
      hours = hours -12;
      hours = hours ? hours : 12;
      ampm = 'PM'
  }
  return hours+':'+mins+' '+ampm
}
export function checkInBetween(from,to){
    const offset =0;
    const t = new Date().getTime()
    let t1 = new Date(from).getTime()
    let t2 = new Date(to).getTime()
    t1 = t1 - offset;
    t2 = t2 - offset;
    if(t1 < t && t < t2){ console.log('returning true')
      return true
    }else{
      return false
    }
}

export function formatClassroomName(standard, section){
    const th = standard === 1?'st':standard === 2?'nd':'th'
    return standard+th+' '+section
}
