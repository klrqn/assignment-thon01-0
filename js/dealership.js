var dealership = {
	sedan:
	{
		type: "Sedan",
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
		type: "suv",
		price: 100,
		stock: 2,
		available: function(){
			if (this.stock > 0)
				return `there are ${this.stock} available`;
			else
				return "There are no suv's available at this time, sorry!";
		}
	},

	sports:
	{
		type: "sportcar",
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

// figure out how to export TODO
// export default dealership;


// jquery to populate index
document.getElementById("sedanCost").innerHTML = dealership.sedan.price;
document.getElementById("sedanStock").innerHTML += dealership.sedan.stock;


