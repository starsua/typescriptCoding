// index signature
//propery의 이름이 동적이라면 index signature 이용
// class->object

class Students{
    // mark: string='male'; 
    [index:string]:'male'|'female';
    sua:'female'='female'
}

const aCl=new Students();
aCl.mark='male';
aCl.jade='male';

console.log(aCl);

const bCl=new Students();
bCl.chloe='female';
bCl.alex='male';
bCl.anna='female'

console.log(bCl)