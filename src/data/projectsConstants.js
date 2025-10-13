// Constantes relacionadas aos projetos

// Categorias disponíveis
export const PROJECT_CATEGORIES = {
    ALL: 'all',
    FRONTEND: 'frontend',
    BACKEND: 'backend',
    FULLSTACK: 'fullstack',
    MOBILE: 'mobile'
};

// Labels para as categorias
export const CATEGORY_LABELS = {
    [PROJECT_CATEGORIES.ALL]: 'Todos',
    [PROJECT_CATEGORIES.FRONTEND]: 'Frontend',
    [PROJECT_CATEGORIES.BACKEND]: 'Backend',
    [PROJECT_CATEGORIES.FULLSTACK]: 'Full Stack',
    [PROJECT_CATEGORIES.MOBILE]: 'Mobile'
};

// Cores para as tags de tecnologia
export const TECH_COLORS = {
    'React': '#61DAFB',
    'JavaScript': '#F7DF1E',
    'Node.js': '#339933',
    'HTML': '#E34F26',
    'CSS': '#1572B6',
    'MongoDB': '#47A248',
    'PostgreSQL': '#336791',
    'Express': '#000000',
    'Vite': '#646CFF',
    'Styled Components': '#DB7093',
    'n8n': '#EA4B71'
};

// Status dos projetos
export const PROJECT_STATUS = {
    COMPLETED: 'completed',
    IN_PROGRESS: 'in_progress',
    PLANNED: 'planned'
};

// Tipos de links dos projetos
export const LINK_TYPES = {
    DEPLOY: 'deploy',
    GITHUB: 'github',
    FIGMA: 'figma',
    DOCUMENTATION: 'documentation'
};