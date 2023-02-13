import { Container } from './Container';
import { MainMenu } from './MainMenu';

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full py-6 bg-black text-white uppercase z-40">
            <Container>
                <MainMenu />
            </Container>
        </header>
    );
};
