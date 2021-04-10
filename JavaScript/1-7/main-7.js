class Taiyaki {
    //コンストラクタ 
    constructor(name) {
        this.name = name;
    }
    menu() {
        console.log(`中身は${this.name}です。`);
    }
}
//クラスをインスタンス化
let anko = new Taiyaki("あんこ");
let cream = new Taiyaki("クリーム");
let cheese = new Taiyaki("チーズ");

anko.menu();
cream.menu();
cheese.menu();