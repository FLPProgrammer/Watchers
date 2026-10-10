'use client'

import Link from 'next/link'
import { Container, Form, BoxIcon, Icon, BoxFields, EmailBox, Label, Input, PasswordBox, SignUpBox, Button } from './styles';
import { useLogin } from '../../Hooks/useLogin';


export function LoginPage() {

    const [email, password, setEmail, setPassword, error, setError] = useLogin();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(email)
        console.log(password)
    }


    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <BoxIcon>
                  <Link href='/'>
                    <Icon
                        src="/logo.png"
                        alt="Icone Watchers"
                        width={100}
                        height={100} 
                    />
                  </Link>
                </BoxIcon>

                <BoxFields>
                    <EmailBox>
                        <Label>Email</Label>
                        <Input name="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                    </EmailBox>
                    <PasswordBox>
                        <Label>Password</Label>
                        <Input name="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                        <strong>Forgot your password?</strong>
                    </PasswordBox>
                </BoxFields>
                <SignUpBox>
                    <strong>Don't have an account?</strong>
                    <Link href='/register'><Button>Create account</Button></Link>
                </SignUpBox>

                <Button type='submit'>Sign In</Button>
            </Form>
        </Container>
    )
}