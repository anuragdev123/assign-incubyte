function add (numbers){
   if (!numbers) return 0;

   let neg = [];

    if (neg.length) throw new Error(`Negative numbers not allowed: ${neg.join(', ')}`);

    let seprator = ',';

    if (numbers.startsWith("//")) {
        let idx = numbers.indexOf('\n');
        seprator = numbers.substring(2, idx);
        numbers = numbers.substring(idx + 1);
    }

}
