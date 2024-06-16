
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react';

const Home = async () => {
  const LoggedIn = await getLoggedInUser();
  return (
    
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type= "greeting"
          title = "Welcome"
          user = {LoggedIn?.name || 'Guest'}
          subtext = "Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
          accounts = {[]}
          totalBanks={1}
          totalCurrentBalance={1250.35} />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar
      user={LoggedIn}
      transactions={[]}
      banks={[{currentBalance: 123.50},{currentBalance: 500}]}/>
    </section>
  )
}

export default Home