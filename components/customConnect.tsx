import { useWeb3, useSwitchNetwork } from '@3rdweb/hooks'
import {
	Box,
	Button,
	Container,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from '@chakra-ui/react'
import { HiChevronDown } from 'react-icons/hi'
import { IoMdWallet } from 'react-icons/io'

const NetworkMetadata = (props: {
	icon: React.ComponentType | string
	chainName: string
	symbol: string
	isTestnet: boolean
}) => {
	const { chainName, icon, symbol, isTestnet } = props

	if (!props || !chainName) return <></>

	const ChainIconElement = icon
	const iconSize = symbol === 'MATIC' ? 5 : 3

	return (
		<Flex gap={2}>
			<Box w={iconSize} h={iconSize}>
				<ChainIconElement />
			</Box>
			<Text>{chainName}</Text>
			{isTestnet && <Text color="grey">(testnet)</Text>}
		</Flex>
	)
}

const CustomConnect = () => {
	const { switchNetwork } = useSwitchNetwork()

	const web3 = useWeb3()

	const {
		address,
		chainId,
		connectWallet,
		disconnectWallet,
		getNetworkMetadata,
	} = web3

	let networkMetadata: any = null

	if (chainId) networkMetadata = getNetworkMetadata(chainId)

	const switchwallet = () => disconnectWallet()

	return (
		<>
			{address ? (
				<Menu>
					<MenuButton minH={10} as={Button} rightIcon={<HiChevronDown />}>
						{networkMetadata && <NetworkMetadata {...networkMetadata} />}
					</MenuButton>
					<MenuList>
						<MenuItem onClick={() => switchNetwork(80001)}>
							Switch to Polygon Mumbai
						</MenuItem>
						<MenuItem onClick={() => switchNetwork(4)}>
							Switch to Rinkeby
						</MenuItem>
						<MenuItem onClick={switchwallet}>Switch Wallet</MenuItem>
					</MenuList>
				</Menu>
			) : (
				<>
					<Button
						onClick={() => connectWallet('injected')}
						leftIcon={<IoMdWallet />}
						colorScheme="purple"
					>
						Connect MetaMask
					</Button>
				</>
			)}
		</>
	)
}

export default CustomConnect