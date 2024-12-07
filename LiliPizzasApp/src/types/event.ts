export interface EventType {
    id: string
    data: string
    local: string
    numeroAdultos: number
    numeroCriancas: number
    tipoEvento: string
    valorOrcamento: number
    quantGarcons: number
    quantPizzaiola: number
    horario: string
    status: EventStatus
    createdBy: string
}

export enum EventStatus {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    REJECTED = 'REJECTED',
}
