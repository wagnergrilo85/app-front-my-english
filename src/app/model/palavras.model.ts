import { CategoriaPalavrasModel } from "./categoria-palavras.model";

export class PalavrasModel{

  id: number;
  categoriaPalavras?: Array<CategoriaPalavrasModel>;
  palavraEg?: string;
  palavraPt?: string;
  status?: number;
  dataCadastro?: string;
  rating?: number;

}
