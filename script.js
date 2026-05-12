console.log("script carregado");

import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment
} from "firebase/firestore";

import { db } from "./firebase.js";


async function contarVisita() {

  try {

    let visitorId = localStorage.getItem("visitor_id");

    const contadorRef = doc(db, "site", "contador");


    // Só conta se for novo visitante
    if (!visitorId) {

      // cria id único
      visitorId = crypto.randomUUID();

      // salva no navegador
      localStorage.setItem("visitor_id", visitorId);

      const snap = await getDoc(contadorRef);

      // cria contador
      if (!snap.exists()) {

        await setDoc(contadorRef, {
          visitas: 1
        });

      } else {

        // incrementa
        await updateDoc(contadorRef, {
          visitas: increment(1)
        });

      }

    }

    // pega valor atualizado
    const novoSnap = await getDoc(contadorRef);

    // mostra no HTML
    document.getElementById("contador").innerText =
      novoSnap.data().visitas;

    console.log("contador funcionando");

  } catch (erro) {

    console.error("ERRO:", erro);

  }

}

contarVisita();