function mergeSort(arr) {
    if(arr.length === 1) {
        return arr;
    }

    const meio = Math.floor(arr.length / 2);
    const esquerda = arr.slice(0, meio);
    const direita = arr.slice(meio);

    return merge(
        mergeSort(esquerda),
        mergeSort(direita)
    );
}

function merge(esq, dir) {
    let resultado = [];
    let indiceE = 0;
    let indiceD = 0;

    while(indiceE < esq.length && indiceD < dir.length) {
        if(esq[indiceE] < dir[indiceD]) {
            resultado.push(esq[indiceE]);
            indiceE++;
        } else {
            resultado.push(dir[indiceD]);
            indiceD++
        }
    }

    return resultado.concat(esq.slice(indiceE)).concat(dir.slice(indiceD));
}

const lista = [10, 9, 8, 52, 63, 97, 94, 44, 37, 98, 76, 66, 79, 78, 73, 31, 12, 57, 1, 61, 7, 52, 64];

console.log(mergeSort(lista));

// merge Sort

document.querySelector(".merge").innerHTML = mergeSort(lista);