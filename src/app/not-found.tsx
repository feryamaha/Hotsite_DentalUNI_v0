
import { Header } from "../components/PageHome/Header";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Header />
      <section className='bg-[url("/images/bg-not-found.svg")] bg-no-repeat bg-top'>
        <Container>
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center">
            <h1 className="text-4xl font-bold mb-4">Página não encontrada</h1>
            <p className="text-lg mb-8">
              Desculpe, a página que você está procurando não existe.
            </p>
            <Button href="/" variant="btnPrimary">
              Voltar para a página inicial
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
