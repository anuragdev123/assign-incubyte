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

    numbers = numbers.replace(/\n/g, seprator);

   let nums = numbers.split(seprator).filter(Boolean).map(Number);

   let sum=0;
   
    for (let n of nums) {
        if (n < 0) neg.push(n);
        else sum += n;
    }

   return sum;

}

module.exports = add;
