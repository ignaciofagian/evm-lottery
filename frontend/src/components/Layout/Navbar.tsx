import { useContext } from 'react';
import {
	Box,
	Flex,
	HStack,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	useDisclosure,
	useColorModeValue,
	Stack,
	useColorMode,
	Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import ReactCountryFlag from 'react-country-flag';
import { I18nContext, intlInstance as $t } from '../../contexts/I18nContext';
import ButtonConnect from './ButtonConnect';
import LogoImage from './../../assets/logo.png';

interface Props {
	children: React.ReactNode;
	to: string;
}

function renameLocale(locale: string) {
	if (locale === 'en') return 'US';
	else return 'ES';
}

const NavLink = (props: Props) => {
	const { children } = props;
	return (
		<Box
			as="a"
			px={2}
			py={2}
			rounded={'md'}
			_hover={{
				textDecoration: 'none',
				bg: useColorModeValue('gray.200', 'gray.700'),
			}}
			href={props.to}
		>
			{children}
		</Box>
	);
};

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { locale, changeLocale } = useContext(I18nContext);

	const Links = [{ label: $t.formatMessage({ id: 'navbar.lottery' }), to: '/lottery' }];

	const colorMobile = useColorModeValue('gray.200', 'whiteAlpha.200');

	return (
		<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
			<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
				<IconButton
					size={'md'}
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					aria-label={'Open Menu'}
					display={{ md: 'none' }}
					onClick={isOpen ? onClose : onOpen}
				/>
				<HStack spacing={8} alignItems={'center'}>
					<Box py={-10}>
						<Image src={LogoImage} alt="Logo" h={50} />
					</Box>
					<HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
						{Links.map((link) => (
							<NavLink key={link.to} to={link.to}>
								{link.label}
							</NavLink>
						))}
					</HStack>
				</HStack>
				<Flex alignItems={'center'} gap={2}>
					<Flex alignItems={'center'} gap={2} display={{ base: 'none', md: 'flex' }}>
						<Menu>
							<MenuButton as={Button} variant={'link'} cursor={'pointer'}>
								<Button
									leftIcon={<ReactCountryFlag countryCode={renameLocale(locale)} svg />}
									bg={useColorModeValue('gray.200', 'whiteAlpha.200')}
								>
									{locale?.toUpperCase()}
								</Button>
							</MenuButton>
							<MenuList>
								<MenuItem onClick={() => changeLocale('en')}>
									<Flex alignItems="center" gap={4}>
										<ReactCountryFlag countryCode={'US'} svg />
										English
									</Flex>
								</MenuItem>
								<MenuItem onClick={() => changeLocale('es')}>
									<Flex alignItems="center" gap={4}>
										<ReactCountryFlag countryCode={'ES'} svg />
										Español
									</Flex>
								</MenuItem>
							</MenuList>
						</Menu>
						<Button bg={useColorModeValue('gray.200', 'whiteAlpha.200')} onClick={toggleColorMode}>
							{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
						</Button>
					</Flex>
					<ButtonConnect />
				</Flex>
			</Flex>

			{isOpen ? (
				<Box pb={4} display={{ md: 'none' }}>
					<Stack as={'nav'} spacing={4} mb={3}>
						{Links.map((link) => (
							<NavLink key={link.to} to={link.to}>
								{link.label}
							</NavLink>
						))}
					</Stack>
					<Flex gap={3}>
						<Button onClick={() => changeLocale('en')} px={7}>
							<Flex alignItems="center" gap={4}>
								<ReactCountryFlag countryCode={'US'} svg />
								En
							</Flex>
						</Button>
						<Button onClick={() => changeLocale('es')} px={7}>
							<Flex alignItems="center" gap={4}>
								<ReactCountryFlag countryCode={'ES'} svg />
								Es
							</Flex>
						</Button>
						<Button bg={colorMobile} onClick={toggleColorMode} marginLeft={"auto"}>
							{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
						</Button>
					</Flex>
				</Box>
			) : null}
		</Box>
	);
}
