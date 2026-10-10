import {
    ProfileBox,
    BoxImg,
    BoxPlaceholder,
    Button,
} from './styles';

export function ProfileCard() {
    return (
        <ProfileBox>
            <h3>Profile photo</h3>

            <p>
                Manage your profile picture.
            </p>

            <BoxImg>
                <BoxPlaceholder>
                    img
                </BoxPlaceholder>

                <Button type="button">
                    Change photo
                </Button>
            </BoxImg>
        </ProfileBox>
    );
}