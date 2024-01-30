export interface Post {
    title: string;
    description: string;
    content: string;
    url: string;
    image: string;
    publishedAt: Date;
    source: Source;
}

export interface Source {
    url: string;
    name: string;
}