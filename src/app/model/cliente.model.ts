import { TelefoneModel } from './telefone.model';

export class ClienteModel{
        id: number;
        nome: string;
        tipoCliente: number;
        cpf?: string;
        cnpj?: string;
        rg?: string;
        ie?: string;
        dataCadastro?: Date;
        ativo?: number;
        telefones: TelefoneModel[];
}