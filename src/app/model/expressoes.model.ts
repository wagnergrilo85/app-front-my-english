import { StatusEnum } from "../enum/status.enum";
import { CategoriaExpressaoModel } from "./categoria-expressao.model";
import { TipoExpressaoModel } from "./tipo-expressao.model";

export class ExpressoesModel{

  id: number;
  expressaoEg?: string;
  expressaoPt?: string;
  status?: StatusEnum;
  dataCadastro?: Date;
  rating?: number;
  categoriaExpressoes: Array<CategoriaExpressaoModel>;
  tag?: string;
  tipoExpressao: TipoExpressaoModel;
}
