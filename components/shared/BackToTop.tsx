
import { useEffect, useState } from 'react'
import { ChevronsUp } from 'lucide-react'
import { Button } from '@/components/ui/button'



const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
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
                className='fixed bottom-8 right-8 z-50 rounded-full animate-pulse bg-[#0095da] text-white hover:bg-[#e68324] transition-colors duration-300 w-10 h-10'
            >
                <ChevronsUp strokeWidth={3} />
            </Button>
        ) : null;
    };

    export default BackToTopButton;
