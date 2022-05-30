import { StatusEnum } from "../enum/status.enum";
import { CategoriaFraseModel } from "./categoria-frase.model";
import { TipoFraseModel } from "./tipo-frase.model";

export class FrasesModel{

    id: number;
    fraseEg?: string;
    frasePt?: string;
    status?: StatusEnum;
    dataCadastro?: Date;
    rating?: number;
    categoriaFrases?: Array<CategoriaFraseModel>;
    muitoUsada?: boolean;
    tag?: string;
    tipoFrase: TipoFraseModel;
}
