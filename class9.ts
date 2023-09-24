//singleton pattern
//프로그램동안 단 하나의 obj 만 만듦 ! 

class ClassName{
    private static instance:ClassName|null=null;
    public static getInstance():ClassName{
        // ClassName 으로부터 만든 object가 있으면 그걸 리턴
        // 없으면, 만들어서 리턴
        if(ClassName.instance===null){
            ClassName.instance=new ClassName()
        }

        return ClassName.instance;
    }
    private constructor(){

    }

}

const acn=ClassName.getInstance();
const bcn=ClassName.getInstance();

console.log(acn===bcn);