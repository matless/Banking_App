
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox';
import React from 'react';

const Home = () => {
  const LoggedIn = {firstName: 'Mat', lastName: 'Les', email: 'matles@horizon.com'};
  return (
    
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type= "greeting"
          title = "Welcome"
          user = {LoggedIn?.firstName || 'Guest'}
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
      banks={[{},{}]}/>
    </section>
  )
}

export default Home