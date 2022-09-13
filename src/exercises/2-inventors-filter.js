const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

/**
 * Ejercicios con Filter
 * Array.prototype.filter() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */

// Filtra los inventores que nacieron en el siglo 16 (1500 - 1599)
// ejemplo: [{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }, ...]
function filterInventorsBySixteenthCentury(inventors) {}

// Filtra los inventores que nacieron en el siglo 19 (1800 - 1899)
// ejemplo: [{ first: "Albert", last: "Einstein", year: 1879, passed: 1955 },, ...]
function filterInventorsByNineTeenCentury(inventors) {}

// Filtra los inventores que vivieron al menos 50 años
// ejemplo: [{ first: "Albert", last: "Einstein", year: 1879, passed: 1955 },, ...]
function filterInventorsByLivedMoreThan80Years(inventors) {}

// Filtra los inventores que murieron en el siglo 20 (1900 - 1999)
// ejemplo: [{ first: "Albert", last: "Einstein", year: 1879, passed: 1955 },, ...]
function filterInventorsByDiedIn20thCentury(inventors) {}

// Filtra los inventores que tienen mas de 8 letras en su primer nombre
// ejemplo: [{ first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },, ...]
function filterInventorsByFirstNameWithMoreThan8Letters(inventors) {}

// Filtra los inventores que vivieron al menos lo que especifica el parametro yearsAlive
// ejemplos:
// ejecutar: filterInventorsByLivedAtLeast(inventors, 90)
// resultado: [{ first: "Lise", last: "Meitner", year: 1878, passed: 1968 }, ...]
function filterInventorsByLivedAtLeast(inventors, yearsAlive) {}

module.exports = {
  inventors,
  filterInventorsBySixteenthCentury,
  filterInventorsByNineTeenCentury,
  filterInventorsByLivedMoreThan80Years,
  filterInventorsByDiedIn20thCentury,
  filterInventorsByFirstNameWithMoreThan8Letters,
  filterInventorsByLivedAtLeast,
};
