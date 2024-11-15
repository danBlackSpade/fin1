import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from "@/components/ui/RightSidebar";
import TotalalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
	const loggedIn = { firstName: 'dan', lastName: 'abramov', email: 'contact@email.com' }

	return (
		<section className="home">
		<div className="home-content">
		<header className="home-header">
		<HeaderBox
		type="greeting"
		title="Welcome to fin1"
		user={loggedIn?.firstName || "Guest"}
		subtext="Your personal banking platformmanagement"
		/>
		<TotalalanceBox
		accounts={[]}
		totalBanks={10}
		totalCurrentBalance={1000}
		/>
		</header>
		Recent Transactions
		</div>

		<RightSidebar
		user={loggedIn}
		transactions={[]}
		banks={[{ currentBalance: 123.50 }, { currentBalance: 123.30 }]}
		/>
		</section>
	);
}

export default Home