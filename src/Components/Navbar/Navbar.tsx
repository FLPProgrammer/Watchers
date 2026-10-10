import Link from 'next/link'


import {
    Container,
    LogoBox,
    Logo,
    OptionsBox,
    Option,
    OtherOptions
} from './styles';

import {
    LuSearch,
    LuBookmark,
    LuUser,
    LuLogOut
} from 'react-icons/lu';

interface NavbarProps {
    onContentClick: () => void;
    onHomeClick: () => void;
}

export function Navbar({
    onContentClick,
    onHomeClick
}: NavbarProps) {

    return (
        <Container>

            <LogoBox>
                <Logo
                    src="/logo.png"
                    alt="Watchers Logo"
                    width={100}
                    height={100}
                />
            </LogoBox>

            <OptionsBox>

                <Option onClick={onHomeClick}>
                    Home Page
                </Option>

                <Option onClick={onContentClick}>
                    Content
                </Option>

                <Option>
                    Configuration
                </Option>

            </OptionsBox>

            <OtherOptions>
                <LuSearch color="white" size={30} />
                <LuBookmark color="white" size={30} />
                <LuUser color="white" size={30} />
                <Link href='/login'><LuLogOut color="white" size={30} /></Link>
            </OtherOptions>

        </Container>
    );
}