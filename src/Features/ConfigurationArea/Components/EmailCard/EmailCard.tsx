import {
    EmailBox,
    BoxInputs,
    InputGroup,
    Label,
    Input,
    BoxActionButtons,
    Button,
} from './styles';

export function EmailCard() {
    return (
        <EmailBox>
            <strong>WATCHERS</strong>
            <h3>Change e-mail</h3>

            <p>
                Update your account information
            </p>

            <BoxInputs>
                <InputGroup>
                    <Label htmlFor="new-email">
                        New Email
                    </Label>

                    <Input
                        id="new-email"
                        type="email"
                        name="email"
                        placeholder="Type your email"
                    />
                </InputGroup>

                <InputGroup>
                    <Label htmlFor="current-password">
                        Your Password
                    </Label>

                    <Input
                        id="current-password"
                        type="password"
                        name="password"
                        placeholder="Type your password"
                    />
                    </InputGroup>
            </BoxInputs>

            <BoxActionButtons>
                <Button type="button">
                    Cancelar
                </Button>

                <Button type="button">
                    Enviar Código
                </Button>
            </BoxActionButtons>
        </EmailBox>
    );
}