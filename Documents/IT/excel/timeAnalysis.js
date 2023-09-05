function getDate(props){
  let day = props.slice(8, 10);
  let month = getMonthNum(props);
  let year = props.slice(-4);
  return `${year}:${month}:${day}`;
}

const getYear = (props) => props.slice(0, 4);
const getMonth = (props) => parseInt(props.slice(5, 7));
const getDay = (props) => props.slice(8, 10);

function getWeek(props) {
  let currentDate = new Date(getYear(props), getMonth(props)-1, getDay(props));
  let startDate = new Date(getYear(props), 0, 1);
  let days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  return Math.ceil(days / 7);
}

function getMonthNum(props) {
  let month = props.slice(4 ,7);
  switch(month) {
    case 'Jan':
    month = '01';
    break;

    case 'Feb':
    month = '02';
    break;

    case 'Mar':
    month = '03';
    break;
    
    case 'Apr':
    month = '04';
    break;

    case 'May':
    month = '05';
    break;

    case 'Jun':
    month = '06';
    break;

    case 'Jul':
    month = '07';
    break;

    case 'Aug':
    month = '08';
    break;

    case 'Sep':
    month = '09';
    break;

    case 'Oct':
    month = '10';
    break;

    case 'Nov':
    month = '11';
    break;

    case 'Dec':
    month = '12';
    break;
  }
  return month;
}


function getSpentTime(start, end) {
  const extractTime = (props) => {
    return props.slice(11, 19);
  }

  const toMinutes = (props) => {
    const getMinutes = () => parseFloat(extractTime(props).slice(3,5));
    const getHours = () => parseFloat(extractTime(props).slice(0,2));
    return getHours() * 60 + getMinutes();
  }
  return toMinutes(end) - toMinutes(start);
}

