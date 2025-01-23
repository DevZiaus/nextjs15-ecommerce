import React from 'react'

import Header from '@/components/shared/header/Index'
import Footer from '@/components/shared/Footer'

const RootLayout = async ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
                <main className='flex-1 flex flex-col p-4'>{children}</main>
            <Footer />
        </div>
    )
}

export default RootLayout
