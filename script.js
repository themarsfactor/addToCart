//alert('yes');
window.addEventListener('load', function(){
	let cartCounter = document.querySelector("#cart-counter");
	let storedCartItems = getStoredCartItems();

	if(storedCartItems.length == 0){
		cartCounter.innerText = "0";
	}else{
		cartCounter.innerText = `${storedCartItems.length}`;
	}

});



const btns = document.querySelectorAll('#btn');
//console.log(btns);	

	/*let dad = btns.parentNode;
	let all = dad.childNodes;
	let name = dad.childNodes[3].innerText;
	console.log(dad);
	console.log(name);
	let imgSrc = dad.childNodes[1].src;	*/
	

btns.forEach((btn) => {

	btn.addEventListener('click', function(){

	let dad = this.parentNode;
	let productName = dad.childNodes[3].innerText;
	let imgSrc = dad.childNodes[1].src;

		
	
		let product = {
			'product_name' : productName, 
			'product_image' : imgSrc, 
			'id' : new Date().getTime()
		}


		let storedCartItems = getStoredCartItems();																		


		storedCartItems.push(product);
		storedCartItems = JSON.stringify(storedCartItems);

		localStorage.setItem('cartBank', storedCartItems);

		location.reload();



	})

}) 


function getStoredCartItems(){
	let storedCartItems = localStorage.getItem("cartBank");

	if(storedCartItems == null || storedCartItems == undefined){
		return [];
	}else{
		
		storedCartItems = JSON.parse(storedCartItems);
		return storedCartItems;
	}
}
