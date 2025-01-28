import { Metadata } from 'next'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import CheckoutForm from './checkOutForm'

export const metadata: Metadata = {
    title: 'Checkout',
}

export const CheckoutPage = async () => {
    const session = await auth()
    if (!session?.user) {
        redirect('/sign-in?callbackUrl=/checkout')
    }
    return <CheckoutForm />
}

export default CheckoutPage
