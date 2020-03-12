export interface Action {
    id?: number;
    type: string;
    amount: number;
    category: number;
    date: string;
    description: string;
    categoryName?: string;
}
