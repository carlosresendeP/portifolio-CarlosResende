// Utilitários relacionados aos projetos

// Função para filtrar projetos por texto de busca
export const searchProjects = (projects, searchTerm) => {
    if (!searchTerm) return projects;

    const term = searchTerm.toLowerCase();
    return projects.filter(project =>
        project.title.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term) ||
        project.tags.some(tag => tag.toLowerCase().includes(term))
    );
};

// Função para filtrar projetos por tecnologia
export const filterByTechnology = (projects, technology) => {
    if (!technology || technology === 'all') return projects;

    return projects.filter(project =>
        project.technologies.some(tech =>
            tech.toLowerCase() === technology.toLowerCase()
        )
    );
};

// Função para ordenar projetos
export const sortProjects = (projects, sortBy = 'title') => {
    return [...projects].sort((a, b) => {
        switch (sortBy) {
            case 'title':
                return a.title.localeCompare(b.title);
            case 'featured':
                return b.featured - a.featured; // Featured primeiro
            case 'category':
                return a.category.localeCompare(b.category);
            default:
                return 0;
        }
    });
};

// Função para validar URL
export const isValidUrl = (url) => {
    return url && url !== "#" && url.startsWith('http');
};

// Função para obter todas as tecnologias únicas
export const getAllTechnologies = (projects) => {
    const allTechs = projects.flatMap(project => project.technologies);
    return [...new Set(allTechs)].sort();
};

// Função para obter todas as categorias únicas
export const getAllCategories = (projects) => {
    const allCategories = projects.map(project => project.category);
    return [...new Set(allCategories)].sort();
};