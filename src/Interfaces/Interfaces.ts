export interface ICardMovieProps {
    name: string;
    src: string;
    category: string;
}


export interface INavbarProps {
    onContentClick: () => void;
    onHomeClick: () => void;
    onConfigurationClick: () => void;
}