import React from "react"
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { IObutev, obutve, reklamiranaObutevPolje } from "../../models/Obutev";
import SeznamObutve from "../SeznamObutve/SeznamObutve";
import DodajObutev from "../Obrazci/DodajObutev";
import Noga from "../Noga/Noga";
import ProdajObutev from "../Obrazci/ProdajObutev";
import { IKupec } from "../../models/Kupec";
import { poljeKupcev } from "../../models/Kupec";
import SeznamProdaneObutve from "../SeznamObutve/SeznamProdaneObutve";
import Podrobnosti from "../Podrobnosti/Podrobnosti";
import SpremeniObutev from "../Obrazci/SpremeniObutev";
import OTrgovini from "../Opis/Otrgovini";
import Reklamiraj from "../Obrazci/Reklamiraj";
import { IReklamacija } from "../../models/Reklamacija";
import SeznamReklamiraneObutve from "../SeznamObutve/SeznamReklamiraneObutve";

const Routing = () => {

    const [seznamObutve, setSeznamObutve] = React.useState<IObutev[]>(obutve)
    const [seznamKupcev, setSeznamKupcev] = React.useState<IKupec[]>(poljeKupcev)
    const [seznamProdaneObutve, setSeznamProdaneObutve] = React.useState<IObutev[]>([])
    const [reklamiraneObutve, setReklamiraneObutve] = React.useState<IObutev[]>(reklamiranaObutevPolje)

    const handleAdd = (obutev: IObutev) => {
        setSeznamObutve([...seznamObutve, obutev]);
    }

    const handleProdaj = (kupec: IKupec) => {
        setSeznamKupcev([...seznamKupcev, kupec])
        const indexObutve = seznamObutve.findIndex(obutev => obutev.id === kupec.id_obutve)
        const prodanaObutev = seznamObutve[indexObutve]
        if (indexObutve !== -1) {
            const novSeznamObutve = [...seznamObutve]
            novSeznamObutve.splice(indexObutve, 1)
            setSeznamObutve(novSeznamObutve)
            setSeznamProdaneObutve([...seznamProdaneObutve, prodanaObutev]);
        }
    }

    const handleOdstrani = (id: number) => {
        setSeznamObutve(seznamObutve.filter(o => o.id !== id));
    }

    const handleSpremeni = (obutev: IObutev) => {
        const indeks = seznamObutve.findIndex(o => o.id === obutev.id);
        if (indeks === -1) {
            console.log(`Obutev s ID-jem ${obutev.id} ni bila najdena.`);
            return;
        }
        const novoPoljeObutve = [...seznamObutve];
        novoPoljeObutve[indeks] = obutev;
        setSeznamObutve(novoPoljeObutve);
    }

    const handleReklamiraj = (reklamacija: IReklamacija) => {
        const indexObutve = seznamProdaneObutve.findIndex(obutev => obutev.id === reklamacija.id_obutve)
        const reklamiranaObutev = seznamProdaneObutve[indexObutve]
        if (indexObutve !== -1) {
            const novSeznamObutve = [...seznamProdaneObutve]
            novSeznamObutve.splice(indexObutve, 1)
            setSeznamProdaneObutve(novSeznamObutve)
            setReklamiraneObutve([...reklamiraneObutve, reklamiranaObutev]);
        }
    }

    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<SeznamObutve seznamObutve={seznamObutve} onOdstraniHandle={handleOdstrani} />} />
                    <Route path="/dodaj-obutev" element={<DodajObutev onDodajObutev={handleAdd} />} />
                    <Route path="/prodaj/:id" element={<ProdajObutev onProdajObutev={handleProdaj} />} />
                    <Route path="/seznam-prodanih" element={<SeznamProdaneObutve seznamProdaneObutve={seznamProdaneObutve} />} />
                    <Route path="/obutev/:id" element={<Podrobnosti seznamObutve={seznamObutve} />} />
                    <Route path="/obutev/spremeni/:id" element={<SpremeniObutev seznamObutve={seznamObutve} onUrediHandle={handleSpremeni} />} />
                    <Route path="/o-trgovini" element={<OTrgovini />} />
                    <Route path="/reklamiraj/:id" element={<Reklamiraj onReklamirajObutev={handleReklamiraj} />} />
                    <Route path="/seznam-reklamiranih" element={<SeznamReklamiraneObutve seznamReklamiraneObutve={reklamiraneObutve}/>}/>

                </Routes>
            </div>
            <div>
                <Noga />
            </div>
        </>
    )
}

export default Routing