var Beers = {
				brands: [ 
				{
					BrandName: 'Becks'
				},
				{
					BrandName: 'Budweiser'
				},
				{
					BrandName: 'Bush'
				},
				{
					BrandName: 'Coors'
				},
				{
					BrandName: 'Heinekin'
				},
				{
					BrandName: 'Lionshead',
					Country: 'United States',
					Company: 'Lion Brewing Company',
					CompanyLocation: 'Wilkes-Barre, PA',
					CompanyWebsite: 'http://lionbrewery.com/',
					BrandNumber: '0',
					BeerNums: [3,4,5],
					HidePrices: false,
					HideItems: false,
					Available: true,
					ImageNum: 1	
				},
				{
					BrandName: 'Samuel Adams'
				},
				{
					BrandName: 'Victory',
					Country: 'United States',
					Company: 'Victory Brewing Company',
					CompanyLocation: 'Downingtown, PA',
					CompanyWebsite: 'http://www.victorybeer.com/',
					BrandNumber: 0,
					BeerNums: [0,1,2],
					HidePrices: false,
					HideItems: false,
					Available: true,
					ImageNum: 0
				}, ],
				varities: [ 
				{ 
					BeerName:'Hop Devil',
					ABV:6.7,
					Type:'American Indian Pale Ale',
					Season:'',
					BrandNum:0,
					BeerNumber:0,
					AvailableBeers:[0,1],
					HidePrices:false,
					HideItems:false,
					Available: true,
					imageNum: 2 
				},
				{
					BeerName:'Headwaters',
					AvailableBeers:[0,1]
				},
				{
					BeerName:'Storm King',
					AvailableBeers:[0,1]
				} ],
				availability: [
				{
					Container:0,
					ServingContainer:0,
					ServPerContainer:24,
					Price:37.95,
					Hide:false,
					HidePrice:false,
					Available:true
				},
				{
					Container:0,
					ServingContainer:0,
					ServPerContainer:12,
					Price:22.95,
					Hide:false,
					HidePrice:false,
					Available:true
				}
				]
			};
var ContainerOfBeer = [{types:'case'},{types:'keg'}];
var ServingContainerOfBeer = [{types:'bottles'}, {types:'cans'}]
