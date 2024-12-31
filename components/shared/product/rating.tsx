'use client';

import { Star } from 'lucide-react';

interface RatingProps {
    rating: number;
    className?: string;
}

const Rating = ({ rating, className = '' }: RatingProps) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.3 && rating % 1 <= 0.7;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(<Star key={`full-${i}`} className="text-primary fill-primary" />);
    }

    // Add half star if needed
    if (rating % 1 > 0) {
        if (hasHalfStar) {
            stars.push(<Star key="half" className="text-primary fill-primary/50" />);
        } else if (rating % 1 > 0.7) {
            stars.push(<Star key="almost-full" className="text-primary fill-primary" />);
        }
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<Star key={`empty-${i}`} className="text-primary" />);
    }

    return (
        <div
            className={`flex items-center gap-0.5 ${className}`}
            aria-label={`Rating: ${rating} out of 5 stars`}
        >
                {stars}
        </div>
    );
};

export default Rating;
