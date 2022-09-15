import { ThemeProvider } from 'styled-components';
import { theme } from './themes/theme';
import GlobalStyles from './components/Styles/Global';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import { Container } from './components/Styles/Container.styled';
import content from './content';

function App() { 
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, idx) => {
            return <Card key={idx} item={item} />
          })}
        </Container>
        <Footer />
      </ThemeProvider>
  );
}

export default App;
