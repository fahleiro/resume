export default {
    id: 'docker',
    title: 'Docker',
    summary: 'Containerização de aplicações, automação de testes e orquestração de ambientes distribuídos',
    content: `
        <p>
            Utilização de Docker para construção e execução de imagens voltadas à automação de testes web e mobile,
            encapsulando dependências como browsers, drivers, Appium e ferramentas de build via Dockerfile.
        </p>

        <p>
            Desenvolvimento e deploy de uma plataforma própria de DeviceFarm, orquestrada com Docker Compose,
            integrando serviços como MongoDB e containers dedicados para execução de Appium Server com plugin.
        </p>

        <p>
            Criação de ambientes para workflows e agentes de IA, utilizando Docker para integração entre serviços
            como ollama, pgvector e n8n.
        </p>
    `
};
