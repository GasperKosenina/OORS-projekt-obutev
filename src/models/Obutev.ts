export interface IObutev {
    id: number,
    cena: number,
    naziv: string,
    kategorija: string,
    velikost: number,
    slika?: string,
    podrobnosti?: string,
}

export const obutve: IObutev[] = [
    { id: 100, cena: 120, naziv: "Nike Air-Force", kategorija: "Vsak dan", velikost: 42, slika: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fa1a0ce0-cb7c-4f36-a295-1f40986b367b/air-force-1-shadow-shoes-X47QLb.png", podrobnosti: "Make every step unique. These kicks put a playful twist on a hoops icon by doubling up on everything you love about the AF-1. Layered materials like linen-evoking textiles and synthetic leather pair with an exaggerated midsole and a pop of pastels to bring you double the style." },
    { id: 101, cena: 80, naziv: "Adidas Superstar", kategorija: "Vsak dan", velikost: 39, slika: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/ff2e419f1eda4ebab23faad6009a3a9e_9366/Superstar_Shoes_White_EG4958_04_standard.jpg" },
    { id: 102, cena: 150, naziv: "Puma RS-X", kategorija: "Športni", velikost: 44, slika: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/371008/13/sv01/fnd/EEA/fmt/png/RS-X-Reinvent-Women's-Sneakers" },
    { id: 103, cena: 200, naziv: "New Balance 990v5", kategorija: "Tek", velikost: 43, slika: "https://nb.scene7.com/is/image/NB/mt580rcb_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600" },
    { id: 104, cena: 90, naziv: "Vans Old Skool", kategorija: "Vsak dan", velikost: 41 }
];

export const reklamiranaObutevPolje: IObutev[] = [

];