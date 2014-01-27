window.onload = InsertData();
		function InsertData(){
			addBeerBrands();
			addBeerVarieties();
			addBeerAvaliabilities();
		}
		function addBeerBrands(){
			for (i=0; i<Beers.brands.length;i++){
				var brandContent = document.getElementById("BrandContent");
				brandContent.appendChild(createBrandSearchItemDiv(Beers.brands[i].BrandName,i));
			}
		}
		function createBrandSearchItemDiv(brandName,indexNum){
			var newText = document.createTextNode(brandName);
	  		var newGraf = document.createElement("h3");
	  		newGraf.appendChild(newText);
	  		var newDiv = document.createElement("div");
	  		newDiv.setAttribute("class", "searchItem");
	  		newDiv.setAttribute("indexNum", indexNum);
	  		newDiv.setAttribute("onClick", "loadBeerVarities(this)");
	  		newDiv.appendChild(newGraf);
	  		return newDiv;
		}
		function loadBeerVarities (BrandDiv) {
			if (Beers.brands[BrandDiv.getAttribute("indexNum")].BeerNums === undefined){}
			else {
				var Beer = Beers.brands[BrandDiv.getAttribute("indexNum")].BeerNums.slice(0);
				var beerContent = document.getElementById("BeerContent");
				removeAllChildren(beerContent);
				for (i=0; i<Beer.length; i++){
					if (Beers.varities[Beer[i]] === undefined){}
					else{
						beerContent.appendChild(createBeerSearchItemDiv(Beers.varities[Beer[i]].BeerName,i));
					}
				}
				selectElement(BrandDiv);
			}
		}
		function createBeerSearchItemDiv(beerName, indexNum){
			var newText = document.createTextNode(beerName);
	  		var newGraf = document.createElement("h3");
	  		newGraf.appendChild(newText);
	  		var newDiv = document.createElement("div");
	  		newDiv.setAttribute("class", "searchItem");
	  		newDiv.setAttribute("indexNum", indexNum);
	  		newDiv.setAttribute("onClick", "loadAvailableVarities(this)");
	  		newDiv.appendChild(newGraf);
	  		return newDiv;
		}
		function loadAvailableVarities(BeerDiv){
			var Avail = Beers.varities[BeerDiv.getAttribute("indexNum")].AvailableBeers.slice(0);
			var beerContent = document.getElementById("AvailContent");
			removeAllChildren(beerContent);
			for (i=0; i<Avail.length; i++){
				var AvailTextToDisplay = Beers.availability[Avail[i]].ServPerContainer+" "+ContainerOfBeer[Beers.availability[Avail[i]].Container].types+" "+ServingContainerOfBeer[Beers.availability[Avail[i]].ServingContainer].types+": $"+Beers.availability[Avail[i]].Price;
				beerContent.appendChild(createAvailSearchItemDiv(AvailTextToDisplay, i));
			}
			selectElement(BeerDiv);
		}
		function createAvailSearchItemDiv(availText,  indexNum){
			var newText = document.createTextNode(availText);
	  		var newGraf = document.createElement("h3");
	  		newGraf.appendChild(newText);
	  		var newDiv = document.createElement("div");
	  		newDiv.setAttribute("class", "searchItem");
	  		newDiv.setAttribute("indexNum", indexNum);
	  		newDiv.setAttribute("onClick", "selectElement(this)");
	  		newDiv.appendChild(newGraf);
	  		return newDiv;
		}
		function selectElement(Element){
			changeAllPeerElementBackgroundsToClear(Element);
			makeBackgroundWhite(Element);
		}
		function changeAllPeerElementBackgroundsToClear(Element){
			var children = Element.parentNode.childNodes;
			for (i=0;i<children.length;i++){
				if(children[i].nodeName === "DIV"){
					children[i].style.backgroundColor = "transparent";
				}
			}
		}
		function makeBackgroundWhite(Element){
			Element.style.backgroundColor = "white";
		}
		function removeAllChildren(ParentElement){
			while (ParentElement.firstChild){
				ParentElement.removeChild(ParentElement.firstChild);
			}
		}
		function addBeerVarieties(){

		}
		function addBeerAvaliabilities(){

		}