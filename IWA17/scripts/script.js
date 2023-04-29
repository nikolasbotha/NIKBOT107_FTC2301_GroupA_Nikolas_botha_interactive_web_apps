// scripts.js

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDaysInMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Only edit below

const createArray = (x) => {
  const result = [];

  for (let i = 0; i <= x; i++) {
    result.push(null);
  }
  return result;
};

const createData = () => {
  const current = new Date();
  current.setDate(1);
  const startDay = current.getDay();
  const daysInMonth = getDaysInMonth(current);

  const weeks = createArray(5);
  const days = createArray(6);
  let value = null;
  let daysArray = [];

  for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
    value = {
      week: weekIndex + 1,
      days: [],
    };

    for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
      let date = dayIndex - startDay + 7 * weekIndex + 1;
      let isValid = date > 0 && date <= daysInMonth;

      value.days.unshift({
        dayOfWeek: dayIndex,
        value: isValid ? date : "",
      });
    }
    daysArray.push(value)
  }
  console.log(daysArray)
  return daysArray
};


const addCell = (existing, classString, value) => {
    const result = /* html */ `
        <td class="${classString}">
            ${value}
        </td>

        ${existing}
    `
    return result
}

const createHtml = (data) => {
    let result = ''

    for (let x = 0; x < 6; x ++) {
      const weekNumber = data[x]
        let inner = ""
        // inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${weekNumber.week}`)
        console.log(addCell)
        
        for (let dayOfWeek =0; dayOfWeek < 7 ; dayOfWeek++) {
          const day = weekNumber.days[dayOfWeek]

          let classString = "table__cell";
		 			const isToday = new Date().getDate() === day.value
          const isWeekend = day.dayOfWeek == 1 || day.dayOfWeek == 7
          const isAlternate = weekNumber.week%2 == 0

		 				if (isToday) {classString = `${classString} table__cell_today`}
            if (isWeekend) {classString = `${classString} table__cell_weekend`}
            if (isAlternate) {classString = `${classString} table__cell_alternate`}
            inner = addCell(inner, classString, day.value)

       }
       inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${weekNumber.week}`)
         result += `<tr>${inner}</tr>`
         
    }
    return result
}
 



// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)

