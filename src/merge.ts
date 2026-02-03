function merge(collection_1: number[], collection_2: number[], collection_3: number[]) : number[] {
    const result: number[] = [];

    let i = 0, j = 0;
    let k = collection_3.length - 1;

    while(i < collection_1.length || j < collection_2.length || k >= 0){
        const v1 = i < collection_1.length ? collection_1[i] : Infinity;
        const v2 = j < collection_2.length ? collection_2[j] : Infinity;
        const v3 = k >= 0 ? collection_3[k] : Infinity;

        const min = Math.min(v1, v2, v3);

        result.push(min);

        if(min === v1) i++;
        else if(min === v2) j++;
        else k--;
    }

    return result;
}