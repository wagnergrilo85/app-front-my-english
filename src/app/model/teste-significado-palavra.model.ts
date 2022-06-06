import { CategoriaPalavrasModel } from "./categoria-palavras.model";
import { TipoPalavraModel } from "./tipo-palavra.model";

export class TesteSignificadoPalavraModel{

  id: number;
  categoriaPalavra?: CategoriaPalavrasModel;
  dataAbertura?: Date;
  dataFinalizacao?: Date;
  direcao?: string;
  nomeTeste?: string;
  qtdPalavras?: number;
  status?: number;
  tipoPalavra?: TipoPalavraModel;
  totalErros?: number;
  totaoAcertos?: number;

}
