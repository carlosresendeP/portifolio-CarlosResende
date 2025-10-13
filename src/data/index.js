// Exportações centralizadas dos dados de projetos

// Dados dos projetos
export {
    projectsData,
    getProjectsByCategory,
    getFeaturedProjects,
    getProjectById
} from './projectsData';

// Utilitários
export {
    searchProjects,
    filterByTechnology,
    sortProjects,
    isValidUrl,
    getAllTechnologies,
    getAllCategories
} from './projectsUtils';

// Constantes
export {
    PROJECT_CATEGORIES,
    CATEGORY_LABELS,
    TECH_COLORS,
    PROJECT_STATUS,
    LINK_TYPES
} from './projectsConstants';