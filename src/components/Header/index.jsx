import { StyledHeader, Nav, Logo, Image } from '../Styles/Header.styled'; 
import { Container } from '../Styles/Container.styled';
import { Flex } from '../Styles/Flex.styled';
import { Button } from '../Styles/Button.styled';

const Header = () => {
    return (
        <StyledHeader color='#333'>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' alt='' />
                    <Button>Try It Free</Button>
                </Nav>

                <Flex>
                    <div>
                        <h1>Build The Community Your Fans Will Love</h1>

                        <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>

                        <Button bg='#ff0099' color='#fff'>
                            Get Started For Free
                        </Button>
                    </div>

                    <Image src='./images/illustration-mockups.svg' alt='' />
                </Flex>
            </Container>
        </StyledHeader>
    );
}

export default Header;