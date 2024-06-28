
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react';

const Home = async ({searchParams: {id, page}} : SearchParamProps) => {
  const LoggedIn = await getLoggedInUser();
  const accounts =  await getAccounts({
    userId : LoggedIn.$id
  })
  if(!accounts) return;
const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({appwriteItemId })
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
          accounts = {[accountsData]}
          totalBanks={accounts?.totalBanks}
          totalCurrentBalance={accounts?.totalCurrentBalance} />
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