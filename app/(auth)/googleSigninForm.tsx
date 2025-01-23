'use client'
import { useFormStatus } from 'react-dom'

import { Button } from '@/components/ui/button'
import { SignInWithGoogle } from '@/lib/actions/user.actions'
import Image from 'next/image'

export const GoogleSignInForm = () => {
    const SignInButton = () => {
        const { pending } = useFormStatus()
        return (
            <Button disabled={pending} className='w-full' variant='outline'>
                <Image src='/icons/google.svg' alt='Google Icon' width={30} height={30} />
                { pending ? 'Redirecting to Google...' : 'Continue with Google'}
            </Button>
        )
    }
    return (
        <form action={SignInWithGoogle}>
            <SignInButton />
        </form>
    )
}
