import { StatusEnum } from "../enum/status.enum";
import { VerboEnum } from "../enum/verbo.enum";
import { CategoriaPalavrasModel } from "./categoria-palavras.model";
import { TipoPalavra } from "./tipo-palavra.model";

export class PalavrasModel{

  id: number;
  categoriaPalavras?: Array<CategoriaPalavrasModel>;
  palavraEg?: string;
  palavraPt?: string;
  status?: StatusEnum;
  dataCadastro?: string;
  rating?: number;
  tag?: string;
  tipoPalavra: TipoPalavra;
  verbo: VerboEnum;
}
