import { Container } from './styles';
import { EmailCard } from './Components/EmailCard/EmailCard';
import { PhoneCard } from './Components/PhoneCard/PhoneCard';
import { ProfileCard } from './Components/ProfileCard/ProfileCard';


export function ConfigurationArea() {
    return (
        <Container>
            <EmailCard />
            <PhoneCard />
            <ProfileCard />
        </Container>
    )
}