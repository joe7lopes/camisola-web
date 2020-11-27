export interface IImage {
    id: string,
    name: string,
    url: string,
    default: boolean,
}

export interface IProductSize {
    id?: string,
    size: string,
    price: number
}

export enum Category {
    PORTUGAL = 'portugal',
    BENFICA = 'benfica',
    PORTO = 'porto',
    SPORTING = 'sporting',
    CAMISOLAS = 'camisolas',
    CRIANCAS = 'criancas',
    FATOS_DE_TREINO = 'fatos_de_treino',
    EQUIPAMENTOS_CRIANCA = 'equipamento_crianca',
    OUTROS = 'outros',
    PROMOCOES = 'promocoes',
}

export interface IProductCategory {
    name: string,
    displayName: string
}

export interface IProduct {
    id: string,
    name: string,
    categories: string[],
    sizes: IProductSize[],
    images: IImage[],
    customizable: boolean,
    defaultPrice: number,
    description: string
}

export interface ICreateProduct {
    name: string,
    categories: string[],
    sizes: IProductSize[],
    images: string[],
    isCustomizable: boolean,
    defaultPrice: number,
    description: string
}

export interface IUpdateProduct {
    id: string,
    name: string,
    categories: string[],
    sizes: IProductSize[],
    imageIds: string[],
    isCustomizable: boolean,
    defaultPrice: number,
    description: string,
}
