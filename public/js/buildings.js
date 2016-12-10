var buildings = [
	{name: "bh", year: 1865, fullname: "Boynton Hall"},
	{name: "wb", year: 1865, fullname: "Washburn Shops"},
	{name: "st", year: 1886, fullname: "Magnetic Laboratory"},
	{name: "sl", year: 1889, fullname: "Salisbury Laboratories"},
	{name: "sh", year: 1894, fullname: "Stratton Hall"},
	{name: "pc", year: 1902, fullname: "Project Center"},
	{name: "ee", year: 1906, fullname: "The Great Laboratories"},
	{name: "ag", year: 1916, fullname: "Alumni Gymnasium"},
	{name: "hh", year: 1923, fullname: "Higgins House"},
	{name: "rh", year: 1926, fullname: "S. Riley Hall"},
	{name: "ah", year: 1940, fullname: "Alden Memorial Hall"},
	{name: "hl", year: 1941, fullname: "Higgins Laboratories"},
	{name: "kh", year: 1954, fullname: "Kaven Hall"},
	{name: "mh", year: 1958, fullname: "Morgan Hall"},
	{name: "oh", year: 1958, fullname: "Olin Hall"},
	{name: "dh", year: 1963, fullname: "Daniels Hall"},
	{name: "gh", year: 1965, fullname: "Goddard Hall"},
	{name: "gl", year: 1967, fullname: "Gordon Library"},
	{name: "ha", year: 1968, fullname: "Harrington Auditorium"},
	{name: "sx", year: 1969, fullname: "Stoddard Complex"},
	{name: "ea", year: 1972, fullname: "Ellsworth Apartments"},
	{name: "fa", year: 1972, fullname: "Fuller Apartments"},
	{name: "fh", year: 1984, fullname: "Founders Hall"},
	{name: "ih", year: 1989, fullname: "Institute Hall"},
	{name: "fl", year: 1990, fullname: "Fuller Laboratories"},
	{name: "cc", year: 2001, fullname: "Campus Center"},
	{name: "bc", year: 2006, fullname: "Bartlett Center"},
	{name: "gp", year: 2007, fullname: "Gateway Park"},
	{name: "eh", year: 2008, fullname: "East Hall"},
	{name: "rc", year: 2012, fullname: "Sports &amp; Recreation Center"},
	{name: "fd", year: 2013, fullname: "100 Faraday Street"},
	{name: "g2", year: 2013, fullname: "Gateway Park II"},
	{name: "ps", year: 1992, fullname: "85 Prescott Street"}
];

function getBuildingFromId(id) {
	var x;
	for (x = 0; x < buildings.length; ++x ) {
		if (buildings[x].name == id) return buildings[x];
	}
}