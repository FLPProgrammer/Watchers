'use client'
import Link from 'next/link';
import { Container, Form, BoxIcon, Icon, BoxFields, NameBox, Label, Input, EmailBox, PasswordBox, SignInBox, Button} from './styles';
import { useRegister } from '@/src/Hooks/useRegister';

    export function RegisterPage() {

        const [name, setName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, error, setError] = useRegister();

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            if(password === confirmPassword) {
                console.log('Usuário criado com sucesso!')
            } else {
                setError('A duas senhas precisam ser iguais.')
            }
        }

        return (
            <Container>
                <Form onSubmit={handleSubmit}>
                    <BoxIcon>
                        <Link href='/'>
                        <Icon 
                            src='/logo.png'
                            alt='Icone Watchers'
                            width={100}
                            height={100}
                        />
                        </Link>
                    </BoxIcon>

                    <BoxFields>
                        <NameBox>
                            <Label>Name</Label>
                            <Input name='name' type='text' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}></Input>
                        </NameBox>
                        <EmailBox>
                            <Label>Email</Label>
                            <Input name='email' type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                        </EmailBox>
                        <PasswordBox>
                            <Label>Password</Label>
                            <Input name='password' type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                            
                            <Label>Confirm Password</Label>
                            <Input name='confirmPassword' type='password' placeholder='Confirm your password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Input>
                            {error && <strong>{error}</strong>}
                        </PasswordBox>
                    </BoxFields>
                    <SignInBox>
                        <strong>You have an account?</strong>
                        <Link href="/login"><Button>Log In</Button></Link>
                        <Button type='submit'>Sign up</Button>
                    </SignInBox>
                </Form>
            </Container>
        )
    }