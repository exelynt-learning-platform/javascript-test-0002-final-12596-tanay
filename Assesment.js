

for (let i = 4; i>=0; i--) {
  let n = Math.pow(11, i); 
  let res = "";
  res += " ".repeat(4-i);

  while (n > 0) {
    const val = n%10;
    res += val+" ";
    n = Math.floor(n/10);  
  }
  console.log(res);
  
}