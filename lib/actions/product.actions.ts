'use server'

import connectToDb from '@/lib/db'
import Product, { IProduct } from '@/lib/db/models/product.model'
import { PAGE_SIZE } from '@/lib/constants'

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

export const getProductsByTag = async ({
    tag,
    limit = 10,
}: {
    tag: string
    limit?: number
}) => {
    await connectToDb()
    const products = await Product.find({
        tags: { $in: [tag] },
        isPublished: true,
    })
        .sort({ createdAt: 'desc' })
        .limit(limit)
    return JSON.parse(JSON.stringify(products)) as IProduct[]
}

// GET ONE PRODUCT BY SLUG
export const getProductBySlug = async (slug: string) => {
    await connectToDb()
    const product = await Product.findOne({ slug, isPublished: true })
    if (!product) throw new Error('Product not found')
    return JSON.parse(JSON.stringify(product)) as IProduct
}

// GET RELATED PRODUCTS: PRODUCTS WITH SAME CATEGORY
export const getRelatedProductsByCategory = async ({
    category,
    productId,
    limit = PAGE_SIZE,
    page = 1,
}: {
    category: string
    productId: string
    limit?: number
    page: number
}) => {
    await connectToDb()
    const skipAmount = (Number(page) - 1) * limit
    const conditions = {
        isPublished: true,
        category,
        _id: { $ne: productId },
    }
    const products = await Product.find(conditions)
        .sort({ numSales: 'desc' })
        .skip(skipAmount)
        .limit(limit)
    const productsCount = await Product.countDocuments(conditions)
    return {
        data: JSON.parse(JSON.stringify(products)) as IProduct[],
        totalPages: Math.ceil(productsCount / limit),
    }
}
