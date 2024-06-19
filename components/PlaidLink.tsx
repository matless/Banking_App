import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import {PlaidLinkOptions} from 'react-plaid-link'

const PlaidLink = ({user, variant} : PlaidLinkProps) => {
    const [token, setToken] = useState('');
    useEffect(() =>{
        const getLinkToken = async () => {
         //const data= await createLinkToken(user);

         //setToken(data?.linkToken);
        }

    }, []);
    const onSuccess = useCallback(async (public_token : string) => {
        // await exchangePublicToken({
        //     publicToken: public_token,
        //     user,
        // })
    }, [user])

    const config: PlaidLinkOptions = {
        token,
        onSuccess
    
    }
    

  return (
   <>
   {variant === 'primary' ? (
    <Button
    className="plaidlink-primary">
        Connect bank
    </Button>
   ) : variant === 'ghost' ? (
    <Button>
        Connect bank
    </Button>
   ) :(
    <Button>
        Connect Bank
    </Button>
   )
}
   </>
  )
}

export default PlaidLink