export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Mouse gamer", preco: 439.00, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-3.jpg", quantidadeEstoque: 14 },
    { id: 2, descricao: "Monitor HD", preco: 1200.00, descricaoPreco: "À vista no PIX", imagem: "./assets/monitor-1.jpg", quantidadeEstoque: 53 },
    { id: 3, descricao: "Teclado Power", preco: 700.00, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-1.jpg", quantidadeEstoque: 56 },
    { id: 4, descricao: "Fone 1", preco: 120.00, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-1.jpg", quantidadeEstoque: 26 },
    { id: 5, descricao: "Fone 2", preco: 190.00, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-2.jpg", quantidadeEstoque: 23 },
    { id: 6, descricao: "Fone 3", preco: 160.00, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-3.jpg", quantidadeEstoque: 10 },
    { id: 7, descricao: "HD1TB", preco: 500.00, descricaoPreco: "À vista no PIX", imagem: "./assets/hd.jpg", quantidadeEstoque: 35 },
    { id: 8, descricao: "Laptop 1", preco: 1800.00, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-1.jpg", quantidadeEstoque: 25 },
    { id: 9, descricao: "Laptop 2", preco: 1600.00, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-2.jpg", quantidadeEstoque: 26 },
    { id: 10, descricao: "Placa de vídeo", preco: 900.00, descricaoPreco: "À vista no PIX", imagem: "./assets/placa-video.jpg", quantidadeEstoque: 10 },
    { id: 11, descricao: "Processador", preco: 620.00, descricaoPreco: "À vista no PIX", imagem: "./assets/processador.jpg", quantidadeEstoque: 43 },
    { id: 12, descricao: "Teclado comum", preco: 120.00, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-2.jpg", quantidadeEstoque: 9 },
    { id: 13, descricao: "Mouse 1", preco: 88.00, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-1.png", quantidadeEstoque: 5 },
    { id: 14, descricao: "Mouse 2", preco: 67.00, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-2.jpg", quantidadeEstoque: 30 },
    { id: 15, descricao: "Mouse 4", preco: 75.00, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-4.jpg", quantidadeEstoque: 22 }

]