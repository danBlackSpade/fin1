import HeaderBox from '@/components/ui/HeaderBox'
import TotalalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
	const loggedIn = { firstName: 'dan'}

	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome to fin1"
						user={loggedIn?.firstName || 'Guest'}
						subtext="Your personal banking platformmanagement"
					/>
					<TotalalanceBox
					accounts={[]}
					totalBanks={10}
					totalCurrentBalance={1000}
					
					/>
					
				</header>
			</div>
		</section>
	)
}

export default Home