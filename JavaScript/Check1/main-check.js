let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven(num) {
    for(let i = 0 ; i <=numbers.length; i++){
        if(numbers[i] % 2 === 0){
        console.log(numbers[i] + 'は偶数です'); 
        }
    }
}
isEven();


class Car {
    //コンストラクタ 
    constructor(name,num) {
        this.name = name;
        this.num = num;
    }
    getNumGas() {
        console.log(`ガソリンは${this.name}です。ナンバーは${this.num}です。`);
    }
}
//クラスをインスタンス化
let car1 = new Car("ハイオク","1234");
car1.getNumGas();

