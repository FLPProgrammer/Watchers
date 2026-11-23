
import Link from 'next/link';

import {
    Container,
    LogoBox,
    Logo,
    OptionsBox,
    Option,
    OtherOptions,
    WelcomeText,
    ProfileButton,
    ProfileImage,
    ProfilePlaceholder,
} from './styles';

import {
    LuBookmark,
    LuUser,
    LuLogOut,
} from 'react-icons/lu';

import { INavbarProps } from '../../Interfaces/Interfaces';
import { useAuth } from '../../Context/AuthContext';

export function Navbar({
    onContentClick,
    onHomeClick,
    onConfigurationClick,
}: INavbarProps) {
    const { user, loading } = useAuth();

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

                <Option onClick={onConfigurationClick}>
                    Configuration
                </Option>

            </OptionsBox>

            <OtherOptions>

                {!loading && user && (
                    <WelcomeText>
                        Welcome, {user.name}!
                    </WelcomeText>
                )}

                <LuBookmark color="white" size={30} />

                {!loading && user && (
                    <ProfileButton
                        type="button"
                        aria-label="Foto de perfil"
                        title="Foto de perfil"
                    >
                        {user.profileImage ? (
                            <ProfileImage
                                src={user.profileImage}
                                alt={`Foto de perfil de ${user.name}`}
                                width={40}
                                height={40}
                                unoptimized
                            />
                        ) : (
                            <ProfilePlaceholder>
                                <LuUser />
                            </ProfilePlaceholder>
                        )}
                    </ProfileButton>
                )}

                <Link href="/login" aria-label="Logout">
                    <LuLogOut color="white" size={30} />
                </Link>

            </OtherOptions>

        </Container>
    );
}
