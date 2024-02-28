import React from 'react'
import PinnedSection from './cards/PinnedSection'
import { IMAGE_COLLECTIONS } from '@/app/utils/images'
import { Box } from '@mui/material'
import Flex from '../utility-components/flex/Flex'
import useIsMobile from '@/app/hooks/useIsMobile'
import Main1 from '@/../public/Images/pin-main1.png'
import { StaticImageData } from 'next/image'

interface MyComponentProps {
    setPinnedImage: (pinnedImage: string) => void;
}

const PinnEffects = ({ setPinnedImage }: MyComponentProps) => {
    const [hover, setHover] = React.useState<number>(1)
    const onMouse = (num: number) => {
        setHover(num)
        if (num === 1) {
            setPinnedImage('/Images/pin-main1.png')
        } else if (num === 2) {
            setPinnedImage('/Images/pin-main2.png')
        }
        else if (num === 3) {
            setPinnedImage('/Images/pin-main3.png')
        }
        else {
            setPinnedImage('/Images/pin-main4.png')
        }
    }
    const isMobile = useIsMobile()
    return (
        <Box p={'2rem'} className="right" ml={isMobile ? '0rem' : '4rem'}>
            <Flex flexDirection="column" justifyContent='start' alignItems='start'>
                {
                    hover === 1 ? (
                        <div >
                            <PinnedSection title='Engage' image={'/Images/pin-mini1.png'} description='Engage with Nexus community and compete with others in sharing the upcoming launches for a chance to win a spot.' />
                        </div>
                    ) : (
                        <Flex className="hover-scale" style={{ marginLeft: '3rem', cursor: 'pointer', position: 'relative', zIndex: 1000 }} gap="3rem"><div className='dot'></div><div onClick={() => onMouse(1)} style={{ textAlign: 'start', fontSize: '25px' }}>Engage</div></Flex>
                    )
                }
                {
                    hover === 2 ? (
                        <div >
                            <PinnedSection title='Snapshot' image={'/Images/pin-mini2.png'} description='Snapshots are taken of all the competing profiles and wallets.' />
                        </div>
                    ) : (
                        <Flex className="hover-scale" style={{ marginLeft: '3rem', cursor: 'pointer', position: 'relative', zIndex: 1000 }} gap="3rem"><div className='dot'></div><div onClick={() => onMouse(2)} style={{ textAlign: 'start', fontSize: '25px' }}>Snapshot</div></Flex>
                    )
                }
                {
                    hover === 3 ? (
                        <div >
                            <PinnedSection title='Lottery' image={'/Images/pin-mini3.png'} description='Nexus smart contract withdraws a lottery for each launch and selects limited random profiles which will be investing.' />
                        </div>
                    ) : (
                        <Flex className="hover-scale" style={{ marginLeft: '3rem', cursor: 'pointer', position: 'relative', zIndex: 1000 }} gap="3rem"><div className='dot'></div><div onClick={() => onMouse(3)} style={{ textAlign: 'start', fontSize: '25px' }}>Lottery</div></Flex>
                    )
                }
                {
                    hover === 4 ? (
                        <div >
                            <PinnedSection title='Contribution' image={'/Images/pin-mini4.png'} description='Selected profiles and wallets invest their funds into the sale and claim purchased tokens according to the vesting period.' />
                        </div>
                    ) : (
                        <Flex className="hover-scale" style={{ marginLeft: '3rem', cursor: 'pointer', position: 'relative', zIndex: 1000 }} gap="3rem"><div className='dot'></div><div onClick={() => onMouse(4)} style={{ textAlign: 'start', fontSize: '25px' }}>Contribution</div></Flex>
                    )
                }
            </Flex>
        </Box>
    )
}

export default PinnEffects
