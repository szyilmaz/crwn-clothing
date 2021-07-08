import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token);
    alert('successfull');
}

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HUnHVE7BwwA4mJwbJHonoOpbYN0FlVMjDslFMmDdf0vvAAiQeCfLxsUuwyGnniNCyT9kMBrsAKZKxT8XvlYYist00JeWQHNpw';
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;