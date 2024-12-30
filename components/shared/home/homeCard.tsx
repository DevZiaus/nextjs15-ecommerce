import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

type CardItem = {
  title: string
  link: { text: string; href: string }
  items: {
    name: string
    items?: string[]
    image: string
    href: string
  }[]
}

const HomeCard = ({ cards }: { cards: CardItem[] }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4'>
            {cards.map((card) => (
                <Card key={card.title} className='rounded-none flex flex-col'>
                    <CardContent className='p-4 flex-1'>
                        <h3 className='text-xl font-bold mb-4'>{card.title}</h3>
                        <div className='grid grid-cols-2 gap-4'>
                            {card.items.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className='flex flex-col'
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        className='aspect-square object-scale-down max-w-full h-auto mx-auto'
                                        height={120}
                                        width={120}
                                    />
                                    <p className='text-center text-sm whitespace-nowrap overflow-hidden text-ellipsis'>
                                        {item.name}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </CardContent>
                    {card.link && (
                        <CardFooter>
                            <Link href={card.link.href} className='mt-4 block text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
                                {card.link.text}
                            </Link>
                        </CardFooter>
                    )}
                </Card>
            ))}
        </div>
    )
}

export default HomeCard;
