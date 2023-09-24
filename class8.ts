//static properties & methods

class PersonMt{
    public static CITY='Seoul';
    public hello(){
        console.log('안녕하세요',PersonMt.CITY)
    }
    public change(){
        PersonMt.CITY='LA'
    }
}

const pmt1=new PersonMt();
const pmt2=new PersonMt();
pmt1.hello()

// PersonMt.hello();
PersonMt.CITY;

pmt1.change()

pmt2.hello()