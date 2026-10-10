import {
    PhoneBox,
    BoxInputs,
    Label,
    Input,
    BoxActionButtons,
    Button,
} from './styles';

export function PhoneCard() {
    return (
        <PhoneBox>
            <h3>Change phone number</h3>

            <p>
                Update your WhatsApp number to keep your
                account information up to date.
            </p>

            <BoxInputs>
                <Label htmlFor="current-phone">
                    Current phone number
                </Label>

                <Input
                    id="current-phone"
                    type="tel"
                    name="currentPhone"
                    value="5542999033921"
                    readOnly
                />

                <Label htmlFor="new-phone">
                    New phone number
                </Label>

                <Input
                    id="new-phone"
                    type="tel"
                    name="newPhone"
                    placeholder="Type your new phone number"
                />

                <Label htmlFor="phone-password">
                    Your Password
                </Label>

                <Input
                    id="phone-password"
                    type="password"
                    name="password"
                    placeholder="Type your password"
                />
            </BoxInputs>

            <BoxActionButtons>
                <Button type="button">
                    Cancel
                </Button>

                <Button type="button">
                    Update Number
                </Button>
            </BoxActionButtons>
        </PhoneBox>
    );
}