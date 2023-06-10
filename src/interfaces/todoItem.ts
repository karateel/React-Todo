export interface todoItem {
    id: number,
    title: string,
    description: string,
    dueDate: Date,
    endDate: Date | null
}