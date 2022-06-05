import React, {Children, cloneElement, useEffect, useState} from 'react';

const PAGE_WIDTH = 1024;

const Carousel = ({children}) => {
    const [pages, setPages] = useState([])

    useEffect(()=>{
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    },
                })
            })
        )
    }, [])

    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    const minSwipeDistance = 50

    const [offset, setOffset] = useState(0)

    const onTouchStart = (e) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
        if (isLeftSwipe || isRightSwipe) {
            isLeftSwipe ?
                setOffset((currentOffset) => {
                    const newOffset = currentOffset - PAGE_WIDTH
                    const maxOffset = -(PAGE_WIDTH * (pages.length -1))
                    return Math.max(newOffset, maxOffset)
                })
                :
                setOffset((currentOffset)=>{
                    const newOffset = currentOffset + PAGE_WIDTH
                    console.log(newOffset)
                    return Math.min(newOffset, 0)
                })
        }
    }

    return (
        <div className="main-container">
            <div className='window'
                 onTouchStart={onTouchStart}
                 onTouchEnd={onTouchEnd}
                 onTouchMove={onTouchMove}
            >
                <div className="all-pages-container"
                style={{
                    transform:`translateX(${offset}px)`
                }}
                >
                    {pages}
                </div>
            </div>
        </div>
    );
};

export default Carousel;