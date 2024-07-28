export interface Node {
    id: string;
    info: string;
    registros?: string[];
}

export interface Link {
    source: string;
    target: string;
}