import React, { useEffect, useState } from 'react';
import './PlansScreen.css';
import { collection, getDocs ,doc , onSnapshot} from 'firebase/firestore';
import db from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { addDoc } from 'firebase/firestore';
import { loadStripe } from '@stripe/stripe-js';

function PlansScreen() {
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'products'));
                const productsData = [];
                
                for (const doc of querySnapshot.docs) {
                    const product = {
                        id: doc.id,
                        ...doc.data()
                    };
                    // Fetch prices for each product
                    const priceSnapshot = await getDocs(collection(doc.ref, 'prices'));
                    const prices = [];
                    priceSnapshot.forEach(priceDoc => {
                        prices.push({
                            id: priceDoc.id,
                            ...priceDoc.data()
                        });
                    });
                    product.prices = prices;
                    productsData.push(product);
                }

                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching products: ', error);
            }
        };

        fetchProducts();
    }, []);

    // console.log(products);

    const loadCheckout = async (priceId) => {
        console.log(priceId);
    
        // Ensure priceId is defined
        if (!priceId) {
            throw new Error("Price ID is undefined");
        }
    
        try {
            const docRef = await addDoc(collection(doc(collection(db, 'customers'), user.uid), 'checkout_sessions'), {
                price: priceId,
                success_url: window.location.origin,
                cancel_url: window.location.origin,
            });
    
            // Listen for changes to the document
            const unsubscribe = onSnapshot(docRef,async (snap) => {
                const data = snap.data();
                if (data && data.sessionId) {
                    const sessionId = data.sessionId;
                    // Get Stripe.js instance
                    const stripe = await loadStripe("pk_test_51PQnckIl5FHWwDFvw5eD8eIsKMoxlNSqm6ztwNiu1ha0wnneWvQhupV169kUcrwPaUvyZvqzRxORfjMZl1cbZ0vY00yqN7V9li");
                    // Redirect to checkout

                    console.log(stripe);

                    stripe.redirectToCheckout({ sessionId });
                    // Stop listening for changes to the document
                    unsubscribe();
                }
            });
        } catch (error) {
            console.error("Error adding document:", error);
        }
    };
    
    

    return (
        <div className='plansScreen'>
            {Object.entries(products).map(([productId, productData]) => {
                // Add some logic to check if user's subscription is active
                // console.log(productData.prices[0].id);

                return (
                    <div className='plansScreen__plan'>
                        <div className='plansScreen__info'>
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button onClick={() => loadCheckout(productData.prices[0].id)}>
                            Subscribe
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default PlansScreen;
