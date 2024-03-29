
import Flex from '../../utility-components/flex/Flex'
import { Box } from '@mui/material'
import Image from '../../utility-components/image/Image'
import Text from '../../utility-components/text/Text'
import { DEFAULT_COLORS } from '@/app/utils/colors'
import useIsMobile from '@/app/hooks/useIsMobile'

interface PinnedSectionProps {
    title: string,
    image: string,
    description: string
}
const PinnedSection = ({ title, image, description }: PinnedSectionProps) => {
    const isMobile = useIsMobile()
    return (
        <Box my="1rem" ml="2rem" className="move-u">
            <Flex alignItems='start' justifyContent='start' gap={'2.5rem'}>
                <Flex flexDirection="column" justifyContent='start' > 
                    <Image src={image} width='70px' style={{marginBottom:'1rem'}}/>
                    {
                        !isMobile && title !== "Contribution" && (<div className='horizontal-line'></div>)
                    }

                </Flex>
                <Box >
                    <Box mb="2rem">
                        <Text fontSize={isMobile ? '25px' : '40px'} lineHeight='19px' fontFamily='SEN bold' color={DEFAULT_COLORS.White}>{title}</Text>
                    </Box>
                    <Text fontSize='15px' color={DEFAULT_COLORS.Light} lineHeight='17px' maxWidth='350px' >{description}</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default PinnedSection
