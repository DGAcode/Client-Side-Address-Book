  "use strict";

var data = [{
  'code': 'AF',
  'name': 'Afghanistan'
}, {
  'code': 'AX',
  'name': 'Åland Islands'
}, {
  'code': 'AL',
  'name': 'Albania'
}, {
  'code': 'DZ',
  'name': 'Algeria'
}, {
  'code': 'AS',
  'name': 'American Samoa'
}, {
  'code': 'AD',
  'name': 'Andorra'
}, {
  'code': 'AO',
  'name': 'Angola'
}, {
  'code': 'AI',
  'name': 'Anguilla'
}, {
  'code': 'AQ',
  'name': 'Antarctica'
}, {
  'code': 'AG',
  'name': 'Antigua and Barbuda'
}, {
  'code': 'AR',
  'name': 'Argentina'
}, {
  'code': 'AM',
  'name': 'Armenia'
}, {
  'code': 'AW',
  'name': 'Aruba'
}, {
  'code': 'AU',
  'name': 'Australia'
}, {
  'code': 'AT',
  'name': 'Austria'
}, {
  'code': 'AZ',
  'name': 'Azerbaijan'
}, {
  'code': 'BS',
  'name': 'Bahamas'
}, {
  'code': 'BH',
  'name': 'Bahrain'
}, {
  'code': 'BD',
  'name': 'Bangladesh'
}, {
  'code': 'BB',
  'name': 'Barbados'
}, {
  'code': 'BY',
  'name': 'Belarus'
}, {
  'code': 'BE',
  'name': 'Belgium'
}, {
  'code': 'BZ',
  'name': 'Belize'
}, {
  'code': 'BJ',
  'name': 'Benin'
}, {
  'code': 'BM',
  'name': 'Bermuda'
}, {
  'code': 'BT',
  'name': 'Bhutan'
}, {
  'code': 'BO',
  'name': 'Bolivia, Plurinational State of'
}, {
  'code': 'BQ',
  'name': 'Bonaire, Sint Eustatius and Saba'
}, {
  'code': 'BA',
  'name': 'Bosnia and Herzegovina'
}, {
  'code': 'BW',
  'name': 'Botswana'
}, {
  'code': 'BV',
  'name': 'Bouvet Island'
}, {
  'code': 'BR',
  'name': 'Brazil'
}, {
  'code': 'IO',
  'name': 'British Indian Ocean Territory'
}, {
  'code': 'BN',
  'name': 'Brunei Darussalam'
}, {
  'code': 'BG',
  'name': 'Bulgaria'
}, {
  'code': 'BF',
  'name': 'Burkina Faso'
}, {
  'code': 'BI',
  'name': 'Burundi'
}, {
  'code': 'KH',
  'name': 'Cambodia'
}, {
  'code': 'CM',
  'name': 'Cameroon'
}, {
  'code': 'CA',
  'name': 'Canada'
}, {
  'code': 'CV',
  'name': 'Cape Verde'
}, {
  'code': 'KY',
  'name': 'Cayman Islands'
}, {
  'code': 'CF',
  'name': 'Central African Republic'
}, {
  'code': 'TD',
  'name': 'Chad'
}, {
  'code': 'CL',
  'name': 'Chile'
}, {
  'code': 'CN',
  'name': 'China'
}, {
  'code': 'CX',
  'name': 'Christmas Island'
}, {
  'code': 'CC',
  'name': 'Cocos (Keeling) Islands'
}, {
  'code': 'CO',
  'name': 'Colombia'
}, {
  'code': 'KM',
  'name': 'Comoros'
}, {
  'code': 'CG',
  'name': 'Congo'
}, {
  'code': 'CD',
  'name': 'Congo, the Democratic Republic of the'
}, {
  'code': 'CK',
  'name': 'Cook Islands'
}, {
  'code': 'CR',
  'name': 'Costa Rica'
}, {
  'code': 'CI',
  'name': 'Côte d\'Ivoire'
}, {
  'code': 'HR',
  'name': 'Croatia'
}, {
  'code': 'CU',
  'name': 'Cuba'
}, {
  'code': 'CW',
  'name': 'Curaçao'
}, {
  'code': 'CY',
  'name': 'Cyprus'
}, {
  'code': 'CZ',
  'name': 'Czech Republic'
}, {
  'code': 'DK',
  'name': 'Denmark'
}, {
  'code': 'DJ',
  'name': 'Djibouti'
}, {
  'code': 'DM',
  'name': 'Dominica'
}, {
  'code': 'DO',
  'name': 'Dominican Republic'
}, {
  'code': 'EC',
  'name': 'Ecuador'
}, {
  'code': 'EG',
  'name': 'Egypt'
}, {
  'code': 'SV',
  'name': 'El Salvador'
}, {
  'code': 'GQ',
  'name': 'Equatorial Guinea'
}, {
  'code': 'ER',
  'name': 'Eritrea'
}, {
  'code': 'EE',
  'name': 'Estonia'
}, {
  'code': 'ET',
  'name': 'Ethiopia'
}, {
  'code': 'FK',
  'name': 'Falkland Islands (Malvinas)'
}, {
  'code': 'FO',
  'name': 'Faroe Islands'
}, {
  'code': 'FJ',
  'name': 'Fiji'
}, {
  'code': 'FI',
  'name': 'Finland'
}, {
  'code': 'FR',
  'name': 'France'
}, {
  'code': 'GF',
  'name': 'French Guiana'
}, {
  'code': 'PF',
  'name': 'French Polynesia'
}, {
  'code': 'TF',
  'name': 'French Southern Territories'
}, {
  'code': 'GA',
  'name': 'Gabon'
}, {
  'code': 'GM',
  'name': 'Gambia'
}, {
  'code': 'GE',
  'name': 'Georgia'
}, {
  'code': 'DE',
  'name': 'Germany'
}, {
  'code': 'GH',
  'name': 'Ghana'
}, {
  'code': 'GI',
  'name': 'Gibraltar'
}, {
  'code': 'GR',
  'name': 'Greece'
}, {
  'code': 'GL',
  'name': 'Greenland'
}, {
  'code': 'GD',
  'name': 'Grenada'
}, {
  'code': 'GP',
  'name': 'Guadeloupe'
}, {
  'code': 'GU',
  'name': 'Guam'
}, {
  'code': 'GT',
  'name': 'Guatemala'
}, {
  'code': 'GG',
  'name': 'Guernsey'
}, {
  'code': 'GN',
  'name': 'Guinea'
}, {
  'code': 'GW',
  'name': 'Guinea-Bissau'
}, {
  'code': 'GY',
  'name': 'Guyana'
}, {
  'code': 'HT',
  'name': 'Haiti'
}, {
  'code': 'HM',
  'name': 'Heard Island and McDonald Islands'
}, {
  'code': 'VA',
  'name': 'Holy See (Vatican City State)'
}, {
  'code': 'HN',
  'name': 'Honduras'
}, {
  'code': 'HK',
  'name': 'Hong Kong'
}, {
  'code': 'HU',
  'name': 'Hungary'
}, {
  'code': 'IS',
  'name': 'Iceland'
}, {
  'code': 'IN',
  'name': 'India'
}, {
  'code': 'ID',
  'name': 'Indonesia'
}, {
  'code': 'IR',
  'name': 'Iran, Islamic Republic of'
}, {
  'code': 'IQ',
  'name': 'Iraq'
}, {
  'code': 'IE',
  'name': 'Ireland'
}, {
  'code': 'IM',
  'name': 'Isle of Man'
}, {
  'code': 'IL',
  'name': 'Israel'
}, {
  'code': 'IT',
  'name': 'Italy'
}, {
  'code': 'JM',
  'name': 'Jamaica'
}, {
  'code': 'JP',
  'name': 'Japan'
}, {
  'code': 'JE',
  'name': 'Jersey'
}, {
  'code': 'JO',
  'name': 'Jordan'
}, {
  'code': 'KZ',
  'name': 'Kazakhstan'
}, {
  'code': 'KE',
  'name': 'Kenya'
}, {
  'code': 'KI',
  'name': 'Kiribati'
}, {
  'code': 'KP',
  'name': 'Korea, Democratic People\'s Republic of'
}, {
  'code': 'KR',
  'name': 'Korea, Republic of'
}, {
  'code': 'KW',
  'name': 'Kuwait'
}, {
  'code': 'KG',
  'name': 'Kyrgyzstan'
}, {
  'code': 'LA',
  'name': 'Lao People\'s Democratic Republic'
}, {
  'code': 'LV',
  'name': 'Latvia'
}, {
  'code': 'LB',
  'name': 'Lebanon'
}, {
  'code': 'LS',
  'name': 'Lesotho'
}, {
  'code': 'LR',
  'name': 'Liberia'
}, {
  'code': 'LY',
  'name': 'Libya'
}, {
  'code': 'LI',
  'name': 'Liechtenstein'
}, {
  'code': 'LT',
  'name': 'Lithuania'
}, {
  'code': 'LU',
  'name': 'Luxembourg'
}, {
  'code': 'MO',
  'name': 'Macao'
}, {
  'code': 'MK',
  'name': 'Macedonia, the Former Yugoslav Republic of'
}, {
  'code': 'MG',
  'name': 'Madagascar'
}, {
  'code': 'MW',
  'name': 'Malawi'
}, {
  'code': 'MY',
  'name': 'Malaysia'
}, {
  'code': 'MV',
  'name': 'Maldives'
}, {
  'code': 'ML',
  'name': 'Mali'
}, {
  'code': 'MT',
  'name': 'Malta'
}, {
  'code': 'MH',
  'name': 'Marshall Islands'
}, {
  'code': 'MQ',
  'name': 'Martinique'
}, {
  'code': 'MR',
  'name': 'Mauritania'
}, {
  'code': 'MU',
  'name': 'Mauritius'
}, {
  'code': 'YT',
  'name': 'Mayotte'
}, {
  'code': 'MX',
  'name': 'Mexico'
}, {
  'code': 'FM',
  'name': 'Micronesia, Federated States of'
}, {
  'code': 'MD',
  'name': 'Moldova, Republic of'
}, {
  'code': 'MC',
  'name': 'Monaco'
}, {
  'code': 'MN',
  'name': 'Mongolia'
}, {
  'code': 'ME',
  'name': 'Montenegro'
}, {
  'code': 'MS',
  'name': 'Montserrat'
}, {
  'code': 'MA',
  'name': 'Morocco'
}, {
  'code': 'MZ',
  'name': 'Mozambique'
}, {
  'code': 'MM',
  'name': 'Myanmar'
}, {
  'code': 'NA',
  'name': 'Namibia'
}, {
  'code': 'NR',
  'name': 'Nauru'
}, {
  'code': 'NP',
  'name': 'Nepal'
}, {
  'code': 'NL',
  'name': 'Netherlands'
}, {
  'code': 'NC',
  'name': 'New Caledonia'
}, {
  'code': 'NZ',
  'name': 'New Zealand'
}, {
  'code': 'NI',
  'name': 'Nicaragua'
}, {
  'code': 'NE',
  'name': 'Niger'
}, {
  'code': 'NG',
  'name': 'Nigeria'
}, {
  'code': 'NU',
  'name': 'Niue'
}, {
  'code': 'NF',
  'name': 'Norfolk Island'
}, {
  'code': 'MP',
  'name': 'Northern Mariana Islands'
}, {
  'code': 'NO',
  'name': 'Norway'
}, {
  'code': 'OM',
  'name': 'Oman'
}, {
  'code': 'PK',
  'name': 'Pakistan'
}, {
  'code': 'PW',
  'name': 'Palau'
}, {
  'code': 'PS',
  'name': 'Palestine, State of'
}, {
  'code': 'PA',
  'name': 'Panama'
}, {
  'code': 'PG',
  'name': 'Papua New Guinea'
}, {
  'code': 'PY',
  'name': 'Paraguay'
}, {
  'code': 'PE',
  'name': 'Peru'
}, {
  'code': 'PH',
  'name': 'Philippines'
}, {
  'code': 'PN',
  'name': 'Pitcairn'
}, {
  'code': 'PL',
  'name': 'Poland'
}, {
  'code': 'PT',
  'name': 'Portugal'
}, {
  'code': 'PR',
  'name': 'Puerto Rico'
}, {
  'code': 'QA',
  'name': 'Qatar'
}, {
  'code': 'RE',
  'name': 'Réunion'
}, {
  'code': 'RO',
  'name': 'Romania'
}, {
  'code': 'RU',
  'name': 'Russian Federation'
}, {
  'code': 'RW',
  'name': 'Rwanda'
}, {
  'code': 'BL',
  'name': 'Saint Barthélemy'
}, {
  'code': 'SH',
  'name': 'Saint Helena, Ascension and Tristan da Cunha'
}, {
  'code': 'KN',
  'name': 'Saint Kitts and Nevis'
}, {
  'code': 'LC',
  'name': 'Saint Lucia'
}, {
  'code': 'MF',
  'name': 'Saint Martin (French part)'
}, {
  'code': 'PM',
  'name': 'Saint Pierre and Miquelon'
}, {
  'code': 'VC',
  'name': 'Saint Vincent and the Grenadines'
}, {
  'code': 'WS',
  'name': 'Samoa'
}, {
  'code': 'SM',
  'name': 'San Marino'
}, {
  'code': 'ST',
  'name': 'Sao Tome and Principe'
}, {
  'code': 'SA',
  'name': 'Saudi Arabia'
}, {
  'code': 'SN',
  'name': 'Senegal'
}, {
  'code': 'RS',
  'name': 'Serbia'
}, {
  'code': 'SC',
  'name': 'Seychelles'
}, {
  'code': 'SL',
  'name': 'Sierra Leone'
}, {
  'code': 'SG',
  'name': 'Singapore'
}, {
  'code': 'SX',
  'name': 'Sint Maarten (Dutch part)'
}, {
  'code': 'SK',
  'name': 'Slovakia'
}, {
  'code': 'SI',
  'name': 'Slovenia'
}, {
  'code': 'SB',
  'name': 'Solomon Islands'
}, {
  'code': 'SO',
  'name': 'Somalia'
}, {
  'code': 'ZA',
  'name': 'South Africa'
}, {
  'code': 'GS',
  'name': 'South Georgia and the South Sandwich Islands'
}, {
  'code': 'SS',
  'name': 'South Sudan'
}, {
  'code': 'ES',
  'name': 'Spain'
}, {
  'code': 'LK',
  'name': 'Sri Lanka'
}, {
  'code': 'SD',
  'name': 'Sudan'
}, {
  'code': 'SR',
  'name': 'Suriname'
}, {
  'code': 'SJ',
  'name': 'Svalbard and Jan Mayen'
}, {
  'code': 'SZ',
  'name': 'Swaziland'
}, {
  'code': 'SE',
  'name': 'Sweden'
}, {
  'code': 'CH',
  'name': 'Switzerland'
}, {
  'code': 'SY',
  'name': 'Syrian Arab Republic'
}, {
  'code': 'TW',
  'name': 'Taiwan, Province of China'
}, {
  'code': 'TJ',
  'name': 'Tajikistan'
}, {
  'code': 'TZ',
  'name': 'Tanzania, United Republic of'
}, {
  'code': 'TH',
  'name': 'Thailand'
}, {
  'code': 'TL',
  'name': 'Timor-Leste'
}, {
  'code': 'TG',
  'name': 'Togo'
}, {
  'code': 'TK',
  'name': 'Tokelau'
}, {
  'code': 'TO',
  'name': 'Tonga'
}, {
  'code': 'TT',
  'name': 'Trinidad and Tobago'
}, {
  'code': 'TN',
  'name': 'Tunisia'
}, {
  'code': 'TR',
  'name': 'Turkey'
}, {
  'code': 'TM',
  'name': 'Turkmenistan'
}, {
  'code': 'TC',
  'name': 'Turks and Caicos Islands'
}, {
  'code': 'TV',
  'name': 'Tuvalu'
}, {
  'code': 'UG',
  'name': 'Uganda'
}, {
  'code': 'UA',
  'name': 'Ukraine'
}, {
  'code': 'AE',
  'name': 'United Arab Emirates'
}, {
  'code': 'GB',
  'name': 'United Kingdom'
}, {
  'code': 'US',
  'name': 'United States'
}, {
  'code': 'UM',
  'name': 'United States Minor Outlying Islands'
}, {
  'code': 'UY',
  'name': 'Uruguay'
}, {
  'code': 'UZ',
  'name': 'Uzbekistan'
}, {
  'code': 'VU',
  'name': 'Vanuatu'
}, {
  'code': 'VE',
  'name': 'Venezuela, Bolivarian Republic of'
}, {
  'code': 'VN',
  'name': 'Viet Nam'
}, {
  'code': 'VG',
  'name': 'Virgin Islands, British'
}, {
  'code': 'VI',
  'name': 'Virgin Islands, U.S.'
}, {
  'code': 'WF',
  'name': 'Wallis and Futuna'
}, {
  'code': 'EH',
  'name': 'Western Sahara'
}, {
  'code': 'YE',
  'name': 'Yemen'
}, {
  'code': 'ZM',
  'name': 'Zambia'
}, {
  'code': 'ZW',
  'name': 'Zimbabwe'
}];

/**
 * Precompute name and code lookups.
 */
var nameMap = {};
var codeMap = {};
data.forEach(function (country) {
  nameMap[country.name.toLowerCase()] = country.code;
  codeMap[country.code.toLowerCase()] = country.name;
});

function CountryList() {
  if (!(this instanceof CountryList)) return new CountryList();
}

CountryList.prototype.getCode = function getCode(name) {
  return nameMap[name.toLowerCase()];
};

CountryList.prototype.getName = function getName(code) {
  return codeMap[code.toLowerCase()];
};

CountryList.prototype.getNames = function getNames() {
  return data.map(function (country) {
    return country.name;
  });
};

CountryList.prototype.getCodes = function getCodes() {
  return data.map(function (country) {
    return country.code;
  });
};

CountryList.prototype.getData = function getData() {
  return data;
};

var countryList = new CountryList();
var countries = countryList.getNames();
var selectElement = document.getElementsByName('country-list')[0];
countries.forEach((country, index) => {
  var opt = document.createElement('option');
  opt.value = country;
  opt.innerHTML = country;
  selectElement.appendChild(opt);
});

// end Country-list

function editRow(no) {
  document.getElementById('editButton' + no).style.display = 'none';
  document.getElementById('saveButton' + no).style.display = 'block';

  var firstName = document.getElementById('firstNameRow' + no);
  var lastName = document.getElementById('lastNameRow' + no);
  var email = document.getElementById('emailRow' + no);
  var country = document.getElementById('countryRow' + no);

  var firstNameData = firstName.innerHTML;
  var lastNameData = lastName.innerHTML;
  var emailData = email.innerHTML;
  var countryData = country.innerHTML;

  firstName.innerHTML = '<input type=\'text\' id=\'firstNameText' + no + '\' value=\'' + firstNameData + '\'>';
  lastName.innerHTML = '<input type=\'text\' id=\'lastNameText' + no + '\' value=\'' + lastNameData + '\'>';
  email.innerHTML = '<input type=\'text\' id=\'emailText' + no + '\' value=\'' + emailData + '\'>';
  country.innerHTML = '<input type=\'text\' id=\'countryText' + no + '\' value=\'' + countryData + '\'>';
}

function saveRow(no) {
  var firstNameVal = document.getElementById('firstNameText' + no).value;
  var lastNameVal = document.getElementById('lastNameText' + no).value;
  var emailVal = document.getElementById('emailText' + no).value;
  var countryVal = document.getElementById('countryText' + no).value;

  document.getElementById('firstNameRow' + no).innerHTML = firstNameVal;
  document.getElementById('lastNameRow' + no).innerHTML = lastNameVal;
  document.getElementById('emailRow' + no).innerHTML = emailVal;
  document.getElementById('countryRow' + no).innerHTML = countryVal;

  document.getElementById('editButton' + no).style.display = 'block';
  document.getElementById('saveButton' + no).style.display = 'none';
}

function deleteRow(no) {
  document.getElementById('row' + no + '').outerHTML = '';
}

function addRow() {
  var newFirstName = document.getElementById('newFirstName').value;
  var newLastName = document.getElementById('newLastName').value;
  var newEmail = document.getElementById('newEmail').value;
  var newCountry = document.getElementById('newCountry').value;

  var table = document.getElementById('dataTable');
  var tableLen = (table.rows.length) - 1;
  var row = table.insertRow(tableLen).outerHTML = '<tr id=\'row' + tableLen + '\'><td id=\'firstNameRow' + tableLen + '\'>' + newFirstName + '</td><td id=\'lastNameRow' + tableLen + '\'>' + newLastName + '</td><td id=\'emailRow' + tableLen + '\'>' + newEmail + '</td><td id=\'countryRow' + tableLen + '\'>' + newCountry + '</td><td><input type=\'button\' id=\'editButton' + tableLen + '\' value=\'Edit\' class=\'edit\' onclick=\'editRow(' + tableLen + ')\'> <input type=\'button\' id=\'saveButton' + tableLen + '\' value=\'Save\' class=\'save\' onclick=\'saveRow(' + tableLen + ')\'> <input type=\'button\' value=\'Delete\' class=\'delete\' onclick=\'deleteRow(' + tableLen + ')\'></td></tr>';

  document.getElementById('newFirstName').value = '';
  document.getElementById('newLastName').value = '';
  document.getElementById('newEmail').value = '';
  document.getElementById('newCountry').value = '';
}
