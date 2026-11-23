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

export interface RegisterData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    profileImage?: string;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface AuthResponse {
    message: string;
    user: {
        id: string;
        name: string;
        email: string;
        profileImage: string | null;
    };
}

export interface LoginResponse extends AuthResponse {}