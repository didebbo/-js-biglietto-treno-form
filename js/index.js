// DOM

const dom_input_name = document.getElementById("input_name");
const dom_output_name = document.getElementById("output_name");
const dom_input_km = document.getElementById("input_km");
const dom_input_eta = document.getElementById("input_eta");
const dom_content_output_card = document.getElementById("content-output-card");
const dom_output_offerta = document.getElementById("output_offerta");
const dom_output_carrozza = document.getElementById("output_carrozza");
const dom_output_id = document.getElementById("output_id");
const dom_output_costo = document.getElementById("output_costo");
const dom_btn_show = document.getElementById("btn_show");
const dom_btn_hide = document.getElementById("btn_hide");

// Vars

const costoKm = 0.21;
const scontoMinori = 20;
const scontoOver = 40;

// Functions

dom_btn_show.onclick = () => {

    let name = dom_input_name.value.toLowerCase();
    let km = parseInt(dom_input_km.value);
    let eta = dom_input_eta.value;
    let costoTotale = 0;

    if (name === "" || name.length <= 0) return;
    if (isNaN(km) || km <= 0) return;

    dom_output_name.innerHTML = name;
    dom_output_carrozza.innerHTML = Math.floor(Math.random() * 20) + 1;
    dom_output_id.innerHTML = Math.floor(Math.random() * 10000) + 10000;

    costoTotale = costoKm * km;

    if (eta === "minorenne") {
        let sconto = (costoTotale * scontoMinori) / 100;
        costoTotale -= sconto;
        dom_output_offerta.innerHTML = "Minorenni";
    }
    else if (eta === "over") {
        let sconto = (costoTotale * scontoOver) / 100;
        costoTotale -= sconto;
        dom_output_offerta.innerHTML = "Silver";
    }
    else {
        dom_output_offerta.innerHTML = "Standard";
    }

    costoTotale = costoTotale.toFixed(2);

    dom_output_costo.innerHTML = costoTotale + " €";

    dom_content_output_card.classList.add("show");
}

dom_btn_hide.onclick = () => {

    dom_content_output_card.classList.remove("show");
    dom_input_name.value = "";
    dom_input_km.value = "";
}