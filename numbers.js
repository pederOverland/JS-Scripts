var NumFormat = {
	parseNum: function(value) {
		var neg = value.toString().match(/-/);
		value = value.toString().replace(/[^0-9|,|-|.]/g, "").replace(/,/g, ".");
		var result = parseFloat(value);

		return neg ? result * -1 : result;
	},
	//Returns a string formatted to norwegian currency standards:
	//Thousand separartor: " ",
	//Decimal separator: ",",
	//Number of decimals: 2
	//
	//Depends on: parseNum()
	outputNum: function(value) {
		value = parseNum(value).toString();
		var x = value.split(".");
		var x1 = x[0];
		var x2;
		if (x[1]) {
			x2 = "," + x[1];
			x2 = (x2.length > 3) ? x2.substring(0, 3) : (x2.length < 3) ? x2 + '0' : x2;
		} else {
			x2 = "";
		}
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ' ' + '$2');
		}
		return x1 + x2;
	}
}



