var dealership = {
	sedan:
	{
		price: 75,
		stock: 1,
		available: function() {
			if (this.stock > 0)
				// es6 template literals
				return `there are ${this.stock} available`;
			else
				return "There are no sedans available at this time, sorry!";
		}
	},

	suv:
	{
		price: 100,
		stock: 2,
		available: function(){
			if (this.stock > 0)
				return "there are " + this.stock + " available";
			else
				return "There are no suv's available at this time, sorry!";
		}
	},

	sports:
	{
		price: 100,
		stock: 2,
		available: function(){
			if (this.stock > 0){
				return "there are " + this.stock + " available";
			} else {
				return "There are no sportcars's available at this time, sorry!";
			}
		}
	},
}

// Assignment-thon 1.0
// Assignment-thon Version 1.0 (30 minutes)

// Javascript object for a car dealership

// 3 car categories: sedan, suv, sports
// rental price for each
// available or not

// total num available for each category
// ability to submit a rental request

// development done locally, or in c9, testing in browser console or c9 console only. Push to github. Branch “assignment-thon01-0”
