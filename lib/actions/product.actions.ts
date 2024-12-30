'use server'

import connectToDb from '@/lib/db'
import Product from '@/lib/db/models/product.model'

export const getAllCategories = async () => {
    await connectToDb()
    const categories = await Product.find({ isPublished: true }).distinct(
        'category'
    )
    return categories
}

export const getProductsForCard = async ({
    tag,
    limit = 4,
}: {
    tag: string
    limit?: number
}) => {
    await connectToDb()
    const products = await Product.find(
        { tags: { $in: [tag] }, isPublished: true },
        {
            name: 1,
            href: { $concat: ['/product/', '$slug'] },
            image: { $arrayElemAt: ['$images', 0] },
        }
    )
        .sort({ createdAt: 'desc' })
        .limit(limit)
    return JSON.parse(JSON.stringify(products)) as {
        name: string
        href: string
        image: string
    }[]
}
