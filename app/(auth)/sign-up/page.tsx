import { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { auth } from '@/auth'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import SignUpForm from './signupForm'
import SeparatorWithOr from '@/components/shared/SeparatorOr'
import { GoogleSignInForm } from '../googleSigninForm'

export const metadata: Metadata = {
  title: 'Sign Up',
}

const SignUpPage = async (props: {
    searchParams: Promise<{
        callbackUrl: string
    }>
}) => {
    const searchParams = await props.searchParams

    const { callbackUrl } = searchParams

    const session = await auth()
    if (session) {
        return redirect(callbackUrl || '/')
    }

    return (
        <div className='w-full'>
            <Card>
                <CardHeader>
                    <CardTitle className='text-2xl'>Create account</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='mt-4'>
                        <GoogleSignInForm />
                    </div>
                    <SeparatorWithOr />
                    <SignUpForm />
                </CardContent>
            </Card>
        </div>
    )
}

export default SignUpPage
