const ordinal = require("ordinal"); // to import 2 packages form NPM
const {days, months} = require("date-names"); // package name in double quotes

exports.formatDate = function(date, format) { // this is sth to be exported or to be required by sth outside
  return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
    if (tag == "YYYY") return date.getFullYear();
    if (tag == "M") return date.getMonth();
    if (tag == "MMMM") return months[date.getMonth()];
    if (tag == "D") return date.getDate();
    if (tag == "Do") return ordinal(date.getDate());
    if (tag == "dddd") return days[date.getDay()];
  });
};

// suppose below is another .js file
const {formatDate} = require("./format-date"); // import/require the very module just created

console.log(formatDate(new Date(2017, 9, 13),
                       "dddd the Do"));
// → Friday the 13th