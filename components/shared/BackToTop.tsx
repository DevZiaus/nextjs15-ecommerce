
import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'


const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

        return isVisible ? (
            <Button
                onClick={scrollToTop}
                className='fixed bottom-8 right-8 z-50 rounded-full animate-pulse bg-black text-white hover:bg-gray-800'
            >
                <ChevronUp />
            </Button>
        ) : null;
    };

    export default BackToTopButton;
