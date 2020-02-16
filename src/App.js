import React, { useState, createContext, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { URL_API, DELIVERY_TIMES } from './utils/constants';
import ProductList from './components/ProductList';

export const AppContext = createContext();

const App = () => {
	const [furnitures, setFurnitures] = useState([]);
	const [fStyles, setFStyles] = useState([]);
	const [deliveryTimes, setDeliveryTimes] = useState(DELIVERY_TIMES);
	const [showedFurnitures, setShowedFurnitures] = useState([]);

	
	const getFurnitures = async () => {
		let data = await fetch(URL_API);
		data = await data.json();
		setFStyles(data.furniture_styles.map(s => {return {"name": s, "isChecked": false}}));
		setFurnitures(data.products);
		setShowedFurnitures(data.products);
	}



	useEffect(()=>{
		getFurnitures();	
	},[])

	const filterByName = (text) => {
		setShowedFurnitures(
			furnitures.filter(i => i.name.toLowerCase().includes(text.toLowerCase()))
		);
		deactivateDeliveryTimeFilter();
		deactivateStyleFilter();
	}

	const filterByFurnitureStyles = (style) => {
		deactivateDeliveryTimeFilter();
		const newFStyle = fStyles.map( s => {
			if (style.name === s.name) {
				return { ...s, isChecked: !s.isChecked };
			}else {
				return { ...s };
			}
		})
		setFStyles(newFStyle);

		const checkedStyles = newFStyle.filter(s => s.isChecked);
		
		let newShowedFurnitures = []

		if (checkedStyles.length === 0) {
			newShowedFurnitures = [...furnitures]
		} else {
			checkedStyles.forEach(
				s =>  {
					newShowedFurnitures = [
						...newShowedFurnitures,
						...furnitures.filter(f => f.furniture_style.includes(s.name))
					]
				}
			)
	
			newShowedFurnitures = Array.from(new Set(newShowedFurnitures.map(i=>i.name)))
				.map(i => {
					return {
						...furnitures.find(f => f.name === i)
					}
				})	
		}

		setShowedFurnitures(newShowedFurnitures);

	}

	const filterByDeliveryTimes = (time) => {
		deactivateStyleFilter()
		const newDTimes = deliveryTimes.map( t => {
			if (time.name === t.name) {
				return { ...t, isChecked: !t.isChecked };
			}else {
				return { ...t };
			}
		})
		setDeliveryTimes(newDTimes);

		const checkedDTimes = newDTimes.filter(t => t.isChecked);
		
		let newShowedFurnitures = []

		if (checkedDTimes.length === 0) {
			newShowedFurnitures = [...furnitures]
		} else {
			checkedDTimes.forEach(
				t =>  {
					newShowedFurnitures = [
						...newShowedFurnitures,
						...furnitures.filter(f => f.delivery_time <= t.number)
					]
				}
			)
	
			newShowedFurnitures = Array.from(new Set(newShowedFurnitures.map(i=>i.name)))
				.map(i => {
					return {
						...furnitures.find(f => f.name === i)
					}
				})
		}
		
		setShowedFurnitures(newShowedFurnitures);
	}

	const deactivateStyleFilter = () => {
		setFStyles(fStyles.map(s => {
			return {
				...s,
				isChecked: false
			}
		}))
	}

	const deactivateDeliveryTimeFilter = () => {
		setDeliveryTimes(deliveryTimes.map(t => {
			return {
				...t,
				isChecked: false
			}
		}))
	}

	

	return (
		<AppContext.Provider value={{
			showedFurnitures: showedFurnitures,
			fStyles: fStyles,
			deliveryTimes: deliveryTimes,
			filterByName: filterByName,
			filterByFurnitureStyles: filterByFurnitureStyles,
			filterByDeliveryTimes: filterByDeliveryTimes
		}}>
			<Header />
			<ProductList/>
		</AppContext.Provider>
	);
}

export default App;
