export default {
    id: 'docker',
    title: 'Docker',
    summary: 'Containerização de aplicações, automação de testes e orquestração de ambientes distribuídos',
    content: `
        <ul>

        <li>
            <p>
                Construção e execução de imagens voltadas à automação de testes web e mobile,
                encapsulando dependências como browsers, drivers, Appium e ferramentas de build via Dockerfile.
            </p>
        </li>

        <li>
            <p>
                Desenvolvimento e deploy de uma plataforma própria de DeviceFarm, orquestrada com Docker Compose,
                integrando serviços como MongoDB e containers dedicados para execução de Appium Server com plugin.
            </p>
        </li>
        
        <li>
        <p>
            Criação de ambientes para workflows e agentes de IA, utilizando Docker para integração entre serviços
            como ollama, pgvector e n8n.
        </p>
        </li>

        <li>
        <p>
            Dockerização da aplicação qa-track incluindo: database postgres, API e frontend em React.
        </p>
        </li>        

        </ul>
    `
};
