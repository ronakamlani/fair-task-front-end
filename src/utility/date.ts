import moment from "moment";

const nth = function(d:number) {
    const dString = String(d);
    const last = +dString.slice(-2);
    if (last > 3 && last < 21) return 'th';
    switch (last % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
}

const formatAMPM = (date:Date)=> {
    var hours:number = date.getHours();
    var minutes:number = date.getMinutes();
    var ampm:string = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    let minutesStr = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutesStr + ' ' + ampm;
    return strTime;
}

export const  getRedableDate = (date:string) =>{
    let d = new Date(date);
    return `${d.getDay()+1}${nth( d.getDay()+1 )} ${d.toLocaleString('default', { month: 'short' })}, ${d.getFullYear().toString().substring(2)} ${formatAMPM(d)} `;
}

export const isBeforeDates = (date2:Date) => {
    //console.log("isBefore",moment(new Date()).isBefore(moment(date2)));
    return moment(new Date()).isBefore(moment(date2))
};


export const isBeforeXminsDates = (date2:Date,xMins:number) => {
    //console.log("isBefore",moment(new Date()).add(xMins,"minutes").isBefore(moment(date2)));
    return moment(new Date()).add(xMins,"minutes").isBefore(moment(date2))
};
