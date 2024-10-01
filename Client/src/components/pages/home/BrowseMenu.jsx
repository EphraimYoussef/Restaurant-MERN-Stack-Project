import BrowseMenuCard from '@/atoms/BrowseMenuCard'
import React from 'react'

const cardsData = [
	{
		title: "Breakfast",
		img:"/breakfast.svg",
		description: "In the new era of technology we look in the future with certainty and pride for our life.",
	},
	{
		title: "Main Dishes",
		img:"/maindishes.svg",
		description: "In the new era of technology we look in the future with certainty and pride for our life.",
	},
	{
		title: "Drinks",
		img:"/drinks.svg",
		description: "In the new era of technology we look in the future with certainty and pride for our life.",
	},
	{
		title: "Desserts",
		img:"/desserts.svg",
		description: "In the new era of technology we look in the future with certainty and pride for our life.",
	},
]

const BrowseMenu = () => {
	return (
		<div className='container mx-auto px-4 py-28 flex flex-col items-center gap-10'>
			<p className='text-3xl font-bold'>Browse Our Menu</p>
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8'>
				{
					cardsData.map((data, index) => {
						return (
							<BrowseMenuCard key={index} data={data} />
						)
					})
				}
			</div>
		</div>
		
	)
}

export default BrowseMenu