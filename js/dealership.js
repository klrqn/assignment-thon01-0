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


// jquery
document.getElementById("sedan").innerHTML = dealership.sedan.type;
document.getElementById("#sedanCost").append = dealership.sedan.price;
document.getElementById("sedanNumber").innerHTML = dealership.sedan.stock;
// document.getElementById("sedanRent").innerHTML = dealership.sedan.rent;
document.getElementById("sedanAvailable").innerHTML = dealership.sedan.available();
